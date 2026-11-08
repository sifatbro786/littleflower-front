# Little Flower International English Medium School — web (Next.js)

One Next.js app: public website, `/admin` (admin + teacher by role) and `/portal` (student/guardian).
Built on STR Solutions' school platform (first install: Greendale). API: `littleflower-back`.

```bash
npm install
cp .env.example .env.local
# demo (Vercel client preview): DATA_MODE=demo, no backend needed
# live (local dev + VPS): DATA_MODE=live, API_INTERNAL_URL=http://127.0.0.1:4020 and littleflower-back running
npm run dev                  # http://localhost:3000
npm run build && npm start   # production (PM2 on the VPS runs `next start -p 3000`)
```

## Rules (do not break)
- **School identity lives in `config/school.js`** (slug, name, contact, colours, nav). No school-specific values in components.
  `school.slug` must equal the API's `APP_SLUG` (auth cookie names `<slug>_at` / `<slug>_rt`).
- **Pages never import `/content`.** They call `lib/data/*`; demo mode reads `/content`, live mode calls `/api/public/*`.
- Shapes are documented in `lib/data/types.js` (JSDoc). JavaScript only, no TypeScript.
- The frontend never sends email. Demo: `app/api/contact` validates and answers without sending.
  Live: `/api/contact` goes to Express, which stores the message and emails through the queue.
- Images: `public/images`, videos: `public/videos` (720p H.264, faststart). CMS uploads live in `/var/www/littleflower/uploads/public`.
- Font: Google Sans, self-hosted in `app/fonts` (OFL).
- Next 16 with `cacheComponents` + `partialPrefetching`: `params` is a Promise; dynamic routes use `generateStaticParams`.

## Deploy
- Client preview: Vercel at https://littleflower-school.vercel.app with `DATA_MODE=demo`, `NEXT_PUBLIC_SITE_URL`, `SESSION_SECRET` (32+ chars). Demo is `noindex`.
- Launch: VPS + PM2 + Nginx at https://littleflowerintschool.com, see `littleflower-back/docs/DEPLOY.md` (never `output: 'export'`).
