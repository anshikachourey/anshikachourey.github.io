# Anshika Chourey — Portfolio starter

A responsive, code-first software engineering portfolio inspired by the **structure** of trucs.dev and the **personal detail** of peterzhang.dev, but with its own editorial visual direction.

This first version uses plain HTML, CSS, and JavaScript. **There is no build step or dependency installation**, so it works on GitHub Pages as-is. You can always move to React later if the site needs complex app behavior.

## Preview it locally

Open a terminal in this folder:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Customize it before publishing

1. Open `site.js`. Fill in `profile.email`, `profile.github`, `profile.linkedin`, and `profile.resume`. Empty links stay hidden.
2. Review project details and outcomes in the `projects` array. Some summaries are based on previously discussed work, so confirm all public claims and only share work you have permission to disclose.
3. Add your PDF resume under `assets/` and set `profile.resume = "./assets/YOUR_RESUME.pdf"`.
4. Replace the conceptual SVG diagrams with real project screenshots, demos, or architecture diagrams when available. The current graphics are deliberately labeled "CONCEPTUAL DIAGRAM."
5. Edit the homepage introduction in `index.html` and colors in `styles.css` to match your final personal aesthetic.

## Publish for free on GitHub Pages

1. Create a **public** GitHub repository named `YOUR_GITHUB_USERNAME.github.io`.
2. Upload `index.html`, `styles.css`, `site.js`, `assets/`, and `README.md` to the repository root.
3. In repository **Settings → Pages**, select **Deploy from a branch**, branch `main`, folder `/ (root)`, then save.
4. Your website will appear at `https://YOUR_GITHUB_USERNAME.github.io` after Pages finishes deploying.

If you want to use a `.dev` domain, buy it separately and configure a custom domain in your GitHub Pages settings. `.dev` domains require HTTPS, which GitHub Pages supports after domain verification / certificate provisioning. See GitHub's current docs for required DNS records. Do not buy or connect a domain until the website is ready.

## Files

- `index.html` — page layout and intro copy
- `styles.css` — the full visual system and responsive styles
- `site.js` — contact links, project data, experience data, theme toggle, and project-detail dialogs
- `assets/favicon.svg` — site icon

## Accessibility notes

Keyboard-friendly project dialogs, high-contrast text, skip link, semantic headings, reduced-motion support, and responsive breakpoints are included. Review again after adding screenshots or changing colors.
