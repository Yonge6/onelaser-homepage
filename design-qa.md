# OneLaser Homepage Design QA

## Comparison target

- Overall source visual truth: `/Users/yongyuan/.codex/generated_images/01a032c2-4b43-7912-848c-37760ec1eb31/exec-cc036295-7872-4d18-9023-1d92f772311c.png`
- Product-grid override: `/Users/yongyuan/Documents/XRF Gen2 网页/references/incoming/onelaser-official-product-grid-reference.png`
- Design-system source: `/Users/yongyuan/Documents/XRF Gen2 网页/UI-SPEC.md`
- Desktop implementation evidence: `/Users/yongyuan/Documents/XRF Gen2 网页/references/incoming/homepage-final-desktop-top.png` and `/Users/yongyuan/Documents/XRF Gen2 网页/references/incoming/homepage-final-desktop-bottom.png`
- Mobile implementation evidence: `/Users/yongyuan/Documents/XRF Gen2 网页/references/incoming/homepage-mobile-xrf-system.png` and `/Users/yongyuan/Documents/XRF Gen2 网页/references/incoming/homepage-mobile-end.png`
- Combined source and implementation comparison: `/Users/yongyuan/Documents/XRF Gen2 网页/references/incoming/design-qa-combined.png`

## Viewport and normalization

- Overall source pixels: 727 × 2162.
- Product-grid source pixels: 2678 × 2288.
- Desktop implementation pixels: 1440 × 4096 for each upper/lower checkpoint; CSS viewport 1440 × 4096; device scale factor 1.
- Mobile implementation pixels: 390 × 844; CSS viewport 390 × 844; device scale factor 1.
- The combined comparison normalizes source and implementation to equal column widths and top alignment. Focused mobile evidence is reviewed at native 390 px width.
- State: homepage, XRF campaign hero, default product grid. Additional interaction states cover carousel navigation, open/closed YouTube modal, and open/closed mobile navigation.

## Full-view comparison evidence

The combined comparison confirms the selected hierarchy from header through footer: white navigation, 600 px banner carousel, immediate four-machine 2 × 2 campaign grid, finished-output band, three alternating engineering stories, editorial YouTube module, three-step workflow, maker/education panels, support rail, final CTA, and footer. The additional three-part brand promise is an intentional user-requested extension before the final CTA.

The implementation uses the official OneLaser product card order, images, labels, copy, parameter pills, and Explore Now actions from the later user-supplied product-grid override. This later source intentionally supersedes the simpler product cards shown in the original generated mock.

## Focused comparison evidence

- Product grid: the official override and implementation are shown together in `design-qa-combined.png`. Card order, labels, copy, parameter pills, machine identity, and actions match. OneLaser red, 24 px radii, Certia typography, and mobile single-column behavior follow the XRF Gen2 UI specification.
- Hero: the exact three supplied 3840 × 1200 campaign artworks remain intact and uncropped at desktop inside the required 600 px stage.
- Videos: four real local YouTube covers replace generic placeholders. Iframes are absent until interaction, and removed on close.
- Mobile: native 390 px captures confirm no horizontal overflow, readable copy, 12 px minimum visible text, full-width primary actions, and single-column product cards in line with the XRF Gen2 responsive system.

## Findings

- No actionable P0, P1, or P2 fidelity issues remain.
- Fonts and typography: Certia is used throughout; editorial headings are 48 px desktop and 32 px mobile; card and body hierarchy follows `UI-SPEC.md`; visible text floor is 12 px.
- Spacing and layout rhythm: 12–16 px card grouping, 24 px product radii, 48–96 px section boundaries, 1280–1440 px editorial axes, and 600 px desktop Hero are consistent with the XRF Gen2 system.
- Colors and visual tokens: surfaces are `#FFFFFF` / `#F5F5F7`, text uses black / `#6B6B70`, borders use XRF gray tokens, brand accents use `#E7310E`, and primary actions use `#D92D0D`.
- Image quality and asset fidelity: all production images load with real natural dimensions; no machine render, logo, video cover, or photographic module uses a placeholder or code-drawn approximation.
- Copy and content: the product grid uses live official OneLaser copy verified from `https://www.1laser.com/`; the closing brand statements use the user's text verbatim.
- Browser checks: zero broken images, zero document overflow at 1440 px and 390 px, and no console warnings or errors.

## Comparison history

1. Initial product cards lacked the official labels, specification pills, and CTA anatomy. Fixed by verifying the live OneLaser homepage and rebuilding the 2 × 2 grid with the supplied official reference. Post-fix evidence: `homepage-final-desktop-top.png` and `homepage-mobile-xrf-system.png`.
2. Initial audience panels allowed embedded banner copy to overlap the new overlay copy. Fixed by using the approved right-side image crop. Post-fix evidence: `homepage-final-desktop-bottom.png`.
3. Initial homepage tokens drifted from the XRF Gen2 system in card radius, accent red, heading sizes, play-control scale, and mobile card layout. Fixed with 24 px product radii, `#E7310E` / `#D92D0D`, 48/32 px editorial headings, 72/58 px play controls, and single-column mobile product cards. Post-fix evidence: desktop and 390 px captures above.
4. A trial full-bleed Hero crop clipped the banner's left-side message at 1440 px. Reverted to uncropped `contain` rendering inside the exact 600 px stage. Post-fix evidence: `homepage-final-desktop-top.png`.

## Primary interactions tested

- Hero autoplay structure, direct slide-dot selection, keyboard arrows, and swipe handlers.
- YouTube cover opens the accessible lazy modal; close removes the iframe; overlay and Escape close are implemented.
- Mobile menu opens, exposes navigation, and closes after navigation.
- Product, demo, YouTube, support, email, telephone, footer, and internal XRF links have real destinations.

## Follow-up polish

- P3: re-evaluate line breaks at intermediate tablet widths after future localization or copy changes.

final result: passed
