import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import contactHandler from './api/contact.js'

// https://vitejs.dev/config/
function contactApi() {
  return {
    name: 'local-contact-api',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res, next) => {
        if (req.url !== '/' && req.url !== '') return next();
        try {
          if (req.method === 'POST') {
            let body = '';
            for await (const chunk of req) {
              body += chunk;
              if (Buffer.byteLength(body) > 32768) {
                res.writeHead(413, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Your message is too large.' }));
                return;
              }
            }
            try {
              req.body = JSON.parse(body);
            } catch {
              res.writeHead(400, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Please submit a valid JSON request.' }));
              return;
            }
          }
          await contactHandler(req, res);
        } catch (error) {
          next(error);
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'GMAIL_');
  for (const [key, value] of Object.entries(env)) {
    if (process.env[key] === undefined) process.env[key] = value;
  }
  return {
    plugins: [react(), contactApi()],
    base: process.env.GITHUB_PAGES ? '/Yazid_ziad_portfolio/' : '/',
  };
})
