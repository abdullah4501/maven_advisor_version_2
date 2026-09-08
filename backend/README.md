# Mavens Advisor API

Standalone Express API for the Mavens Advisor quotation and CFO-call forms.

## Local setup

1. Copy `.env.example` to `.env` and add the real Resend credentials.
2. Install dependencies with `npm install`.
3. Start the backend with `npm run dev`.
4. Start the frontend from the repository root with `npm run dev`.

The backend defaults to `http://localhost:3001`, while the frontend uses the `VITE_API_BASE_URL` value from the root `.env` file.

## Routes

- `GET /api/health`
- `POST /api/quote`
- `POST /api/cfo-booking`

## Production deployment

Deploy the `backend` directory as its own Node.js application. Configure these environment variables on the backend host:

```env
PORT=3001
FRONTEND_URL=https://mavensadvisor.com,https://www.mavensadvisor.com
RESEND_API_KEY=re_your_resend_api_key
QUOTE_EMAIL_FROM="Mavens Advisor Website <quotes@mail.mavensadvisor.com>"
QUOTE_EMAIL_TO=adeelshaikh@mavensadvisor.com
```

Set the production frontend environment variable to the public backend URL before building the frontend:

```env
VITE_API_BASE_URL=https://api.example.com
```

Do not include a trailing slash. Replace `https://api.example.com` with the actual backend origin.

Use `npm start` as the production start command.
