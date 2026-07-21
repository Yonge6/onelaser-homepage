# XRF Gen2 UI Guideline + Motion QA

## Review target

- Visual source: `/Users/yongyuan/Downloads/OneLaser Web UI Guideline.pdf`.
- Product content source: `XRF Gen2 卖点参数发布汇总.xlsx`, using only `XRF Gen2 卖点` and `XRF Gen2 Specs-1`.
- Motion direction: the official guideline's restrained fade, slight translate, product-detail zoom, metric reveal and sticky storytelling patterns.
- Desktop viewport: 1458 × 1178.
- Mobile viewport: 390 × 844.

## Comparison evidence

- Guideline selection/card rules + final hero: `qa/reference-vs-hero-final.png`.
- Guideline video/motion rules + final sticky story: `qa/reference-vs-story-final.png`.
- Final desktop hero: `qa/desktop-ui-guideline-final.png`.
- Final desktop motion chapter: `qa/desktop-motion-final.png`.
- Final mobile hero: `qa/mobile-hero-v3.png`.
- Final mobile sticky story: `qa/mobile-story-v3.png`.

## Visual system

- Typography: passed. Runtime resolves all text to the shipped Certia family; major headings use weight 800.
- Color: passed. Brand red is `#E7310E`, action red is `#D92D0D`, and structural surfaces resolve to white or `#F5F5F7`.
- Components: passed. Primary actions are pill-shaped, selection cards use the official red border/tint and a visible Selected check label, and media cards use 24–32 px radii.
- Prices: passed. Customer-facing prices use OneLaser red.
- Gallery: passed. Desktop stage is exactly 660 × 660; mobile stage is square and 354 px within the 390 px viewport; thumbnails remain horizontally browsable with a separate video slot.

## Information architecture

- Benefit-first order: passed. Customer result precedes feature, technical proof and real-result media.
- Priority mapping: passed. P0 appears in the five-chapter sticky story, P1 uses large visual modules, P2 uses compact proof patterns, and P3 remains in specifications/FAQ.
- Optional labeling: passed. Smart Air, Riser Base, Conveyor, Rotary, Fume Extractor and optional optics remain explicitly optional.
- Deprecated content: passed. The `参数作废` sheet is not used.

## Motion and interaction

- Sticky storytelling: passed. RF Results, TrueSpeed, IVS, Motion Platform and Optional Expansion synchronize copy, chapter progress and media while scrolling.
- Navigation: passed. The sticky capability navigation updates its active section and supports direct chapter jumps.
- Reveal system: passed. Metrics and sections reveal once through IntersectionObserver; product and proof media use restrained 1.03–1.06 zoom.
- Reduced motion: passed. `prefers-reduced-motion` disables animation and preserves visible content.
- Purchase flow: passed. 70W remains exactly $500 above the matching 38W configuration, and power, package, add-on, quantity and sticky totals update together.

## Responsive and technical checks

- Desktop overflow: passed. Document width equals the 1458 px viewport.
- Mobile overflow: passed. Document width equals the 390 px viewport.
- Image integrity: passed. No broken images were detected.
- Font delivery: passed. `document.fonts.check('16px Certia')` returns true.
- Browser console: passed. No errors or warnings were detected.
- Production build: passed. Vite completes successfully.

## Remaining production replacements

- Replace each `VIDEO PLACEHOLDER` with the final muted autoplay or click-to-play production media.
- Replace project and accessory proof imagery when final photography and tested project settings are available.
- Connect the prototype Add to Cart state to the production commerce backend.

passed
