# ANUGATO Architecture

This workspace contains two repositories with a strict service boundary:

```text
Browser
	-> anugato-web (Next.js presentation layer)
	-> same-origin Next.js API routes
	-> anugato-integrations (FastAPI backend)
	-> Supabase/database and external integrations
```

## anugato-web

The web repository owns pages, components, form validation, and browser-facing API routes.

```text
app/
	page.tsx                         Home page; loads showcase data through the backend
	api/lead/route.ts                Validates and proxies lead submissions
	api/newsletter/route.ts          Validates and proxies newsletter submissions
components/                       Presentation and form components
lib/backend/client.ts             Server-only backend HTTP client
lib/validation.ts                 Zod input schemas
.env.example                      BACKEND_SERVICE_URL and optional token
```

The web repository must not contain Supabase clients, database credentials, database migrations, or direct database queries. `BACKEND_SERVICE_TOKEN` is server-only and must never use a `NEXT_PUBLIC_` prefix.

## anugato-integrations

The backend repository owns database access, persistence, integrations, and backend validation.

```text
app/
	main.py                          FastAPI application and route registration
	config.py                        Server-only environment configuration
	models.py                        Pydantic request/response models
	routes/health.py                 GET /health
	routes/showcase.py               GET /dashboard/showcase
	routes/leads.py                  POST /leads
	routes/newsletter.py             POST /newsletter/subscribers
	services/database.py             Supabase service-role access
supabase/migrations/               Database schema owned by the backend
```

## API boundary

- `GET /health` checks backend availability.
- `GET /dashboard/showcase` returns public dashboard preview data.
- `POST /leads` persists a validated contact/demo request.
- `POST /newsletter/subscribers` upserts a validated subscriber.

The browser calls the Next.js same-origin routes for form submissions. Next.js calls the FastAPI service with `BACKEND_SERVICE_URL` and an optional server-to-server bearer token. Supabase credentials are configured only in `anugato-integrations`.
