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
- Brochure performance source crop: `/Users/yongyuan/Documents/XRF Gen2 网页/references/incoming/brochure-rf-core-crop.png`.
- Brochure-led WHY implementation evidence: `/Users/yongyuan/Documents/XRF Gen2 网页/references/incoming/homepage-brochure-why-desktop.png`.
- Desktop implementation pixels: 1440 × 4096 for each upper/lower checkpoint; CSS viewport 1440 × 4096; device scale factor 1.
- Mobile implementation pixels: 390 × 844; CSS viewport 390 × 844; device scale factor 1.
- The combined comparison normalizes source and implementation to equal column widths and top alignment. Focused mobile evidence is reviewed at native 390 px width.
- State: homepage, XRF campaign hero, default product grid. Additional interaction states cover carousel navigation, open/closed YouTube modal, and open/closed mobile navigation.

## Full-view comparison evidence

The combined comparison confirms the selected hierarchy from header through footer: white navigation, adaptive 3840 × 1200 campaign carousel, immediate four-machine 2 × 2 campaign grid, brochure-led WHY ONELASER proof, a dense finished-project wall, editorial YouTube rail, three-step workflow, three separate maker/business/education panels, the required three-part brand promise, and the official-content footer. The former results banner, engineering-story stack, duplicate support rail, and final CTA were intentionally removed following direct user feedback.

The implementation uses the official OneLaser product card order, images, labels, copy, parameter pills, and Explore Now actions from the later user-supplied product-grid override. This later source intentionally supersedes the simpler product cards shown in the original generated mock.

## Focused comparison evidence

- Product grid: the official override and implementation are shown together in `home-products-refinement-combined.png`. Card order, labels, copy, parameters, machine identity, and text actions match. The latest user-supplied Cobra, XRF, Hydra Gen2, and VertiGo renders replace the earlier files. OneLaser red, 24 px radii, Certia typography, and mobile single-column behavior follow the XRF Gen2 UI specification.
- Hero: the exact three supplied 3840 × 1200 campaign artworks remain intact and uncropped at desktop inside the required 600 px stage.
- WHY ONELASER: each card preserves one brochure claim as its own information unit—Long-Life RF Precision, Print & Cut with Full Vision Intelligence, and Unmatched Speed—with separate outcome copy and technical proof. The title stays on one line on desktop, and the three cards use consistent 16:9 media anatomy.
- Finished projects: twelve real engraving outputs form a four-column desktop gallery and a two-row horizontal mobile rail. Each card owns its image and material label; no synthetic placeholder or code-drawn asset is used.
- Videos: four real local YouTube covers replace generic placeholders. Iframes are absent until interaction, and removed on close.
- Mobile: native 390 px captures confirm no document overflow, readable copy, a 12 px minimum visible text floor, single-column product cards, intentional horizontal media rails, a working navigation drawer, and a complete two-column-to-single-column footer adaptation.

## Findings

- No actionable P0, P1, or P2 fidelity issues remain.
- Fonts and typography: Certia is used throughout; editorial headings are 48 px desktop and 32 px mobile; card and body hierarchy follows `UI-SPEC.md`; visible text floor is 12 px.
- Spacing and layout rhythm: 12–16 px card grouping, 24 px product radii, 48 px desktop / 32 px mobile section boundaries, 1280–1440 px editorial axes, and an aspect-correct Hero capped at 600 px are consistent with the XRF Gen2 system.
- Colors and visual tokens: surfaces are `#FFFFFF` / `#F5F5F7`, text uses black / `#6B6B70`, borders use XRF gray tokens, brand accents use `#E7310E`, and primary actions use `#D92D0D`.
- Image quality and asset fidelity: all production images load with real natural dimensions; no machine render, logo, video cover, or photographic module uses a placeholder or code-drawn approximation.
- Copy and content: the product grid uses live official OneLaser copy verified from `https://www.1laser.com/`; the WHY module uses the supplied brochure copy directly; the closing brand statements use the user's text verbatim; header and footer information follow the current official homepage.
- Browser checks: zero broken or pending images, zero document overflow at desktop and 390 px, and a 12 px mobile text floor. The video rail advances, the lazy modal inserts exactly one iframe and removes it on close, and the mobile navigation opens and closes correctly.

## Comparison history

1. Initial product cards lacked the official labels, specification pills, and CTA anatomy. Fixed by verifying the live OneLaser homepage and rebuilding the 2 × 2 grid with the supplied official reference. Post-fix evidence: `homepage-final-desktop-top.png` and `homepage-mobile-xrf-system.png`.
2. Initial audience panels allowed embedded banner copy to overlap the new overlay copy. Fixed by using the approved right-side image crop. Post-fix evidence: `homepage-final-desktop-bottom.png`.
3. Initial homepage tokens drifted from the XRF Gen2 system in card radius, accent red, heading sizes, play-control scale, and mobile card layout. Fixed with 24 px product radii, `#E7310E` / `#D92D0D`, 48/32 px editorial headings, 72/58 px play controls, and single-column mobile product cards. Post-fix evidence: desktop and 390 px captures above.
4. A trial full-bleed Hero crop clipped the banner's left-side message at 1440 px. Reverted to uncropped `contain` rendering inside the exact 600 px stage. Post-fix evidence: `homepage-final-desktop-top.png`.
5. The first WHY ONELASER draft combined unrelated brochure statements into one narrative. Rebuilt it as three discrete brochure claims with one outcome and proof set per card. Post-fix evidence: `homepage-brochure-why-desktop.png`.
6. The homepage lacked the requested breadth of finished-work evidence. Added a twelve-item real-project gallery with dense desktop composition and a two-row mobile swipe rail.
7. The prior footer and navigation were simplified approximations. Rebuilt both from the current official OneLaser information architecture while retaining the XRF Gen2 white/light-gray visual system.

## Primary interactions tested

- Hero autoplay structure, direct slide-dot selection, keyboard arrows, and swipe handlers.
- YouTube cover opens the accessible lazy modal; close removes the iframe; overlay and Escape close are implemented.
- Mobile menu opens, exposes navigation, and closes after navigation.
- Product, demo, YouTube, support, email, telephone, footer, and internal XRF links have real destinations.

## Follow-up polish

- P3: re-evaluate line breaks at intermediate tablet widths after future localization or copy changes.

final result: passed
