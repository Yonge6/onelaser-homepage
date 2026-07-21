# XRF Gen2 browser-annotation design QA

## Evidence

- Source visual truth: the eight 2026-07-22 browser annotations plus the currently published page captured before this change.
- Source captures: `qa/annotation-latest-source-view.png`, `qa/annotation-latest-old-results.png`, `qa/annotation-latest-old-performance.png`.
- Rendered implementation: local Vite page at `http://127.0.0.1:5174/xrf-gen2-listing/`.
- Implementation captures: `qa/annotation-latest-local-view.png`, `qa/annotation-latest-new-results.png`, `qa/annotation-latest-new-performance.png`, `qa/annotation-latest-modal.png`, `qa/annotation-latest-safety-heading.png`, `qa/annotation-latest-mobile-frame.png`.
- Combined comparison input: `qa/annotation-comparison.png`, containing source and implementation for the results module and P0 story in one 1280 × 720 image.
- Desktop viewport: 1280 × 720 CSS px. Source and implementation captures are both 1280 × 720 px; no density normalization was required.
- Responsive viewport: a real 390 × 684 CSS px iframe inside the 1280 × 720 browser capture. Its document reported `innerWidth: 390`, zero horizontal overflow and no visible type below 12 px.
- State: default 38W standalone configuration, first project proof and first P0 story unless named otherwise.

## Full-view comparison

- Information hierarchy remains unchanged: the OneLaser header, workbook-led result story and image-led P0 chapter retain the current production anatomy.
- The results implementation now keeps the image dominant by reducing the secondary `h3` while preserving the fixed 620 px desktop module.
- The P0 implementation adds a visible play affordance and direct full-media action without changing the 16:9 stage or page rhythm.
- Hero typography, white/`#F5F5F7` surfaces, OneLaser red accents and supplied product imagery remain consistent with the existing UI system.

## Focused region checks

- MSRP: only the numeric MSRP is struck through; `USD` has no text decoration.
- Results carousel: before and after switching projects, the module remains 620 px high and the controls remain at exactly `relativeX: 792.875`, `relativeY: 530` in the 1280 px viewport.
- P0 media interaction: each of seven stages is a keyboard-focusable button and opens the existing full-size 16:9 media dialog. The dialog opens with the correct accessible label and closes from its close button.
- Alignment: power guide, reliability, safety and micro-feature introductions all compute to `text-align: left`.
- Safety: section width equals the full 1280 px viewport at `x: 0`, with `rgb(245, 245, 247)` background and content aligned to the page grid.
- Typography: computed scan found zero visible elements below 12 px.
- Layout: desktop and 390 px documents both report zero horizontal overflow.
- Browser console: no errors; only Vite connection and React development informational messages.

## Required fidelity surfaces

- Fonts and typography: passed. Certia remains the shipped family; major headings retain bold weights, the project secondary title is reduced to 38.4 px at 1280 px, and the 12 px floor is preserved.
- Spacing and layout rhythm: passed. Project proof height and controls are stable; left-aligned sections share the same editorial axis; safety spans edge to edge while its content stays on the 1280 px grid.
- Colors and visual tokens: passed. Structural surfaces remain white or `#F5F5F7`; red remains reserved for actions, prices and proof accents.
- Image quality and asset fidelity: passed. Supplied XRF renders remain uncropped in the 16:9 P0 stages and the media dialog uses `object-fit: contain`.
- Copy and content: passed. No product claim or price was changed; the new media label clearly communicates `VIEW VIDEO / FULL IMAGE`.

## Comparison history

1. Earlier findings: MSRP currency inherited the strike-through; project proof typography was oversized and controls were not explicitly fixed; P0 stages did not directly open media; four section intros were centered; safety background was constrained.
2. Fixes: split MSRP amount/currency decoration, fixed desktop project geometry, reduced its `h3`, made all P0 stages accessible media buttons, introduced the shared left-aligned heading style, and made safety a full-width `#F5F5F7` band.
3. Post-fix evidence: `qa/annotation-comparison.png`, `qa/annotation-latest-modal.png`, computed carousel geometry, 1280 px safety metrics, and the 390 px responsive audit above.

## Findings

- No actionable P0, P1 or P2 findings remain.
- P3 follow-up: replace the seven still-image previews with final production videos when those files are delivered; the interaction and 16:9 anatomy are already in place.

## Primary interactions tested

- Previous/next project controls and project dots.
- P0 story card click to full-media dialog and dialog close.
- Desktop and mobile responsive layout.
- Sticky purchase bar remained visible and unchanged.

final result: passed
