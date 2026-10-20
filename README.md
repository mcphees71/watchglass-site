<!-- Copyright (c) 2025-2026 Strategic Task Solutions, LLC. All rights reserved. -->

# Watchglass C5ISR - marketing site

A lightweight, static public marketing site for **Watchglass C5ISR**, a product of **Strategic Task
Solutions, LLC (SDVOSB)**. No build step, no framework - plain HTML/CSS/JS, so it deploys to any static
host and is trivial to maintain. Separate from the product application repo (`isr-viewer`).

## Structure

```
index.html        Home: hero, platform, the four-mode mission suite, why-Watchglass, for-government, CTA
request.html      Request a demonstration / pilot + access to detailed materials (gated contact form)
css/site.css      Brand styles (navy #1c2c4e / gold #b8975a, dark theme, the Watchglass reticle mark, responsive)
js/site.js        Mobile nav behaviour
assets/           hero-globe.jpg (hero backdrop), scene-patrol.jpg (reserved for a section)
```

## Preview locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080   # then open http://localhost:8080
```

## Deploy (point the Watchglass domain here)

Any static host works - no build needed. Recommended:
- **Cloudflare Pages** or **Netlify**: connect this repo, set build command = none, publish directory = `/`, then
  add your Watchglass domain as a custom domain (HTTPS is automatic).
- **GitHub Pages**: push to a repo, enable Pages from the default branch root.

**STS funnel:** the footer and CTA link out to `strategic-task.com`; add a `Products -> Watchglass C5ISR`
link on the STS site back to this domain so the two sites cross-promote. Keep the visual identity consistent
(the STS navy/gold and the reticle mark) so they read as one family.

## Make the request form live

`request.html` has a form posting to a placeholder endpoint. To activate it, set the form `action` to your
provider:
- **Formspree** (fastest): create a form, replace `https://formspree.io/f/REPLACE_WITH_YOUR_ID` with your ID.
- **Netlify Forms**: add `netlify` to the `<form>` tag and deploy on Netlify.
- Or route to any backend/CRM you use. Submissions should reach scott.mcphee@strategic-task.com.

## IMPORTANT - export control & disclosure

This is a **public** site, reachable internationally. Keep it **marketing-level only**:
- **Do not** post the detailed capability brief, white paper, pricing, or any controlled technical data as
  open downloads - provide them **only after qualifying** the requester (via `request.html`).
- **Do not** offer the live demonstration publicly; foreign-national access to even a demo can be a regulated
  export (EAR / ITAR). Qualify first (US government / authorized partner), then grant access.
- Provisional patents are filed (the public-demo gate is cleared); **export control is the remaining gate** -
  keep the pipeline domestic until an export-control determination is confirmed for international audiences.

## Content source

The copy here is distilled from the capability materials in the product repo (`isr-viewer/docs/`): the 2026
capabilities brief, white paper, one-pager, SBIR statement and pricing sheet. Keep this site in step with
those as the product evolves.
