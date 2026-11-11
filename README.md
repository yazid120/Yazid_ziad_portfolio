# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Contact form on Vercel

The contact form posts to `/api/contact`, which sends submissions to
`yazid.ziad2000@gmail.com` using Gmail SMTP. The visitor's email is the reply-to
address, not the sender. No custom domain or Resend account is required.

### Gmail configuration

1. Enable Google 2-Step Verification for the Gmail account used to send mail.
2. Create an [App Password](https://myaccount.google.com/apppasswords).
   Use this instead of your normal Google password. Some managed accounts or
   accounts with additional security restrictions do not offer App Passwords.
3. Configure these server-only environment variables:
   - `GMAIL_ADDRESS`: `yazid.ziad2000@gmail.com`.
   - `GMAIL_APP_PASSWORD`: the Google App Password (spaces are accepted).

For local development, copy `.env.example` to `.env.local`, fill in the App
Password, and restart `npm run dev`. Vite serves the same contact handler locally;
no separate backend server or Vercel CLI is needed. `npm run preview` is a static
preview and does not run the API.

For Vercel, add both variables in Project Settings > Environment Variables
for Production (and Preview if needed), then deploy the updated source from the
repository root. Vercel must include `api/contact.js` as a serverless function,
not just upload the `dist` directory. Redeploy after changing variables.

Keep the `website` field empty when testing: it is a hidden spam trap.
The form displays server-side validation and configuration errors.
If the endpoint returns HTML or NOT_FOUND instead of JSON, the API is not running
or has not been deployed.

Never commit `.env.local`, share the App Password, or prefix these variables with
`VITE_`. Gmail sending quotas and spam filtering apply; this is intended for
low-volume portfolio inquiries, not bulk mail. The honeypot is basic protection;
consider rate limiting or CAPTCHA if spam becomes a problem.

Run `npm run test:contact` for mocked API and local routing checks. These tests do
not send real email. After deployment, submit a message with the website field
empty and confirm that it arrives in the inbox (or spam folder).
