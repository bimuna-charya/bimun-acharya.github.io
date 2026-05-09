# Bimun Acharya Portfolio

Personal portfolio website for Bimun Acharya, an IT graduate from Godawari, Lalitpur, Nepal.

Live target:

```text
https://bimuna-charya.github.io
```

## Tech Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- GSAP
- React Icons
- Optional EmailJS or Formspree contact form

## Features

- Dark modern responsive portfolio
- Real CV download
- Hero typing animation
- Smooth loading animation
- Scroll progress indicator
- Active navbar highlighting
- Floating social sidebar
- SEO and OpenGraph metadata
- `robots.txt`
- `sitemap.xml`
- Custom `404.html`
- Netlify, Vercel, and GitHub Pages ready

## Local Setup

Install dependencies:

```bash
npm install
```

Start local development:

```bash
npm run dev
```

Open the URL printed by Vite, usually:

```text
http://localhost:5173
```

## Build Commands

Check lint and build together:

```bash
npm run deploy:check
```

Build only:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

The production files are created in:

```text
dist
```

## GitHub Pages Deployment

Use GitHub Pages if you want the free subdomain:

```text
https://bimuna-charya.github.io
```

### First-Time Git Commands

Create a GitHub repository named exactly:

```text
bimuna-charya.github.io
```

Then run:

```bash
git init
git add .
git commit -m "Initial portfolio deployment"
git branch -M main
git remote add origin https://github.com/bimuna-charya/bimuna-charya.github.io.git
git push -u origin main
```

### GitHub Pages Settings

1. Open the repository on GitHub.
2. Go to `Settings`.
3. Go to `Pages`.
4. Under `Build and deployment`, choose `GitHub Actions`.
5. The included workflow will build and deploy automatically.

Workflow file:

```text
.github/workflows/deploy.yml
```

After the workflow finishes, your site will be available at:

```text
https://bimuna-charya.github.io
```

## Netlify Deployment

Netlify is also free and gives HTTPS automatically.

Suggested free site names:

- `bimunverse.netlify.app`
- `bimundev.netlify.app`
- `bimunfolio.netlify.app`
- `bimunx.netlify.app`
- `acharyabimun.netlify.app`

Steps:

1. Push the project to GitHub.
2. Go to Netlify and choose `Add new site`.
3. Choose `Import an existing project`.
4. Connect your GitHub repository.
5. Use these settings:

```text
Build command: npm run build
Publish directory: dist
```

The included `netlify.toml` already handles single-page app redirects.

## Vercel Deployment

Vercel is also free for this type of portfolio.

Steps:

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Choose framework preset: `Vite`.
4. Use:

```text
Build command: npm run build
Output directory: dist
```

The included `vercel.json` handles app rewrites.

## Contact Form Setup

The form works without paid services. If no provider is configured, it opens Gmail/mail through `mailto`.

Recommended free setup: Formspree.

### Formspree Setup For GitHub Pages

1. Go to `https://formspree.io`.
2. Sign up with `bimunacharya9@gmail.com`.
3. Create a new form.
4. Copy your endpoint. It will look like:

```text
https://formspree.io/f/your_id
```

5. Open your GitHub repository.
6. Go to `Settings > Secrets and variables > Actions`.
7. Click `New repository secret`.
8. Add this secret:

```text
Name: VITE_FORMSPREE_ENDPOINT
Value: https://formspree.io/f/your_id
```

9. Push the website again:

```bash
git add .
git commit -m "Connect contact form"
git push
```

After deployment, messages from the contact form will go to your Gmail and will also appear in your Formspree dashboard.

Optional EmailJS setup:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_CONTACT_EMAIL=bimunacharya9@gmail.com
```

Optional Formspree setup:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_id
VITE_CONTACT_EMAIL=bimunacharya9@gmail.com
```

For local testing, create a `.env` file using the same values. Do not commit `.env`.

## Updating Later

After changing content or code:

```bash
npm run deploy:check
git add .
git commit -m "Update portfolio"
git push
```

GitHub Actions or Netlify will redeploy automatically after the push.

## Important Files

Portfolio content:

```text
src/data/portfolio.js
```

Main hero/profile area:

```text
src/components/Hero.jsx
```

Global styling:

```text
src/styles/index.css
```

CV files:

```text
public/Bimun-Acharya-CV.html
public/Bimun-Acharya-CV.pdf
```

SEO files:

```text
index.html
public/sitemap.xml
public/robots.txt
public/404.html
public/site.webmanifest
```

Sidebar profile image path:

```text
public/assets/profile-graduation.jpg
```

Hero profile image path:

```text
public/assets/profile-hero.jpg
```

For best loading speed, resize profile images to around `1200px` wide before saving them there.
