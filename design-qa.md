# OneLaser Homepage Design QA

Source visual truth paths:

- `/Users/yongyuan/Downloads/web/OneLaser_Hydra Gen2_WEB_AdCopy_Education_EN_v1.png`
- `/Users/yongyuan/Downloads/web/OneLaser_XRF_WEB_EN_v1.png`
- `/Users/yongyuan/Downloads/web/OneLaser_XRF_WEB_AdCopy_EN_v2.png`
- `/Users/yongyuan/Downloads/XRF/XRF-image.png 3.png`
- `/Users/yongyuan/Downloads/VertiGo/VertiGo1.png`
- `/Users/yongyuan/Downloads/Hydra Gen2/Hydra Gen2-9-1100x678-2 1.png`
- `/Users/yongyuan/Downloads/Cobra/Cobra10渲染.63 1.png`
- `/Users/yongyuan/Documents/XRF Gen2 网页/UI-SPEC.md`

Implementation evidence:

- `/Users/yongyuan/Documents/XRF Gen2 网页/references/incoming/home-desktop-hero.png`
- `/Users/yongyuan/Documents/XRF Gen2 网页/references/incoming/home-mobile-hero-390.png`
- `/Users/yongyuan/Documents/XRF Gen2 网页/references/incoming/home-mobile-solutions-390.png`
- `/Users/yongyuan/Documents/XRF Gen2 网页/references/incoming/home-mobile-results-390.png`
- `/Users/yongyuan/Documents/XRF Gen2 网页/references/incoming/home-products-desktop-final.png`
- `/Users/yongyuan/Documents/XRF Gen2 网页/references/incoming/home-products-mobile-390-final.png`
- Combined comparison: `/Users/yongyuan/Documents/XRF Gen2 网页/references/incoming/home-banner-comparison.png`

Viewport and normalization:

- Desktop browser viewport: 1280 × 720 CSS px at device scale 1. Hero stage: 1280 × 600 CSS px.
- Desktop source normalized from 3840 × 1200 to 1280 × 400 and centered within the same 1280 × 600 OneLaser-brown stage used by the implementation.
- Mobile browser viewport: 390 × 844 CSS px at device scale 1. Hero stage: 390 × 510 CSS px.
- States checked: hero banner 1, hero next-banner state, closed/open mobile menu, Small Business/Education solution states, homepage, and `?page=xrf`.

## Findings

No actionable P0, P1 or P2 findings remain.

- Fonts and typography: official Certia files load; headings preserve the approved 800 weight and compact display rhythm; visible mobile text floor is 12 px.
- Spacing and layout rhythm: the desktop hero is exactly 600 px high; homepage sections use deliberate white space, consistent 24–32 px media radii and stable editorial axes.
- Colors and visual tokens: exact OneLaser reds, black, white and `#F5F5F7` are used. The education hero edge field matches the supplied banner rather than introducing a new decorative color.
- Image quality and asset fidelity: all three supplied 3840 × 1200 banners and all four supplied transparent product renders are shipped unchanged. Machine and result imagery uses approved source assets; no product image is approximated with code art.
- Copy and content: the supplied banner copy stays inside the source assets. Mobile companion copy is shorter and avoids unsupported commercial claims. Support, fulfillment and warranty wording follows the existing approved project system.
- Responsiveness and accessibility: 390 px document overflow is 0; all images completed with non-zero natural dimensions; navigation, carousel and solution tabs expose semantic labels and states; reduced motion is supported.

Focused comparison was required for the hero because the source typography and machine crop are embedded in the raster. The side-by-side comparison confirms the implementation preserves the normalized source exactly, with only the intentional carousel arrows and dots added.

## Comparison history

1. First desktop pass: P2 — `object-fit: cover` cropped the supplied left-side headline at 1280 px. Fix: switched to `contain` inside a color-matched 600 px stage. Post-fix evidence: `home-banner-comparison.png` preserves the complete banner and machine.
2. First mobile pass: P2 — the narrow crop exposed part of the banner’s embedded headline behind the mobile companion copy. Fix: repositioned each original raster around its people/machine focal area and moved embedded desktop copy fully out of view. Post-fix evidence: `home-mobile-hero-390.png` shows one clear content hierarchy.
3. First four-product mobile pass: P2 — a leftover tablet minimum height created excessive blank space below the first product row. Fix: removed the inherited 600 px minimum and let the two-column cards size to their content. Post-fix card heights are 341/341/365/365 px with zero document overflow.

## Primary interactions tested

- Previous/next hero controls and active dot update.
- Mobile menu open state.
- Solution tab selection and panel content update.
- Homepage-to-XRF route and XRF page render.
- Desktop and mobile image loading and overflow checks.
- Browser console warnings/errors: none.

## Follow-up polish

- P3: If dedicated portrait campaign art is produced later, replace the mobile focal crops while keeping the current accessible copy and controls.

final result: passed
