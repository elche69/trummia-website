---
paths:
  - "**/*.html"
  - "**/*.css"
  - "**/*.js"
---

# Responsive and Accessible UI

## Responsive behavior

- Support mobile widths from 320px through desktop widths above 1024px.
- At widths below 768px, use a one-column layout and a usable hamburger navigation.
- Between 768px and 1024px, use compact two-column layouts where the content remains readable.
- Above 1024px, use the full multi-column layout where appropriate.
- Prevent horizontal overflow, clipped labels, overlapping controls, and unstable card dimensions.
- Recheck Hero typography, badges, trust signals, buttons, store cards, and any mobile action bar on narrow screens.
- Preserve comfortable tap targets and clear spacing on touch devices.

## Accessibility

- Use semantic HTML headings in a logical order.
- Give meaningful images useful `alt` text; use empty alt text only for purely decorative images.
- Use `aria-label` or visible text for controls whose purpose is not obvious.
- Preserve visible keyboard focus states.
- Maintain sufficient contrast between text and its background.
- Respect reduced-motion preferences when adding scroll or hover animation.
