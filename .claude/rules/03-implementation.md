---
paths:
  - "**/*.html"
  - "**/*.css"
  - "**/*.js"
---

# Frontend Implementation

- Keep the website static: HTML5, CSS3, and vanilla JavaScript.
- Do not introduce a framework, backend, npm dependency, or build step unless explicitly requested.
- Keep the page deployable by copying the website directory to a static host.
- Keep structure in HTML, presentation in CSS, and behavior in JavaScript.
- Reuse existing classes, variables, helpers, and asset paths before adding new abstractions.
- Use relative asset paths that work when the website directory is deployed as the site root.
- Keep external links explicit with `target="_blank"` and `rel="noopener noreferrer"` where appropriate.
- Add only succinct comments where behavior would otherwise be difficult to understand.

## Required interaction behavior

- The header remains usable while scrolling and gains its intended visual state after scrolling.
- Mobile navigation opens and closes reliably and does not trap the page in an unusable state.
- Smooth scrolling works for internal section links.
- Elements marked for scroll animation become visible when they enter the viewport.
- Interactive controls remain keyboard reachable and have meaningful labels.
