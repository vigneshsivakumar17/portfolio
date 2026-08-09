# Vignesh S — Portfolio

A cinematic, multi-page personal portfolio built with plain HTML, CSS, and
JavaScript (no framework, no build step). Pages transition with a custom
scale / blur / fade "scene change" animation instead of instant swaps.

## Project structure

```
vignesh-portfolio/
├── index.html              → single HTML shell; all pages render into #app
├── css/
│   └── style.css           → all styles (design tokens live in :root)
├── js/
│   └── main.js             → page templates, router, particle canvas, form logic
├── assets/
│   └── resume/
│       └── Vignesh_S_Resume.pdf   → used by the "View/Download Resume" buttons
└── README.md
```

## Running it locally

No build tools or dependencies needed.

**Easiest:** double-click `index.html` to open it in your browser.

**Recommended (VS Code):**
1. Install the "Live Server" extension.
2. Right-click `index.html` → "Open with Live Server".
3. This gives you auto-reload while you edit.

## How routing works

This site uses **hash-based routing** (`#/about`, `#/skills`, etc.) handled
entirely in `js/main.js` — there's no `react-router-dom` dependency. This was
a deliberate choice: hash routing works from a plain `file://` double-click,
from Live Server, and from any static host (GitHub Pages, Netlify, Vercel)
with zero server configuration.

If you later want clean URLs without the `#` (e.g. `/projects` instead of
`/#/projects`), you can switch to path-based routing using the History API —
but you'll need your host configured to serve `index.html` for every route
(most hosts call this an "SPA rewrite rule" or "catch-all redirect").

## Where to edit content

Everything content-related lives in `js/main.js`, inside clearly named
functions:

| What | Function / variable | Notes |
|---|---|---|
| Name, email, social links | `PROFILE` (top of file) | LinkedIn/GitHub pulled from your resume; Instagram from what you gave me. No YouTube/Twitter — add them here if you make accounts. |
| Home hero copy | `pageHome()` | |
| About / education | `pageAbout()` | |
| Skills groups | `pageSkills()` → `groups` array | The "Web Development" entry is a placeholder — see note below |
| **Projects** | `pageProjects()` → `projects` array | **SevaBot is real (from your resume). Two cards are marked `placeholder:true` — replace title/desc/tech/links, then remove `placeholder:true` and the "PLACEHOLDER" ribbon in `project-visual` will disappear automatically.** |
| Resume page copy | `pageResume()` | Points at `assets/resume/Vignesh_S_Resume.pdf` |
| Contact form behavior | `pageContact()` + `bindContactForm()` | Currently opens the visitor's email client via `mailto:` — swap in a form backend (Formspree, EmailJS, etc.) if you want it to submit silently |

To add a real project, edit the `projects` array in `pageProjects()`:

```js
{
  placeholder:false,
  glyph:'AB',                 // 1-2 letter monogram shown on the card
  title:'Your Project Name',
  desc:'One or two sentences on what it does and why it matters.',
  tech:['Python','TensorFlow','OpenCV'],
  github:'https://github.com/yourname/repo',
  demo:'https://your-live-demo.com'   // or leave as '#' if there's no live demo
}
```

## Updating your resume

Replace `assets/resume/Vignesh_S_Resume.pdf` with your latest PDF, **keeping
the same filename** — or update the filename in two places in
`js/main.js`: the `RESUME_DATA_URI` constant and the `download="..."`
attribute isn't hardcoded there (it uses the same constant), so a filename
change only needs updating `RESUME_DATA_URI`.

## Deploying

Since this is a static site with no build step, any static host works:

- **GitHub Pages:** push this folder to a repo, enable Pages on the `main`
  branch (root), done.
- **Netlify / Vercel:** drag-and-drop the folder or connect the repo — no
  build command needed, publish directory is `.` (the project root).

## Notes on placeholders

- **Projects:** 2 of the 3 project cards are placeholders — search
  `placeholder:true` in `js/main.js` to find and replace them.
- **Skills → Web Development:** currently reflects only Git/GitHub since
  that's what your resume listed. Edit the `groups` array in `pageSkills()`
  once you've got specific frontend/backend skills to list, and remove the
  `.skills-note` div in the same function.
