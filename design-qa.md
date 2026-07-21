# XRF Gen2 Product Listing · Revision Design QA

## Comparison target

- Source visual truth: `/Users/yongyuan/Documents/XRF Gen2 网页/qa/source-public-before-revision.png` — the published hero state referenced by the user's four browser annotations.
- Implementation screenshot: `/Users/yongyuan/Documents/XRF Gen2 网页/qa/desktop-revision-final.png`
- Combined comparison evidence: `/Users/yongyuan/Documents/XRF Gen2 网页/qa/revision-comparison.png`
- Mobile implementation evidence: `/Users/yongyuan/Documents/XRF Gen2 网页/qa/mobile-gallery-revision.png`
- Viewports: 1463 × 1178 desktop; 390 × 844 mobile.
- State: page top, 38W selected, Studio product view selected.

## Full-view comparison evidence

The combined comparison verifies the requested changes in the same desktop viewport and state. The previous `PRODUCT VIEW` and render-caption strips are removed, the product stage is now square, the announcement and page surfaces use white or `#F5F5F7`, and the typography visibly uses the supplied Certia brand family.

## Focused comparison evidence

- Desktop runtime measurements: product stage 901.125 × 901.125 px; thumbnail 204.969 × 204.969 px.
- Mobile runtime measurements: product stage 354 × 354 px; thumbnail 101.492 × 101.492 px; document width 390 px with no horizontal page overflow.
- Product gallery: 16 square thumbnails; desktop strip width 3430 px inside a 901 px viewport and mobile strip width 1729 px inside a 354 px viewport.
- Gallery interaction: selecting off-screen `Head 01` scrolled the thumbnail strip to 1720 px and updated the main image to `xrf-gallery-08.jpg`.
- Font verification: `document.fonts.check("16px Certia")` returned true on desktop and mobile.
- Color verification: no rendered element used the former black section/card background tokens in the checked desktop state.

## Required fidelity surfaces

- Fonts and typography: passed. All UI text inherits the official Certia family. Regular, Medium, SemiBold, Bold, ExtraBold and Black files ship with the page, with Arial only as a final fallback.
- Spacing and layout rhythm: passed. Removing the top and bottom hero labels gives the square product stage a clean, uninterrupted composition. Purchase controls remain aligned and readable.
- Colors and visual tokens: passed. Structural page surfaces are white or `#F5F5F7`; previously dark announcement, video, safety and configuration surfaces were converted to the light system. OneLaser red remains the action accent.
- Image quality and asset fidelity: passed. The main image and 16-item gallery use real supplied XRF Gen2 renders. Images remain contained without distortion inside square stages.
- Copy and content: passed. The two specifically requested hero text strips are absent; product claims and optional-accessory labeling remain unchanged.
- States and interactions: passed. Product-thumbnail selection, off-screen gallery access and native horizontal scrolling were verified. Browser console error count: 0.
- Responsiveness and accessibility: passed. Desktop and mobile stages remain square, the thumbnail rail has touch/trackpad scrolling and scroll snapping, controls retain accessible names, and the 390 px viewport has no horizontal document overflow.

## Comparison history

### Iteration 1

- Earlier findings: hero top/bottom labels remained visible; hero image and thumbnails were landscape; black section surfaces conflicted with the requested light visual system; system fonts replaced the official brand family (P1/P2).
- Fixes made: removed both hero label strips, enforced 1:1 stage and thumbnail geometry, converted structural black backgrounds to white/`#F5F5F7`, bundled and applied Certia across all text.
- Post-fix evidence: `qa/desktop-revision-final.png`, `qa/mobile-gallery-revision.png`, and `qa/revision-comparison.png`.

### Iteration 2

- Earlier finding: the gallery exposed only four images and did not communicate that more views were available (P2).
- Fix made: expanded the gallery to 16 supplied renders and converted the thumbnail row to an overflowed, scroll-snapped horizontal rail with a partial next card visible.
- Post-fix evidence: runtime width/count measurements and successful `Head 01` off-screen selection.

## Findings

No actionable P0, P1 or P2 visual, responsiveness, accessibility or core-interaction findings remain for this revision.

## Follow-up polish

- P3: final product labels can be renamed if the commercial team wants a specific photography taxonomy.
- P3: replace each approved video placeholder when final production footage is available.

## Final result

final result: passed
