<!-- Copyright (c) 2025-2026 Strategic Task Solutions, LLC. All rights reserved. -->
# Media credits and licenses - watchglasstech.com

Every image and video on the site, where it came from, and the license that lets us use it. Keep this current:
when you add or replace an asset, add its row the same day. For a commercial marketing site, every asset must
have clear commercial-use rights (our own work, a licensed stock asset, or AI output under its service's
commercial terms). Marketing-level imagery only - never controlled capability detail; export-control gated.

Status key: **OWN** = Strategic Task Solutions work · **AI** = AI-generated · **STOCK** = licensed stock ·
**CONFIRM** = source not yet verified, fill in.

## Images

| File | What it is | Source | License / rights | Status |
|---|---|---|---|---|
| `assets/wg-aar.jpg` | Product screenshot - after-action review | Watchglass C5ISR UI, captured by STS | STS-owned | OWN |
| `assets/wg-ai.jpg` | Product screenshot - AI assistant | Watchglass C5ISR UI | STS-owned | OWN |
| `assets/wg-alerts.jpg` | Product screenshot - alerts / rules | Watchglass C5ISR UI | STS-owned | OWN |
| `assets/wg-analytics.jpg` | Product screenshot - analytics | Watchglass C5ISR UI | STS-owned | OWN |
| `assets/wg-anomaly.jpg` | Product screenshot - track anomalies | Watchglass C5ISR UI | STS-owned | OWN |
| `assets/wg-cop.jpg` | Product screenshot - common operating picture | Watchglass C5ISR UI | STS-owned | OWN |
| `assets/wg-execute.jpg` | Product screenshot - execution | Watchglass C5ISR UI | STS-owned | OWN |
| `assets/wg-plan.jpg` | Product screenshot - planning | Watchglass C5ISR UI | STS-owned | OWN |
| `assets/wg-roc.jpg` | Product screenshot - ROC drill | Watchglass C5ISR UI | STS-owned | OWN |
| `assets/wg-terrain.jpg` | Product screenshot - terrain | Watchglass C5ISR UI | STS-owned | OWN |
| `assets/wg-training.jpg` | Product screenshot - training | Watchglass C5ISR UI | STS-owned | OWN |
| `assets/hero-globe.jpg` | Hero background - geospatial globe | **MidJourney** (prompt pack: `docs/IMAGE_PROMPTS.md`, globe prompt) | MidJourney paid-plan commercial-use terms - confirm the plan tier in effect | AI |
| `assets/login-globe.jpg` | Globe still / video poster (same image as hero) | **MidJourney** (as above) | MidJourney commercial-use terms | AI |
| `assets/missions-montage.jpg` | Poster still for the mission montage video | CONFIRM - MidJourney still, or a frame grabbed from the montage video | Follows the video's source (below) | CONFIRM |
| `assets/scene-patrol.jpg` | Scene image (flight line / patrol) | **MidJourney** (prompt pack scene prompts) | MidJourney commercial-use terms | AI |

## Video

| File | What it is | Source | License / rights | Status |
|---|---|---|---|---|
| `assets/login-globe.mp4` | Rotating-globe hero loop | **CONFIRM** - not recorded in the repo; the file was re-encoded with FFmpeg / x264, so no original producer tag survives. Candidates: MidJourney image-to-video, or a licensed stock site. | **CONFIRM** - record the exact source and its license before go-live | CONFIRM |
| `assets/missions-montage.mp4` | Mission-footage montage | **CONFIRM** - may be STS's own demo footage (the IR-TEST / EO-TEST material), or a stock montage. | **CONFIRM** - if own footage mark OWN; if stock, record the license | CONFIRM |

## To confirm before go-live

1. **The two `.mp4` sources.** Check the MidJourney account history (if image-to-video), the Downloads folder /
   browser history around the build date (20 Oct 2026) for the original filenames, or the stock-site account.
   If `missions-montage.mp4` is STS's own footage, mark it **OWN**; otherwise record the stock license.
2. **MidJourney commercial terms.** Confirm the subscription tier that generated the stills grants commercial
   use for a company our size, and keep a copy of the terms. Note: AI-generated images have no separate
   copyright owner, which is acceptable for marketing use under MidJourney's terms but means they are not an
   STS-owned work of authorship - do not claim them as such.
3. **No readable insignia or controlled detail.** Re-check that hero/scene imagery stays marketing-level and
   export-control-safe (the brief for `docs/IMAGE_PROMPTS.md` already forbids text, logos, and capability detail).

## How to regenerate / replace

- Still imagery: see `docs/IMAGE_PROMPTS.md` (MidJourney prompt pack).
- Optimize new assets to web JPG/WebP (and poster frames for any new video), name by what they show, add the
  row here.
