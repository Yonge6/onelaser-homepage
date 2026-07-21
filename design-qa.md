# XRF Gen2 PDP · UI System and Purchase Flow QA

## Review target

- Purchase-layout reference: xTool P3 and P2 product media, purchase decision and configuration anatomy.
- Below-hero reference: OMTech Polar 2 capability navigation, benefit switching, media stories, configuration, specifications and FAQ behavior.
- Product content source: `XRF Gen2 卖点参数发布汇总.xlsx`.
- UI source of truth: `UI-SPEC.md`.
- Desktop viewport: 1458 × 1178.
- Mobile viewport: 390 × 844.

## Evidence

- Desktop purchase view: `qa/desktop-top-purchase-v3.png`.
- Desktop feature overview: `qa/desktop-feature-bento-v3.png`.
- Desktop configurator: `qa/desktop-configurator-v3.png`.
- Mobile purchase view: `qa/mobile-top-v3.png`.
- Mobile feature overview: `qa/mobile-features-v3.png`.
- Mobile configurator: `qa/mobile-configurator-v3.png`.
- Reference and implementation comparison: `qa/reference-implementation-comparison-v3.png`.

## Browser annotations

- Product title: passed. Exact text is `OneLaser XRF™ Performance Desktop Laser Engraver (38W/70W RF)` at 40 px / 800 desktop and 36 px / 800 mobile.
- Removed secondary hero slogan: passed. The former `From idea to finished product—faster.` heading is absent.
- Removed hero specification matrix: passed. The former four-cell `hero-proof` block is absent.
- Price styling: passed. Customer-facing price values resolve to OneLaser red `#F2380F`.

## UI system

- Typography: passed. Runtime sampling resolves to Certia for the product H1; major headings use weight 800, body copy uses 400–500, and UI labels use 600–800.
- Type hierarchy: passed. Product H1 is 40 / 42; display H2 is responsive 46–72; standard H2 is responsive 40–64; body copy is 14–16.
- Surfaces: passed. Structural backgrounds use only white or `#F5F5F7`. No decorative gradients or black structural panels are present.
- Components: passed. Cards use restrained borders, 10 px standard radii, minimal shadow and red only for actions, selected optional items and proof accents.
- Spacing: passed. Section, card and control spacing follows the 4 px base scale documented in `UI-SPEC.md`.

## Layout and responsive checks

- Desktop gallery: passed. Main stage is exactly 660 × 660; image thumbnails are exactly 70 × 70; the rail exposes previous/next controls, partial overflow and a separate video slot.
- Desktop overflow: passed. At 1458 px, document width equals viewport width.
- Mobile gallery: passed. At 390 px, the stage is 354 × 354, thumbnails remain 70 × 70 and document width equals viewport width.
- Feature overview: passed. The light bento uses real XRF imagery, white proof panels and responsive 4-column, 2-column and 1-column layouts.
- Anchored sections: passed. Scroll targets reserve space for both sticky navigation layers; section eyebrows and headings are no longer hidden after navigation.

## Interaction checks

- Gallery previous/next, thumbnail rail and video slot: passed.
- Project carousel and RF benefit tabs: passed.
- Sticky capability navigation: passed.
- Package selector: passed. Switching to 70W updates selected state, summary and sticky purchase bar without treating 38W as an inferior option.
- Optional add-ons: passed. Selecting Smart Air updates the explicit optional count and selected border state.
- Quantity and configuration CTA: passed. Quantity increments and CTA confirms `Configuration saved`.
- Specifications and FAQ controls: passed.
- Browser console: passed. No application errors were recorded.

## Remaining production replacements

- Replace each `VIDEO PLACEHOLDER` with the final corresponding production video.
- Replace project proof slots with measured settings, processing time and final photography.
- Confirm 70W launch pricing, final bundle contents, shipping, compliance and commercial terms before commerce launch.

## Final result

passed
