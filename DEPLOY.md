<!-- Copyright (c) 2025-2026 Strategic Task Solutions, LLC. All rights reserved. -->

# Deploying watchglasstech.com

The site is hosted on **GitHub Pages** from the public repo `mcphees71/watchglass-site`
(branch `main`, root), with the custom domain set by the `CNAME` file (`watchglasstech.com`).
The domain is registered at **GoDaddy**.

## DNS records at GoDaddy (Domain -> DNS -> DNS Records)

Apex (`@`) points at GitHub Pages; `www` points at the user's Pages host.

```
Type   Name  Value
A      @     185.199.108.153
A      @     185.199.109.153
A      @     185.199.110.153
A      @     185.199.111.153
CNAME  www   mcphees71.github.io
```

Leave the GoDaddy `NS`, `SOA`, `_domainconnect`, `pay`, and `_dmarc` records in place.
The original `A @ WebsiteBuilder Site` record (GoDaddy Airo placeholder) was removed -
that is what detaches the GoDaddy builder from the domain.

## After DNS propagates (15-60 min)

1. GitHub auto-provisions a Let's Encrypt certificate once it verifies the domain.
2. In the repo: **Settings -> Pages -> Enforce HTTPS** (or via API). Then the site
   always serves at `https://watchglasstech.com`.

## To publish updates

Commit and push to `main`; GitHub Pages rebuilds automatically within a minute or two.

## Before promoting the site

The Request form (`request.html`) posts to a Formspree placeholder
(`https://formspree.io/f/REPLACE_WITH_YOUR_ID`). Create a Formspree form and replace
the `action` so demo requests actually arrive. See `README.md`.

## Export control

Keep the public site marketing-level only. Detailed capability materials and the live
demonstration are provided after qualification and may be subject to U.S. export-control
(EAR / ITAR) requirements.
