# Yazid Ziad Portfolio

A personal portfolio showcasing experience, certifications, skills, and services,
with a contact form for project inquiries and collaboration.

[Live portfolio](https://yazid-ziad-portfolio.vercel.app/)

## Technology stack

- React 18 and Vite
- Tailwind CSS and custom responsive styles
- An auto-scrolling, color-coded skills trail with reduced-motion support
- Vercel serverless functions and Nodemailer for Gmail SMTP delivery

## Getting started

Install a current Node.js LTS release, then run:

```sh
npm install
npm run dev
```

The development server runs on port 3000 by default.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the site and local contact API |
| `npm run build` | Create the production frontend in `dist` |
| `npm run preview` | Preview the built frontend without the contact API |
| `npm run test:contact` | Run contact validation, mocked delivery, and local routing tests |
| `npm run lint` | Run the repository's ESLint checks |

## Contact form on Vercel

The [contact form](src/Components/Contact.jsx) posts to the
[contact API](api/contact.js), which sends inquiries to the portfolio owner's
configured recipient using Gmail SMTP. The visitor's email is the reply-to
address, not the sender. No custom domain or Resend account is required.

### Gmail configuration

1. Enable Google 2-Step Verification for the Gmail account used to send mail.
2. Create an [App Password](https://myaccount.google.com/apppasswords).
   Use this instead of your normal Google password. Some managed accounts or
   accounts with additional security restrictions do not offer App Passwords.
3. Configure these server-only environment variables:
   - `GMAIL_ADDRESS`: the Gmail account used to authenticate and send mail.
   - `GMAIL_APP_PASSWORD`: the Google App Password (spaces are accepted).

For local development, copy [.env.example](.env.example) to `.env.local`, set both
variables, and restart `npm run dev`. Vite serves the same contact handler locally;
no separate backend server or Vercel CLI is needed. `npm run preview` is a static
preview and does not run the API.

For Vercel, add both variables in Project Settings > Environment Variables
for Production (and Preview if needed), then deploy the updated source from the
repository root. Vercel must include `api/contact.js` as a serverless function,
not just upload the `dist` directory. Local environment files are not uploaded to
Vercel: add the variables in its dashboard separately and redeploy after changing
them. The contact API is not supported on static-only hosts such as GitHub Pages.

Keep the `website` field empty when testing: it is a hidden spam trap.
The form displays server-side validation and configuration errors.
If the endpoint returns HTML or NOT_FOUND instead of JSON, the API is not running
or has not been deployed.
If the form reports that email delivery is not configured, check that both
variables are non-empty in the environment where the API is running. On Vercel,
ensure they apply to Production and redeploy after saving.

Never commit `.env.local`, share the App Password, or prefix these variables with
`VITE_`. Gmail sending quotas and spam filtering apply; this is intended for
low-volume portfolio inquiries, not bulk mail. The honeypot is basic protection;
consider rate limiting or CAPTCHA if spam becomes a problem.

Run `npm run test:contact` for mocked API and local routing checks. These tests do
not send real email. After deployment, submit a message with the website field
empty and confirm that it arrives in the inbox (or spam folder).
