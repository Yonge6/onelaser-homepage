# OneLaser XRF Gen2 Listing UI Specification

## Design direction

Premium international product UI: Apple and DJI restraint, xTool purchase clarity, Insta360 product storytelling, and Tesla-level visual reduction. Use supplied XRF renders and Certia brand typography throughout.

## Color

- Primary text: `#000000`
- Secondary text: `#6B6B70`
- Tertiary text: `#8E8E93`
- Primary surface: `#FFFFFF`
- Secondary surface: `#F5F5F7`
- Default border: `#D2D2D7`
- Soft border: `#E5E5EA`
- Divider: `#ECECEF`
- OneLaser brand red: `#E7310E`
- OneLaser action and price: `#D92D0D`
- Action pressed: `#BF260B`
- Structural black panels and gradients are not permitted.

## Typography

- Product H1: 40 px / 42 px line height / Certia ExtraBold 800; mobile 36 px / 37 px.
- Display: responsive 72–96 px desktop and 44–52 px mobile / Certia ExtraBold 800.
- Section H2: responsive 42–56 px desktop and 30–34 px mobile / Certia ExtraBold 800.
- Card H3: responsive 28–34 px desktop and 23–26 px mobile / Certia ExtraBold 800.
- Body large: 18–20 px / Certia Regular 400.
- Body: 16 px / Certia Regular 400.
- UI label: 13 px / 18 px / Certia SemiBold 600–700.
- Eyebrow and caption: 9–11 px / 14–16 px / Certia ExtraBold 800 / uppercase / 0.10–0.13 em tracking.
- Prices: 22–30 px / Certia ExtraBold 800 / OneLaser red.

## Spacing and layout

- Base spacing unit: 4 px.
- Standard steps: 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 120, 160 px.
- Desktop content maximum: 1280 px; purchase hero may use 1440 px to preserve the approved 660 px gallery.
- Main section vertical padding: 120–160 px desktop; 72–96 px mobile.
- Related controls: 8–12 px gap. Card groups: 12–16 px gap. Major content tracks: 48–72 px gap.

## Components

- Small radius: 12–16 px. Product/media cards: 24–32 px. Large panels/modals: 32 px.
- Primary button: 52–56 px height, pill radius, OneLaser action red, white text, 800 weight.
- Secondary button: 46–48 px height, pill radius, white surface, 1 px `#000000` border.
- Selected card: OneLaser-red 2 px visual border, `#FFF7F4` surface and a visible non-color selection cue.
- Cards use borders and surface contrast; no decorative shadows unless functional separation requires it.
- Prices are always red. Optional accessories always show `OPTIONAL` before the name.
- Product gallery: 660 × 660 px desktop stage; 70 × 70 px thumbnails; explicit previous/next controls and dedicated video slot.
- Desktop hero purchase panel order: H1 → source-backed rating → five concise proof bullets → Final Price/MSRP/Save → financing → 38W/70W selector → package cards → optional add-ons → quantity/CTA → assurance.
- Package and add-on cards use 1 px dividers, 10–12 px radii, no elevation, a red price, and a black 2 px-equivalent selected state (border plus inset ring).
- Hero gallery is sticky on desktop while the longer purchase panel scrolls; it becomes static when the layout stacks below 1180 px.
- Sticky purchase bar always reflects the selected power, package, optional-item count, quantity and calculated total.

## Motion

- Section reveal: 400–700 ms fade with slight vertical translation.
- Image/detail zoom: 300–500 ms and restrained to approximately 1.03–1.06 scale.
- Tabs and switchers: 180–240 ms.
- Use sticky storytelling, chapter progress, number/metric reveals and product-detail zoom for P0/P1 content.
- Do not use multi-element fly-ins, forced page-level horizontal scrolling, red flashing, autoplay audio, blocking animations or exaggerated parallax.
- Respect `prefers-reduced-motion` and keep all content understandable with motion removed.

## Responsive behavior

- Desktop: two-column product gallery and purchase panel.
- Below 1180 px: product gallery and purchase panel stack.
- Below 900 px: configurator and explanatory media split layouts stack.
- Below 640 px: single-column cards, 18 px page gutters, 36 px product H1, full-width CTAs and no horizontal page overflow.
- On mobile, power choices stack, add-on cards collapse to three visual columns, and the sticky bar preserves the live total plus the primary CTA.
