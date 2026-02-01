# Ken Zink — Portfolio

Personal portfolio site showcasing my career in software engineering, QA leadership, and test automation.

**Live:** [kenzink.com](https://kenzink.com)

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — dev server & build tooling
- **Lucide React** — icons
- **CSS** — custom properties, responsive layout, scroll animations
- **Playwright** — end-to-end tests
- **Netlify** — deployment

## Features

- Dark/light theme toggle
- Responsive layout: single-column (wide & mobile), two-column (mid-range)
- Scroll-triggered animations with reduced-motion support
- Company duration badges with automatic date calculation

## Development

```bash
npm install
npm run dev        # Start dev server at http://localhost:5173
npm run build      # Production build
npm run preview    # Preview production build
```

## Testing

```bash
npm test                # Run all Playwright tests
npm run test:chromium   # Chromium only
npm run test:ui         # Interactive test UI
npm run test:report     # View last test report
```
