import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.headers.get("content-type")?.includes("application/json")) {
        throw new Error(
          "The contact API is unavailable. Restart npm run dev locally, or redeploy the API on Vercel."
        );
      }
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Your message could not be sent. Please try again.");
      }
      if (result.message !== "Message sent.") {
        throw new Error("The contact API returned an unexpected response. Please try again later.");
      }

      setForm(initialForm);
      setFeedback({ type: "success", message: "Thanks for reaching out. Your message has been sent." });
    } catch (error) {
      setFeedback({
        type: "error",
        message: error.message || "Your message could not be sent. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="contact-section" id="section-contact">
      <div className="contact-card">
        <div className="contact-intro">
          <span className="skills-eyebrow">LET&apos;S CONNECT</span>
          <h2>Have a project in mind?</h2>
          <p>
            Whether you&apos;re looking for a collaborator or have a project to
            discuss, send me a message and I&apos;ll get back to you.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-fields">
            <div className="contact-field">
              <label htmlFor="contact-name">Your name</label>
              <input
                autoComplete="name"
                id="contact-name"
                maxLength={100}
                name="name"
                onChange={updateField}
                placeholder="Jane Smith"
                required
                value={form.name}
              />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-email">Email address</label>
              <input
                autoComplete="email"
                id="contact-email"
                maxLength={254}
                name="email"
                onChange={updateField}
                placeholder="jane@example.com"
                required
                type="email"
                value={form.email}
              />
            </div>
            <div className="contact-field contact-field-full">
              <label htmlFor="contact-subject">What would you like to discuss?</label>
              <input
                id="contact-subject"
                maxLength={150}
                name="subject"
                onChange={updateField}
                placeholder="Project, collaboration, or just saying hello"
                required
                value={form.subject}
              />
            </div>
            <div className="contact-field contact-field-full">
              <label htmlFor="contact-message">Your message</label>
              <textarea
                id="contact-message"
                maxLength={5000}
                name="message"
                onChange={updateField}
                placeholder="Tell me a little about what you have in mind..."
                required
                rows={5}
                value={form.message}
              />
            </div>
            {/* <div className="contact-honeypot" aria-hidden="true">
              <label htmlFor="contact-website">Leave this field empty</label>
              <input
                autoComplete="off"
                id="contact-website"
                name="website"
                onChange={updateField}
                tabIndex={-1}
                value={form.website}
              />
            </div> */}
          </div>

          <div className="contact-form-footer">
            <button className="contact-submit" disabled={isSubmitting} type="submit">
              {isSubmitting ? "Sending..." : "Send message"}
              {!isSubmitting && <span aria-hidden="true">&rarr;</span>}
            </button>
            <p className="contact-feedback" aria-live="polite" data-type={feedback?.type || ""}>
              {feedback?.message || ""}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
