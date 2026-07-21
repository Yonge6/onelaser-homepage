# XRF Gen2 PDP · Hero Commerce Flow QA

## Review target

- Purchase-flow reference: xTool P3 product title, evidence, price, package, add-on, quantity and sticky-cart anatomy.
- Commercial-data reference: current OneLaser XRF product page plus the user-authorized 70W new-product price rule.
- Product content source: `XRF Gen2 卖点参数发布汇总.xlsx`.
- UI source of truth: `UI-SPEC.md`.
- Desktop viewport: 1458 × 1178.
- Mobile viewport: 390 × 844.

## Visual evidence

- xTool reference capture: `qa/reference-xtool-p3-top-v4.png`.
- OneLaser official-page capture: `qa/reference-onelaser-official-top-v4.png`.
- Final desktop hero: `qa/desktop-top-purchase-v5.jpg`.
- Final mobile hero: `qa/mobile-top-purchase-v5.jpg`.
- Final mobile 70W state: `qa/mobile-power-options-v5.jpg`.
- Final mobile configured state: `qa/mobile-configured-v5.jpg`.
- xTool / implementation side-by-side: `qa/reference-implementation-comparison-v5.jpg`.
- OneLaser official / implementation side-by-side: `qa/official-data-implementation-comparison-v5.jpg`.

## Source fidelity

- Purchase sequence: passed. The hero follows title and proof → price/MSRP → financing → power → package → optional add-ons → quantity/CTA.
- Commercial values: passed. 38W starts at $3,999 with $6,499 MSRP; 70W is exactly $500 above its matching 38W configuration.
- Rating, financing, packages, accessories, returns, warranty and support: passed against the captured OneLaser source.
- Optional labeling: passed. Riser Base, Conveyor, Air Assist Control and replacement optics remain explicitly optional.

## UI system

- Typography: passed. Runtime sampling resolves to Certia; desktop H1 is 40 px / 800 and mobile H1 is 36 px / 800.
- Surfaces: passed. Structural backgrounds resolve to white or `#F5F5F7`; there are no black structural sections or decorative gradients.
- Components: passed. Package and add-on cards use restrained borders, 10–12 px radii, no decorative elevation and clear selected states.
- Prices: passed. All customer-facing price values use OneLaser red.
- Gallery: passed. Desktop stage is 660 × 660; thumbnails are 70 × 70 with previous/next controls and a separate video slot.

## Responsive and interaction checks

- Desktop overflow: passed. At 1458 px, document width equals viewport width.
- Mobile overflow: passed. At 390 px, document width equals viewport width.
- Brand font delivery: passed. `document.fonts.check('36px Certia')` returns true.
- 70W selection: passed. Final price, MSRP, package cards, summary and sticky purchase bar update by $500.
- Package selection: passed. Riser Base selection updates the selected state and total.
- Optional add-ons: passed. Accessory selection updates item count, price and total.
- Quantity: passed. Quantity multiplies machine and selected accessory totals.
- Purchase CTA: passed. Add to Cart confirms the configured state in the hero and sticky bar.
- Mobile density: passed. Power choices stack, add-on cards reflow, controls remain readable and the sticky total/CTA remain visible.
- Production build: passed. Vite production build completes successfully.

## Remaining production replacements

- Replace each `VIDEO PLACEHOLDER` with the final production video.
- Replace accessory and project proof media when final photography is available.
- Connect the prototype Add to Cart state to the production commerce backend.

## Final result

passed
