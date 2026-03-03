# Site Name — Landing (Next.js + Tailwind)

Replica-style landing inspired by the provided Figma screenshot:
- Desktop + Mobile responsive
- Semantic HTML (header/main/section/footer)
- Benefits section
- Testimonials section + schema.org JSON-LD
- Footer (nav + contacts)
- next/image + webp assets

## Run locally
```bash
npm i
npm run dev
```

## Build
```bash
npm run build
npm run start
```

## Deploy to GitHub
```bash
git init
git add .
git commit -m "Initial landing"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<REPO>.git
git push -u origin main
```

## Deploy to Vercel
1) Import repo in Vercel
2) Framework preset: Next.js
3) Deploy

After deploy, update `metadataBase` in `src/app/layout.tsx` to your Vercel domain.
