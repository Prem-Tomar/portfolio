# Prem P S Tomar Portfolio

Static portfolio website for Prem P S Tomar, built with React and Vite.

## Continue on Another System

Start with [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md) for confirmed content, current
decisions and verification steps. [resume/README.md](resume/README.md) describes
the editable DOCX and reproducible resume build. The website download is
`public/resume.pdf`.

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
npm run build
```

Local preview runs at `http://127.0.0.1:3000/`.
On Windows PowerShell, use `npm.cmd` and `npx.cmd` if script execution policy
blocks the `.ps1` wrappers. Do not weaken the execution policy just for npm.

## Deployment

- Cloudflare Pages: build command `npm run build`, output directory `dist`.
- GitHub Pages: workflow is included in `.github/workflows/deploy.yml`.
- Custom domain: `public/CNAME` is set to `premtomar.com`.

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: build the static site into `dist`
- `npm run preview`: preview the production build locally
