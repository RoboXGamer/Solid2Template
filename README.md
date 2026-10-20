# Solid 2 Template

A minimal Solid 2 full-stack template: a Solid 2 frontend (Vite + start mode, file-based routing) and a Hono backend.

## Structure

```
T2/
├── backend/    # Hono (TypeScript) on port 3001
└── frontend/   # Solid 2 (Vite) on port 3200
```

## Run

In two terminals:

```sh
cd frontend
pnpm install
pnpm dev
```

```sh
cd backend
pnpm install
pnpm dev
```

- Frontend: http://127.0.0.1:3200
- Backend: http://127.0.0.1:3001 (proxied via `/api`)

## Frontend

- Solid 2 (`solid-js` + `@solidjs/web` 2.0.0-rc.15)
- Vite 8 with `@solidjs/vite-plugin` in start mode (`start: true`)
- File-based routing via `filesystem-routing`
- `@solidjs/router` + `@solidjs/meta`
- SSR is off by default; flip `ssr: true` in `vite.config.ts` to enable streaming SSR
- TypeScript strict, Prettier formatting
- Light/dark color scheme via `prefers-color-scheme`

## Backend

- Hono on Node (`@hono/node-server`)
- Routes: `GET /`, `GET /api/health`
- Port from `PORT` env (default 3001)

## Scripts (run in `frontend/` or `backend/`)

```sh
pnpm dev        # dev server
pnpm build      # production build
pnpm typecheck  # tsc --noEmit
pnpm serve      # preview build (frontend)
pnpm format     # prettier --write
```

## Notes

- `Nav` component exists in `src/components/Nav.tsx` but is commented out in `App.tsx` by default.
- `pnpm install` in `frontend/` generates `file-routes.d.ts` automatically.