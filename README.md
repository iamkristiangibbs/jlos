# JLOS Website — Developer Guide

## Overview
This is the redesigned JLOS (Justice, Law & Order Services) website.
It consists of **one shared CSS file** (`style.css`), a **shared navigation JS file** (`nav.js`), and **separate HTML files** for each page.

---

## File Structure

```
jlos-website/
├── style.css          ← ALL styling (shared by every page)
├── nav.js             ← Shared navigation, footer, transitions & scroll reveals
├── index.html         ← Homepage
├── about.html         ← About JLOS
├── members.html       ← Member Institutions (interactive grid)
├── our-work.html      ← Programme areas (Criminal, Civil, Human Rights...)
├── media.html         ← News, annual reports & gallery
├── contact.html       ← Contact form & office details
├── team.html          ← Secretariat Team
├── partners.html      ← Development Partners
└── assets/
    ├── logo.png            ← REPLACE: upload the JLOS logo
    ├── favicon.png         ← REPLACE: upload the JLOS favicon
    ├── hero-video.mp4      ← REPLACE: homepage hero background video
    ├── hero-poster.jpg     ← REPLACE: hero video poster frame (shown before video loads)
    ├── feature-video.mp4   ← REPLACE: "JLOS in action" video section
    └── reports/
        ├── jlos-annual-report-2024.pdf   ← REPLACE: upload actual PDF reports
        ├── jlos-annual-report-2023.pdf
        ├── jlos-annual-report-2022.pdf
        └── jlos-annual-report-2021.pdf
```

---

## How to Replace Placeholder Images

All placeholder images use **Unsplash URLs** and include a comment:
```html
<!-- REPLACE with your own image -->
<img src="https://images.unsplash.com/..." alt="...">
```
Simply swap the `src` value with the path to your own image, e.g.:
```html
<img src="assets/images/hero-kampala.jpg" alt="JLOS Kampala">
```

---

## How to Replace Videos

Video tags have a comment like:
```html
<!-- REPLACE: swap this video src with your own footage -->
<video autoplay muted loop playsinline poster="assets/hero-poster.jpg">
  <source src="assets/hero-video.mp4" type="video/mp4">
</video>
```
Upload your `.mp4` file to the `assets/` folder and update the `src` attribute.

- `hero-video.mp4` — the fullscreen autoplay video on the homepage hero
- `feature-video.mp4` — the "JLOS in Action" clickable video section
- `poster="..."` — a still image shown before the video loads (recommended)

---

## How to Replace the Logo

Place your logo file in `assets/logo.png`. The nav references it as:
```html
<img src="assets/logo.png" alt="JLOS Logo" class="nav__logo-img">
```
If no logo file is present, only the text name shows (the `onerror` attribute hides the broken image automatically).

---

## How to Add Real Staff Photos (team.html)

For each team card, replace:
```html
<img src="https://images.unsplash.com/..." alt="Team Member">
```
With:
```html
<img src="assets/team/john-doe.jpg" alt="John Doe">
```
Also update the `[Name]` and `[Title]` placeholders in the card.

---

## How to Update Partner Logos (partners.html)

Replace the `partner-logo-placeholder` div with an actual logo:
```html
<!-- Before -->
<div class="partner-logo-placeholder">EU</div>

<!-- After -->
<img src="assets/partners/eu-logo.png" alt="European Union" class="partner-logo">
```

---

## Pages Summary

| Page | File | Key Content to Update |
|------|------|----------------------|
| Home | `index.html` | Hero video, hero image, stats, news images |
| About | `about.html` | About image, vision quote, partner names |
| Institutions | `members.html` | Institution descriptions auto-render from JS array |
| Our Work | `our-work.html` | Section images, project descriptions |
| Media | `media.html` | News card images & text, PDF report links, gallery images |
| Contact | `contact.html` | Phone, email, address, Google Maps embed |
| Team | `team.html` | Staff photos, names, titles, bios |
| Partners | `partners.html` | Partner logos and descriptions |

---

## Design System

- **Fonts**: Cormorant Garamond (display/headings) + DM Sans (body) — loaded via Google Fonts
- **Colours**: Navy `#0E1E35`, Gold `#B8963E`, Cream `#F7F4EF`
- **Transitions**: 400ms cubic-bezier, page curtain transition on all internal links
- **Scroll reveals**: Add class `reveal` to any element; it fades in when scrolled into view
  - Add `reveal-delay-1` through `reveal-delay-4` for staggered animations

---

## Deployment

This is a **static HTML website** — no server-side processing required.

**Options:**
- Upload all files to a web hosting provider (e.g. cPanel File Manager)
- Deploy to GitHub Pages, Netlify, or Vercel (drag & drop the folder)
- Upload to the existing jlos.go.ug server via FTP/SFTP

**Important:** Keep all files in the same folder. The `style.css` and `nav.js` files must be in the **same directory** as the HTML files.

---

*Built for JLOS — Justice, Law & Order Services Uganda*
*Governance and Security Programme*
