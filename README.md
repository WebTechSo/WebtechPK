# WebTech Solutions

Marketing website for **WebTech Solutions** — an AI-native technology partner site inspired by modern IT consulting brands.

## Stack

- [Next.js](https://nextjs.org/) (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command       | Description              |
| ------------- | ------------------------ |
| `npm run dev` | Start local dev server   |
| `npm run build` | Production build       |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint               |

## Pages

- `/` — Home
- `/services` — Capabilities
- `/work` — Case studies
- `/about` — Company
- `/contact` — Inquiry form (`POST /api/contact`)

Update company copy, services, and case studies in `src/lib/data.ts`.
