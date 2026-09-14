# anugato-web

Next.js frontend for ANUGATO AI BHARAT. The web app owns the UI and calls the
`anugato-integrations` FastAPI service; it does not connect to Supabase or the
database directly.

## Local setup

After cloning the repository:

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The local `.env.local` file is intentionally ignored by Git. It must contain:

```env
BACKEND_SERVICE_URL=http://127.0.0.1:8000
```

Set `BACKEND_SERVICE_TOKEN` as well if the backend is configured to require
service-to-service authentication. Never add secrets to `.env.example` or
commit `.env.local`.

## Backend dependency

Start `anugato-integrations` before opening the home page:

```bash
cd ../anugato-integrations
.venv/bin/uvicorn app.main:app --reload
```

The frontend expects these backend endpoints:

- `GET /health`
- `GET /dashboard/showcase`
- `GET /pricing`
- `POST /leads`
- `POST /newsletter/subscribers`

## Scripts

```bash
npm run dev       # Start local development
npm run lint      # Run ESLint
npm run build     # Create a production build
npm run start     # Serve the production build
```

## Ignored local files

These files are recreated after cloning and must not be committed:

- `.env.local` for local backend configuration
- `node_modules/` for installed npm dependencies
- `.next/` and `out/` for Next.js build output
- TypeScript and package-manager caches/logs

The committed `.env.example` file is the safe configuration template.
