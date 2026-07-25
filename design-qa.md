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

## 2026-07-26 RF imagery, image loading and back-to-top controls

### Asset and loading checks

- Replaced the Faster Response and Longer Lifespan proof media with the supplied local WebP assets. Both load at non-zero natural dimensions and remain inside the existing fixed RF proof stage.
- Every page image now receives a low-saturation `#E8E6E2` placeholder with a restrained moving highlight while its resource is unresolved. The class is removed from the loading state after a successful load, and failed images settle into the same neutral fallback instead of leaving a broken-image flash.
- Browser evidence confirmed an unresolved lazy image uses `image-placeholder-drift`, the expected neutral gradient and `naturalWidth: 0`; a loaded RF image reports `is-image-ready`, non-zero natural dimensions and no remaining animation.
- `prefers-reduced-motion` removes the placeholder movement while preserving the neutral loading surface.

### Back-to-top and responsive checks

- The floating `TOP` control stays hidden at the document start, becomes `8%` opacity with disabled pointer events while reading downward, and returns to full opacity after upward scrolling.
- A direct click returns the page to `scrollY: 0`; the control then returns to its hidden state.
- Desktop and 390 × 844 mobile viewports both report zero document-level horizontal overflow. The mobile control remains 48 × 48 px, clears the sticky purchase bar and stays within the right viewport gutter.

final result: passed

## 2026-07-23 product-detail and generation-surface polish

### Source and implementation comparisons

- Product panel comparison: `qa/annotation-round2-design-qa-products.png`.
- Generation comparison: `qa/annotation-round2-design-qa-comparison.png`.
- Both comparisons use the same 1489 × 1178 viewport and matching section/product state.

### Product Opportunities

- The selected product card uses one uniform 2 px OneLaser-red border around the image and copy; the inset shadow that made the copy edge appear heavier was removed.
- Example selling price increased to 32 px / 900. Desktop detail copy now includes the concise approved product summary and anchors setup guidance in a pale-red footer so the left panel no longer reads as empty.
- Economics metrics use two independent soft-gray tiles. Best-suited, required-setup and disclaimer content have no top, bottom or left divider lines.
- Desktop detail and Economics cards remain equal at 264 px. At 390 × 844, the active card is 249 px, the selected panel scrolls into view after a tap, and document overflow is 0 px.

### Gen 2 versus Gen 1

- The full Gen 2 heading and body column use `rgb(255, 242, 238)` as one continuous pale-red selected surface.
- The full Gen 1 heading and body column use white with subdued gray text.
- Desktop and mobile retain feature → Gen 2 → Gen 1 order, with no red column rules and no horizontal overflow.
- Browser console returned no warnings or errors during the mobile verification state.

final result: passed

## 2026-07-26 compact capability chapter rail

### Reference and adaptation

- Structural reference: the xTool P3 chapter rail uses a narrow vertical track, compact chapter labels and one short active-progress segment.
- OneLaser adaptation keeps the page light, uses a subdued gray track, a OneLaser-red active segment, black active text and restrained gray inactive text.
- The rail is inset from the viewport edge instead of touching it, while the 1280 px capability content grid remains unchanged.

### Interaction and responsive checks

- The desktop rail remains genuinely scroll-linked; clicking `Speed & Motion` updated the active chapter and moved the progress segment to index 1.
- Desktop evidence at a 1750 × 1178 test viewport shows the 164 px rail centered vertically beside the chapter content with zero horizontal overflow.
- Mobile 390 × 844 retains the existing horizontal swipe rail (`390 px` client width / `799 px` scroll width), keeps the active item visible after a direct chapter tap and reports zero document overflow.
- Keyboard focus remains visible, and the progress-segment transition is disabled under `prefers-reduced-motion`.

final result: passed

## 2026-07-23 comparison order and compact commerce pass

### Source and implementation comparison

- Before/after visual comparison: `qa/annotation-round-design-qa-combined.png`.
- The live source placed XRF Gen 1 before XRF Gen 2 and used red top/vertical rules around the Gen 2 column.
- The implementation places XRF Gen 2 immediately after the feature label column, moves the subdued light-gray Gen 1 column to the right, and removes the red column rules while retaining red only in the Gen 2 heading text.
- Mobile retains the same semantic order: feature → Gen 2 → Gen 1, with zero horizontal overflow at 390 px.

### Product Opportunities

- Desktop evidence: `qa/annotation-product-compact-desktop.png`; mobile evidence: `qa/annotation-product-compact-mobile.png`.
- Product media now uses a 16:9 ratio so imagery remains approximately 70% of the compact card height instead of forcing tall 4:3 cards.
- Desktop selected-product details and the illustrative economics panel remain visible in the same 1178 px scene; the selected-detail row measures 268 px.
- At 390 × 844, product cards measure 248 px and selecting a product scrolls its shared detail/economics panel into view. The page reports zero horizontal overflow.
- The full economics disclaimer remains visible in normal document flow and no earnings claim was removed or promoted.

### CTA and materials

- `Ready to build your next product line?` renders as one line on the 1546 px desktop viewport and wraps normally below the 1280 px breakpoint.
- Material selection uses OneLaser red for the active icon, label and index while preserving the single 1 px autoplay progress line.
- DOM verification after selecting Wood reports `aria-selected="true"` and `rgb(231, 49, 14)` for the button, label and index.

final result: passed

## 2026-07-23 Product Opportunities product-card redesign

### Evidence

- Source visual truth: `/var/folders/vd/kws8fm5509l6b9hnywhd8yfr0000gn/T/codex-clipboard-d476df56-d727-4b53-a487-2ba46744b870.png`.
- Desktop implementation: `qa/product-opportunities-cards-desktop-top.png` and `qa/product-opportunities-cards-desktop.png`.
- Mobile implementation: `qa/product-opportunities-cards-mobile-390.png`.
- Combined reference and implementation input: `qa/product-opportunities-design-qa-combined.png`.
- Desktop viewport: 1586 × 1178 CSS px. Mobile viewport: 390 × 844 CSS px.
- State: Personalized Gifts with Engraved Jewelry Box selected; interaction checks also covered Home & Outdoor Décor, House Number Sign and Walnut Serving Board.

### Full-view and focused comparison

- Preserved the supplied reference's 1280 px editorial axis, white/`#F5F5F7` surfaces, OneLaser-red selected state, 48 px desktop heading, restrained borders and rounded high-end product presentation.
- Replaced the old shared category image and compact product buttons with three independent image-led product cards, as required by the updated brief.
- Product imagery occupies approximately 70–74% of each card. The selected card uses a red border, pale-red surface and 1.012 scale while non-selected cards remain visually subdued.
- The selected product drives one shared two-column details and Economics row below the cards, keeping the explanatory content visible without duplicating it across all three products.

### Content, accessibility and interaction

- All four category tabs and all twelve requested product names are stored in the centralized commercial-capability data object.
- Every product owns an independent `image` and `imageAlt` field. Missing photography resolves to one neutral local WebP placeholder and never borrows another product's image.
- Product tabs expose Material, Process, tags and Example selling price. The simplified Economics panel retains Example margin, Potential hourly output, Best suited for, Required setup and the full visible illustrative disclaimer.
- Category and product controls use tab semantics, selected state, focus-visible treatment and ArrowLeft/ArrowRight/Home/End keyboard navigation.
- Mobile category tabs and product cards remain single-row horizontal rails inside the module. The 390 px document reports `scrollWidth === innerWidth`, so there is no page-level horizontal overflow.
- Browser console reports no errors or warnings.

### Comparison history and findings

1. Earlier anatomy used one category-wide scene image and small product selectors, which obscured the individual product-image relationship.
2. The implementation now presents three equal independent cards per category and keeps the shared detail/economics content immediately below.
3. No actionable P0, P1 or P2 findings remain. The neutral placeholder is an intentional temporary content state until twelve approved product photographs are supplied.

final result: passed

## 2026-07-23 generation comparison table redesign

### Evidence

- Source visual truth: `/var/folders/vd/kws8fm5509l6b9hnywhd8yfr0000gn/T/codex-clipboard-c1780e93-0014-42de-9aba-c13f1c0a2751.png`.
- Browser-rendered implementation: `qa/gen-comparison-table-implementation-desktop.png`.
- Combined comparison input: `qa/gen-comparison-table-combined.png`.
- Desktop viewport: 1586 × 1178 CSS px at device scale 1. The focused implementation capture is 1586 × 837 px.
- Responsive checks: 768 × 1000 and 390 × 844 CSS px.
- State: default page state with the generation comparison aligned below the fixed header.

### Full-view and focused comparison

- Replaced the six separate comparison cards with one continuous three-column table so every feature can be scanned horizontally from feature to Gen 1 to Gen 2.
- The reference's black surface is intentionally translated to the approved `#F5F5F7` and white OneLaser surfaces. Its information hierarchy, row rhythm, column proportions and direct side-by-side reading pattern are preserved.
- The reference's `Header`, `2 × 3 Comparison Grid` and `Bottom Statement` labels are treated as design-document annotations rather than customer-facing copy.
- Gen 1 is consistently weakened with `#ECECEF` and secondary text. Gen 2 remains dominant through black bold copy and a continuous OneLaser-red column accent.

### Required fidelity surfaces

- Fonts and typography: passed. Official Certia remains in use; the 48 px desktop / 32 px mobile section heading hierarchy is unchanged.
- Spacing and layout rhythm: passed. The table uses one continuous bordered surface, six aligned rows and a 25% / 31% / 44% desktop column structure. Mobile keeps the same reading order in one continuous stacked table.
- Colors and visual tokens: passed. Structural surfaces remain white or `#F5F5F7`; Gen 1 uses light gray, and Gen 2 uses `#E7310E` plus black as requested.
- Image quality and asset fidelity: not applicable; this text-only comparison introduces no visual assets.
- Copy and content: passed. All six comparison claims and the bottom statement remain unchanged.

### Responsive and browser verification

- Desktop renders six rows and three columns at 1278 px table width with zero horizontal overflow.
- Tablet at 768 px reports zero horizontal overflow and readable row wrapping.
- Mobile at 390 px hides the desktop column header and exposes the same Gen 1 / Gen 2 labels inside each stacked feature row, with zero horizontal overflow.
- Browser console contains no errors.

### Findings and comparison history

- Initial issue: the six-card layout forced readers to re-locate Gen 1 and Gen 2 labels in every card and made cross-feature scanning slower.
- Fix: converted the component to one semantic table with persistent desktop column headings and responsive mobile data labels.
- Post-fix result: the implementation matches the reference's direct row-comparison anatomy while preserving the OneLaser light-surface system. No actionable P0, P1 or P2 findings remain.

final result: passed

## 2026-07-22 profit artwork replacement

- Replaced the previous profit-and-product-output artwork with the latest user-supplied `/Users/yongyuan/Downloads/2.webp`.
- Shipped the optimized page asset as `public/assets/xrf-profit-products-web.webp` at 2400 × 1125, preserving the source aspect ratio and customer-facing copy.
- Verified the new `Your Work Is Only As Good As Your Laser.` artwork renders between the two supplied overview images with zero vertical gap.
- Desktop and 390 px mobile both report zero horizontal overflow; all three images retain intrinsic aspect ratios and span the viewport width.

final result: passed

## 2026-07-22 hero overview video and proof consolidation

### Hero video

- Replaced the final Hero media placeholder with a local 1280 × 720 cover for the official OneLaser video `F1ZJvoeANgk`.
- The square Hero stage and 70 px overview thumbnail both use the real cover. Clicking either opens the existing privacy-enhanced, lazy in-page YouTube player; no iframe loads in the default page state.

### Duplicate proof and overview artwork

- Removed the standalone hobby-laser performance module and moved the same performance proof to the first position in the arrow-controlled independent-review rail.
- Inserted the supplied profit-and-product-output artwork immediately above the capability collage. Both assets render at intrinsic aspect ratio on one `#141414` band with no padding, gap, crop or inherited 16:9 frame.
- The new profit artwork is optimized from 3840 × 1800 / 2.2 MB to 2400 × 1125 / approximately 369 KB WebP.

### P0 interaction

- Active P0 chapters retain the sticky two-column scene, centered translucent-black play control and keyboard-accessible full-media preview.
- Chapter changes use a restrained opacity, 12 px vertical settle and 1.025-to-1 image scale transition. `prefers-reduced-motion` removes these animations.

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

## 2026-07-24 official OneLaser shell and accessory refresh

### Data and responsive checks

- Purchase accessories now use locally shipped official OneLaser imagery and current product names/prices for LightBurn Pro, Conveyor Feeder, Air Assist Control and MagSwitch lens kit.
- Header navigation links to the official Laser Machines, Accessories, Support, Community and Contact destinations; footer uses official contact details and resource links.
- Desktop 1489 × 1178 and mobile 390 × 844 previews report zero horizontal overflow. Mobile navigation opens as a contained panel and all four accessory images load with non-zero natural dimensions.

final result: passed

## 2026-07-26 RF media framing and seven-color loading palette

### RF media consistency

- Cleaner Detail, Faster Response and Longer Lifespan each render inside the same 856 × 620 px desktop media frame.
- All three images use centered `object-fit: cover`, allowing excess source-image area to crop without changing the stage or adjacent copy dimensions.
- The 390 px mobile viewport uses one consistent 3:2 media frame (`352 × 234.66 px`) and reports zero document-level horizontal overflow.

### Loading palette

- The loading system assigns every image one stable color from seven low-saturation palettes: warm stone, sage, blue-gray, dusty rose, lavender, muted teal and sand.
- Browser verification found all seven palette bases in the rendered page. A still-pending lazy image retained its assigned dusty-rose surface and the restrained `image-placeholder-drift` animation.
- Loaded and failed images retain the existing ready/error behavior, and `prefers-reduced-motion` continues to disable loading movement.

final result: passed
