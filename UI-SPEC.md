# OneLaser XRF Gen2 Listing UI Specification

## Design direction

Premium international product UI: Apple and DJI restraint, xTool purchase clarity, Insta360 product storytelling, and Tesla-level visual reduction. Use supplied XRF renders and Certia brand typography throughout.

## Color

- Primary text: `#111111`
- Secondary text: `#666662`
- Primary surface: `#FFFFFF`
- Secondary surface: `#F5F5F7`
- Divider: `#E1E1DC`
- OneLaser action and price: `#F2380F`
- Action hover: `#D72D09`
- Structural black panels and gradients are not permitted.

## Typography

- Product H1: 40 px / 42 px line height / Certia ExtraBold 800; mobile 36 px / 37 px.
- Section display H2: responsive 46–72 px / 0.98 line height / Certia ExtraBold 800.
- Standard section H2: responsive 40–64 px / 1.0 line height / Certia ExtraBold 800.
- Card H3: responsive 26–36 px / 1.05 line height / Certia ExtraBold 800.
- Body large: 16 px / 26 px / Certia Regular 400.
- Body: 14 px / 22 px / Certia Regular 400.
- UI label: 13 px / 18 px / Certia SemiBold 600–700.
- Eyebrow and caption: 9–11 px / 14–16 px / Certia ExtraBold 800 / uppercase / 0.10–0.13 em tracking.
- Prices: 22–30 px / Certia ExtraBold 800 / OneLaser red.

## Spacing and layout

- Base spacing unit: 4 px.
- Standard steps: 4, 8, 12, 16, 24, 32, 48, 64, 96 px.
- Desktop content maximum: 1480 px.
- Main section vertical padding: 132 px desktop; 86 px mobile.
- Related controls: 8–12 px gap. Card groups: 12–16 px gap. Major content tracks: 48–72 px gap.

## Components

- Small radius: 6 px. Standard controls/cards: 10 px. Large panels/modals: 16 px.
- Primary button: 52–54 px height, OneLaser red, white text, 800 weight.
- Secondary button: white surface, 1 px `#111111` border.
- Selected card: black or OneLaser-red 1 px border with matching 1 px inset ring.
- Cards use borders and surface contrast; no decorative shadows unless functional separation requires it.
- Prices are always red. Optional accessories always show `OPTIONAL` before the name.
- Product gallery: 660 × 660 px desktop stage; 70 × 70 px thumbnails; explicit previous/next controls and dedicated video slot.

## Responsive behavior

- Desktop: two-column product gallery and purchase panel.
- Below 1180 px: product gallery and purchase panel stack.
- Below 900 px: configurator and explanatory media split layouts stack.
- Below 640 px: single-column cards, 18 px page gutters, 36 px product H1, full-width CTAs and no horizontal page overflow.
