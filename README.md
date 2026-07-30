# Tal Matania Portfolio

A dependency-free UX/UI portfolio built with semantic HTML, modern CSS, and vanilla JavaScript. It can be opened directly from `index.html` or deployed to GitHub Pages.

## Project structure

```text
├── index.html                 # Homepage
├── cases/                     # Individual case studies
├── css/                       # Shared and case-study styles
├── js/                        # Navigation, reveal, and carousel behavior
└── assets/
    ├── images/                # Portrait and social-share placeholders
    ├── projects/              # Project-specific local SVG placeholders
    ├── icons/                 # Favicon
    └── documents/             # Put tal-matania-cv.pdf here
```

## Open locally

Double-click `index.html`, or open the folder in VS Code and use a local static-server extension. No build step or package installation is required.

## Replace images and CV

Every visual is a local SVG placeholder with an intentional filename. Replace it with your exported WebP, AVIF, PNG, or SVG and update the matching `src` in the HTML if the file extension changes. Key locations include:

- `assets/images/tal-matania-portrait.svg`
- `assets/projects/video-editing/`
- `assets/projects/golden-time/`
- `assets/documents/tal-matania-cv.pdf`

The CV links already use `download`; add your file at the named path to make them work.

## Edit contact details

Replace `hello@talmatania.com` and `https://www.linkedin.com/` in the footer of `index.html` and both files in `cases/`. Also replace the `https://example.com/` live-project placeholders on the case-study pages.

## Design system

Global colors, spacing, type stacks, layout width, radii, shadows, and animation timing are CSS custom properties at the top of `css/styles.css`. Project-specific colors and layouts live in `css/case-study.css`.

## Deploy to GitHub Pages

1. Create a GitHub repository and push this folder to its default branch.
2. In the repository, open **Settings → Pages**.
3. Choose **Deploy from a branch**, select the default branch and `/ (root)`, then save.
4. GitHub will publish the static site. The site only uses relative paths, so it works from a repository subdirectory.

Before publishing, replace the placeholder canonical URLs and Open Graph URLs in each HTML `<head>` with your published domain.

## July 2026 visual refinement
The homepage was rebalanced around a centered responsive hero, a warm cream background, stronger orange accents, clearer project cards, improved navigation feedback, and more deliberate section hierarchy. The same visual language is applied to the case-study pages.

## Visual refinement
This version keeps the homepage hero intentionally expressive, while using a calmer type scale, tighter spacing, and a clearer hierarchy throughout the rest of the homepage and both case studies. The heading font stack now prioritizes Aptos Display / Segoe UI for a cleaner, more readable bold style.

## Typography

The site uses **Atkinson Hyperlegible** for body copy, navigation, labels, and buttons, and **Inter** for headings and display typography. Both fonts are loaded from Google Fonts in each HTML page.
"# Protfolio" 
