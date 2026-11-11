import assert from "node:assert/strict";
import { mock, test } from "node:test";
import nodemailer from "nodemailer";
import { createServer } from "vite";
import handler from "../api/contact.js";

const valid = {
  name: "Jane Smith",
  email: "jane@example.com",
  subject: "Collaboration",
  message: "I would like to discuss a project.",
  website: "",
};

async function submit(body = valid, method = "POST") {
  const res = {
    headers: {},
    setHeader(name, value) { this.headers[name] = value; },
    end(value) { this.body = JSON.parse(value); },
  };
  await handler({ method, body }, res);
  return res;
}

test("contact API", async (t) => {
  const previous = {
    GMAIL_ADDRESS: process.env.GMAIL_ADDRESS,
    GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD,
  };
  t.after(() => {
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
    mock.restoreAll();
  });
  const errors = mock.method(console, "error", () => {});

  await t.test("rejects unsupported methods", async () => {
    const res = await submit(undefined, "GET");
    assert.equal(res.statusCode, 405);
    assert.equal(res.headers.Allow, "POST");
  });

  await t.test("rejects the filled spam trap without sending mail", async () => {
    const res = await submit({ ...valid, website: "https://example.com" });
    assert.equal(res.statusCode, 400);
    assert.match(res.body.error, /website field empty/);
  });

  await t.test("validates fields and exact length boundaries", async () => {
    for (const [field, limit] of Object.entries({ name: 100, email: 254, subject: 150, message: 5000 })) {
      assert.equal((await submit({ ...valid, [field]: " " })).statusCode, 400);
      assert.equal((await submit({ ...valid, [field]: "a".repeat(limit + 1) })).statusCode, 400);
    }
    assert.equal((await submit({ ...valid, email: "invalid" })).statusCode, 400);
    assert.equal((await submit({ ...valid, subject: "Hello\r\nBcc: other@example.com" })).statusCode, 400);
  });

  await t.test("reports missing Gmail credentials explicitly", async () => {
    delete process.env.GMAIL_ADDRESS;
    delete process.env.GMAIL_APP_PASSWORD;
    const res = await submit();
    assert.equal(res.statusCode, 503);
    assert.match(res.body.error, /not configured/);
    assert.ok(errors.mock.callCount() > 0);
  });

  process.env.GMAIL_ADDRESS = "yazid.ziad2000@gmail.com";
  process.env.GMAIL_APP_PASSWORD = "abcd efgh ijkl mnop";
  const messages = [];
  let transportOptions;
  let closes = 0;
  const transport = {
    async sendMail(message) { messages.push(message); },
    close() { closes++; },
  };
  mock.method(nodemailer, "createTransport", (options) => {
    transportOptions = options;
    return transport;
  });

  await t.test("uses Gmail authentication, fixed recipient, and visitor reply-to", async () => {
    const res = await submit({
      ...valid,
      name: "a".repeat(100),
      subject: "a".repeat(150),
      message: "a".repeat(5000),
    });
    assert.equal(res.statusCode, 200);
    assert.equal(res.body.message, "Message sent.");
    assert.equal(transportOptions.service, "gmail");
    assert.equal(transportOptions.auth.pass, "abcdefghijklmnop");
    assert.equal(messages[0].to, "yazid.ziad2000@gmail.com");
    assert.equal(messages[0].from.address, process.env.GMAIL_ADDRESS);
    assert.equal(messages[0].replyTo, valid.email);
    assert.equal(closes, 1);
  });

  await t.test("does not claim success when Gmail rejects delivery", async () => {
    mock.method(transport, "sendMail", async () => {
      throw Object.assign(new Error("Authentication rejected"), { code: "EAUTH" });
    });
    const res = await submit();
    assert.equal(res.statusCode, 502);
    assert.match(res.body.error, /could not be delivered/);
    assert.equal(closes, 2);
  });
});

test("Vite serves the contact API locally instead of returning HTML", async () => {
  const server = await createServer({
    server: { host: "127.0.0.1", port: 0, open: false },
  });
  try {
    await server.listen();
    const address = server.httpServer.address();
    assert.equal(typeof address, "object");
    const url = `http://127.0.0.1:${address.port}/api/contact`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...valid, website: "https://example.com" }),
    });
    assert.equal(response.status, 400);
    assert.match(response.headers.get("content-type"), /application\/json/);
    assert.match((await response.json()).error, /website field empty/);

    const invalidJson = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "{invalid",
    });
    assert.equal(invalidJson.status, 400);
    assert.match((await invalidJson.json()).error, /valid JSON/);

    const oversized = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...valid, message: "a".repeat(33000) }),
    });
    assert.equal(oversized.status, 413);
    assert.match((await oversized.json()).error, /too large/);
  } finally {
    await server.close();
  }
});
