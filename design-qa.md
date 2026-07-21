# XRF Gen2 annotation QA

## Review target

- Source of truth: the user's browser annotations, `OneLaser Web UI Guideline.pdf`, and the existing xTool/OMTech-inspired PDP structure recorded in `AGENTS.md`.
- Desktop viewport: 1742 × 1178.
- Mobile viewport: 390 × 844.
- Source and implementation comparison: `qa/annotation-source-vs-implementation.png`.
- Additional implementation captures: `qa/annotation-desktop-hero.png`, `qa/annotation-overview.png`, `qa/annotation-results.png`, `qa/annotation-power.png`, `qa/annotation-p0.png`, `qa/annotation-safety.png`, and `qa/annotation-mobile-hero.png`.

## Annotation checks

- Minimum type: passed. No authored `font-size` remains below 12 px; hero proof bullets compute to 12 px on desktop and mobile.
- Hero commercial hierarchy: passed. Final price is red and weight 900; MSRP is gray; financing is blue; the power-compare link is removed.
- Hero purchase controls: passed. Power cards contain no prices, `Buy with SHOP` is white on `#5532EB`, and trust/source strips are removed.
- Hero redundancy: passed. The four-metric proof rail and the lower duplicate configurator are absent.
- Overview: passed. One static 16:9 XRF image replaces the interactive feature bento.
- Results: passed. Project media remains fixed at 4:3 while browsing projects.
- RF power guide: passed. Two equal-fit, image-led cards make the 38W/70W difference visual; selecting one updates the primary purchase power and sticky price.
- P0 media: passed. All seven P0/video stages compute to 16:9 at desktop and mobile sizes.
- Safety: passed. One 16:9 product image is followed by a clear four-card proof grid.

## Responsive and interaction checks

- Desktop overflow: passed.
- Mobile overflow: passed; document width equals the 390 px viewport.
- Product H1: passed at 40 px desktop and 36 px mobile.
- Power selection: passed. Selecting 70W updates `aria-pressed` and the sticky price to $4,499.00 for the standalone configuration.
- Project browsing: passed. Next-project control changes the active project without changing the 4:3 media stage.
- Reduced motion: passed. The existing `prefers-reduced-motion` path remains intact.
- Production build: passed with Vite.

## Production follow-up

- Replace `VIDEO PLACEHOLDER` media with final 16:9 production videos when available.
- Replace temporary proof images/settings with validated project photography and measured production data.
- Connect the prototype cart states to the production commerce backend.

final result: passed
