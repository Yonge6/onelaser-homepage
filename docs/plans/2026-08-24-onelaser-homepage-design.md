# OneLaser Homepage Design

## Outcome

Create a premium international OneLaser brand homepage that introduces the portfolio before routing visitors into product detail, education, support and consultation paths. Preserve the existing XRF Gen2 commercial page at `?page=xrf`.

## Direction

Use a restrained product-storytelling system informed by Apple and DJI hierarchy, xTool’s product-selection clarity and Insta360’s large media rhythm. Keep OneLaser’s own identity dominant through Certia typography, exact red accents, white and soft-gray surfaces, and deliberate black product bands.

## Page anatomy

1. Compact assurance bar and global navigation.
2. 600 px desktop carousel using the three supplied 3840 × 1200 banners.
3. Four product-family cards directly below the banner: XRF, VertiGo, Hydra Gen2 and Cobra.
4. One concise brand manifesto.
5. Small Business, Education and Production solution switcher.
6. Finished-product inspiration mosaic.
7. Ownership assurance and engineer-consultation close.
8. Complete brand footer.

## Interaction and responsive behavior

- The hero auto-advances every 6.5 seconds and pauses for hover, focus and touch. It includes buttons, progress dots, keyboard arrows and swipe navigation.
- Desktop preserves the supplied banner composition inside an exact 600 px stage. Narrower screens use matching solid edge fields rather than cropping the supplied copy or machine.
- Mobile reframes the original imagery around people and product, then adds concise accessible HTML copy for the narrow format.
- The four supplied transparent machine renders use one calm product-card system with a shared visual baseline: four columns on desktop and two columns on mobile.
- Product and solution routes use official OneLaser URLs; the local XRF detail route remains available through `?page=xrf`.
- Motion is removed under `prefers-reduced-motion`.

## Acceptance

- Build passes.
- Desktop hero measures 600 px high.
- 390 px viewport has zero horizontal document overflow and no visible text below 12 px.
- All images load with non-zero natural dimensions.
- Carousel, menu, solution tabs and XRF detail route work.
- Browser console has no warnings or errors.
