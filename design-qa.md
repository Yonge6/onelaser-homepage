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

## 2026-07-22 finished-product carousel label cleanup

- Removed the `PROJECT PROOF · 01/04` production label from every finished-product carousel state; navigation state now relies only on the existing arrows and pagination dots.
- Visual evidence: `qa/final-project-no-overlay-1538.png` and `qa/final-project-no-overlay-390.png`.
- Desktop 1538 × 1178 verification reports zero `.project-visual > span` nodes, no `PROJECT PROOF` text in the rendered document and zero horizontal overflow.
- Mobile 390 × 844 verification reports the same zero-label, zero-overflow result while preserving the fixed project image geometry and shared card radius.
- Retained the compact 48 px desktop / 32 px mobile narrative section rhythm and the centered sticky P0 copy/media scene from the current visual-system pass.

final result: passed

## 2026-07-22 power-proof and icon-system revision

### Power proof interaction

- Replaced the two purchase-like comparison cards with a display-only 38W / 70W segmented control and one large proof stage on a full-width `#F5F5F7` band.
- Toggling the proof from 38W to 70W changes only the editorial image and copy. The hero power choice and sticky purchase configuration remain unchanged.
- Desktop and 390 px mobile both keep the stage inside the shared content grid with zero horizontal overflow.

### Rounded carousel and icon coverage

- The finished-product carousel now clips the image and copy inside one shared 32 px desktop / 24 px mobile radius, so both halves read as a single component.
- All five material tabs now include distinct Phosphor line icons while preserving the red-underline-only active state.
- All eight compact micro-feature tiles now include distinct OneLaser-red Phosphor line icons.

### Responsive verification

- Desktop metrics: full-width power band `1742 px`; centered inner grid `1280 px`; five material icons; eight micro-feature icons; zero horizontal overflow.
- Mobile metrics: power band `390 px`; inner content `354 px`; project radius `24 px`; material tabs remain horizontally swipeable; proof switching does not change the selected 38W purchase state.
- The final pass was verified interactively in the local in-app browser at both target viewport sizes.

final result: passed

## 2026-07-22 wide-section and P0 playback-control correction

- Root cause: late shared `.section` overrides reduced the power guide and full-width safety band to 1280 px while earlier zero/viewport margins left both anchored at the page origin. The current power guide and safety band both span `x=0 / w=1742`, with their inner content centered at `x=231 / w=1280`.
- Engineering proof title is one 48 px desktop line across the 1280 px content axis and returns to normal responsive wrapping below 1180 px.
- FOX desktop copy/video gap increased to 96 px. Its title now wraps within the copy column instead of overflowing into the video; measured title overflow is zero. Mobile uses a 44 px stacked gap.
- All six P0 image-preview stages now contain the same centered translucent-black play control. Desktop controls measure 72 px and mobile 58 px; center offsets are `0 / 0` for every stage.
- Responsive audit: 1742 × 1178 and 390 × 844 both report zero horizontal overflow, and minimum visible customer-facing type remains 12 px.

final result: passed

## 2026-07-22 performance-label, spacing and duplicate-proof pass

### Global product data

- Replaced every customer-facing `1,200 mm/s` reference with `1,300 mm/s` and every `3G` reference with `3.5G` across hero proof, package copy, story metrics and specifications.
- Desktop and 390 px mobile DOM audits report no remaining `1,200` or standalone `3G` text.
- The 70W + Riser state displays `$4,999.00 USD` with a `$7,499.00 USD` MSRP at the same 30 px / 900 gray treatment used by other configurations.

### Duplicate selling-point review

- Removed the repeated 38W/70W PowerMax story because the image-led power guide already owns that purchase decision.
- Removed repeated safety cards from the compact engineering grid because Class 1, lid interlock, suppression and thermal response already appear in the dedicated safety module.
- Reframed the workflow heading as `Four decisions from design to done` so it no longer repeats the general creation promise.
- The workbook-led dynamic sequence now contains six non-overlapping chapters, while the independent-review rail contains all five creator videos with no separate `View more` action.

### UI and interaction checks

- Standard section-heading rhythm is 8 px eyebrow-to-title and 12 px title-to-copy; the materials heading uses a 32 px transition into its fixed proof stage.
- Desktop material title and supporting copy remain one line. The material benefit title is capped at 36 px and reports zero overflow; mobile uses 28 px and also reports zero overflow.
- Customer-business videos have identical 631 × 568 px desktop card geometry. Video covers use descriptive proof tags instead of redundant watch buttons, with the play control at black 20% opacity.
- Default page state contains zero iframes. Clicking the FOX cover creates one privacy-enhanced YouTube iframe; closing removes the iframe and player from the DOM.
- Desktop 1742 × 1178 and mobile 390 × 844 both report zero horizontal overflow. H1 remains 32 px, editorial H2 is 48 px desktop / 32 px mobile, and the minimum visible customer-facing text is 12 px.

final result: passed

## 2026-07-22 generated proof imagery and materials revision

### Source and asset checks

- Product-claim source: `XRF Gen2 卖点参数发布汇总.xlsx`; approved XRF renders remain the geometry source wherever the machine is visible.
- Added ten optimized 16:9 WebP proof assets for five material categories, 38W/70W use-case comparison, IVS print-and-cut, optional Smart Air and optional Conveyor storytelling.
- Optimized output totals approximately 1.2 MB across all ten assets at a 1600 px maximum width; production pages do not load the original generation files.
- Customer-facing copy continues to label optional systems as optional and does not introduce new speed, price, certification or production claims.

### Materials gallery

- Desktop evidence: `qa/generated-materials-desktop.png`; responsive evidence: `qa/generated-materials-mobile.png`.
- Acrylic, Wood, Leather, Glass & Stone and Coated Metal each load a distinct finished-product image and benefit-first copy.
- All five desktop states retain the same 725 px gallery height. The selected category uses only the approved OneLaser red underline; no duplicate selected badge appears.
- Mobile tabs remain horizontally swipeable, the active image retains a 16:9 frame and the page reports zero horizontal overflow.

### Previous 38W / 70W comparison (superseded)

- Desktop evidence: `qa/generated-power-desktop.png`; responsive evidence: `qa/generated-power-mobile.png`.
- 38W and 70W remain visually parallel and equal-fit: 38W emphasizes fine-detail everyday production; 70W emphasizes deeper relief and heavier workloads.
- This earlier parallel-card interaction has been superseded by the independent display-only segmented proof switch documented in the latest power-proof revision above.

### Functional proof placement

- Workbook-led P0 stories now use dedicated IVS, Smart Air and long-format Conveyor visuals instead of generic repeated renders.
- Full-media interactions, 16:9 geometry, keyboard access and reduced-motion behavior remain intact.
- QA viewport metrics: 1440 px desktop and 390 px mobile both report document width equal to viewport width.

final result: passed

## 2026-07-22 video decision-journey revision

### Source and comparison evidence

- Latest source of truth: `pasted-text.txt` from the user, which assigns each video to a specific buying question and explicitly rejects one aggregated video wall.
- Before/after visual comparison: `qa/video-journey-comparison.png` combines the earlier seven-video rail with the new performance-proof module.
- Current desktop evidence: `qa/video-journey-performance-final.png`; additional interactive review was performed in the live in-app browser for the FOX, business-success, independent-review, competitor and facility/support modules.

### Journey and content checks

- Module order is now Hero → FOX media proof → core benefit image → hobby-laser performance test → finished-product results → customer success → power/RF stories → workflow/reliability/safety → specifications → independent reviews → xTool P2 comparison → facility/support → FAQ/CTA.
- The previous generic creator-video rail is absent from the DOM.
- Default document contains zero YouTube iframes. Covers use lazy static YouTube thumbnails; one privacy-enhanced iframe is created only after a visitor clicks.
- Primary independent reviews show three uniform 16:9 cards. `View more creator reviews` opens a secondary review dialog without creating an iframe; choosing a review closes that dialog and opens the shared player.
- FOX wording is limited to `Featured on FOX & Friends Weekend` with `As Seen on TV` and `FOX & Friends Weekend` proof tags; the date tag has been removed.
- Customer-success copy avoids earnings promises and includes the required individual-results disclaimer.

### Interaction and responsive checks

- Shared YouTube player passed close-button, overlay and Escape paths. After close, the iframe count returns from one to zero and playback is removed.
- Desktop document reports zero horizontal overflow, zero visible text below 12 px and no runtime console errors after a clean reload.
- Mobile 390 × 844 reports zero horizontal overflow, zero text below 12 px, no initial iframe, and a swipeable review rail (`354 px` client width / `1021 px` scroll width).
- Performance, business, review, competitor and facility media all retain 16:9 cover geometry and use the same play affordance and modal.

final result: passed

## 2026-07-22 supplied overview strip and alignment pass

### Overview placement and asset

- Replaced the previous studio hero in the static capability overview with the user-supplied `卖点合集-web.webp`, shipped as `xrf-feature-overview-web.webp`.
- Moved the static overview immediately before the standalone FOX proof module.
- The overview uses a full-viewport `#141414` band with 24 px desktop and 12 px mobile gutters; the image is contained without crop or interaction.
- Desktop 1742 × 1178 reports a 1742 px section, 1694 px image and zero horizontal overflow. Mobile 390 × 844 reports 12 px gutters, contained media and zero overflow.

### Typography and story alignment

- Power-proof detail titles use 36 px / 800 on desktop and 28 px / 800 on mobile.
- Desktop sticky-story copy is top-aligned with the active 16:9 media stage rather than vertically centered.
- FOX proof now contains exactly two tags: `As Seen on TV` and `FOX & Friends Weekend`.
- Verified the removed `December 2024` tag is absent from the customer-facing source and rendered signal list.

final result: passed
