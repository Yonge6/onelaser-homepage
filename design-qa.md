# XRF Gen2 full-page design QA

## Review target

- Product source of truth: `XRF Gen2 卖点参数发布汇总.xlsx`.
- Structural references: OMTech Polar 2 PDP and xTool P3 product/story pages.
- Matched hero comparison: `qa/design-comparison-final.png` (reference and implementation at 1280 × 720).
- Implementation captures: purchase hero, results carousel, 38W/70W guide, immersive stories, safety, specifications and a true 390 × 844 framed mobile viewport.

## Content hierarchy

- P0: passed. Seven 16:9 story chapters cover 70W power, RF results, TrueSpeed motion, IVS, smart workflow, larger jobs and cleaner production. Image previews are ready to be replaced by final video without changing layout.
- P1: passed. Large visual modules explain the 38W/70W choice, workflow, reliability, safety architecture and US support.
- P2: passed. Eight compact image-led proof cards cover extraction, isolated electronics, noise, protected focus, Class 1 design, suppression, interlock and thermal response.
- P3: passed. Secondary details are contained in a concise horizontal rail and the specification/FAQ controls.
- Optional features: passed. Smart Air, Riser Base, Conveyor and optional optics remain explicitly labelled optional.

## Visual system

- Typography: passed. Certia is used throughout; the desktop product H1 computes to 40 px / 800 and mobile to 36 px / 800.
- Minimum type: passed. Computed minimum is 12 px.
- Surfaces: passed. Structural sections resolve to white, transparent-on-white or `#F5F5F7`; black is limited to real image content.
- Color: passed. OneLaser red is limited to pricing, primary actions, selected borders and restrained proof accents. MSRP remains gray and financing remains blue.
- Media: passed. Hero media and thumbnails are square; project proof remains fixed at 4:3; all immersive story media computes to 16:9 with `object-fit: contain`.
- Reference comparison: passed. The implementation keeps the proven left-media/right-purchase anatomy while using a tighter OneLaser header, a more legible product title, quieter surfaces and clearer price hierarchy.

## Responsive and interaction checks

- Desktop overflow: passed at 1540 × 1178.
- Mobile overflow: passed at a true 390 × 844 iframe viewport.
- Mobile hero media: passed at 354 × 354, with 16 swipeable product thumbnails and a separate video slot.
- Power selection: passed. Selecting 70W updates `aria-pressed`, the hero price and the sticky purchase price to $4,499.00.
- Project browsing: passed. The next-project control changes image/content while preserving the 4:3 stage size.
- Story navigation: passed. Seven chapter controls move between the corresponding large media stories.
- Specification accordion: passed. Controls disclose the correct workbook-derived values.
- Build: passed with Vite; no horizontal overflow and no computed text below 12 px.

## Production follow-up

- Replace image previews with final 16:9 P0 videos when production media is available.
- Replace temporary project proof with validated test settings and measured production time where required.
- Connect the prototype cart and SHOP actions to the production commerce backend.

final result: passed
