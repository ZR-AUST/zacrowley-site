# Zac Rowley Personal Website

Clean, static-first personal website for Zac Rowley, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run lint
npm run typecheck
npm run build
```

## Vercel deployment

1. Push the feature branch to GitHub.
2. Open a pull request and review the generated Vercel preview deployment.
3. In Vercel, set `NEXT_PUBLIC_SITE_URL` to the production domain, for example `https://zacrowley.com`.
4. Merge the pull request when the preview is approved.

## Content edits

Most editable content lives in:

- `data/experience.ts`
- `data/outcomes.ts`
- `data/capabilities.ts`
- `data/education.ts`
- `lib/site.ts`

Update `lib/site.ts` with the final email, LinkedIn URL, and production site URL.
