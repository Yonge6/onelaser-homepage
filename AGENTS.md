# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

## XRF Gen2 design decisions

- Use OMTech Polar 2 as the purchase-structure reference: product media on the left, configuration and purchase decisions on the right.
- Use xTool P3 as the visual-language reference: premium white surfaces, generous whitespace, large product imagery, restrained dividers, and minimal shadow.
- OneLaser red-orange is reserved for the primary CTA, selected states, and a few proof accents; the page remains predominantly white, warm gray, and black.
- Treat the supplied `XRF Gen2 卖点参数发布汇总.xlsx` as the product-copy and specification source of truth.
- P0 stories use large video-shaped sections. Until final video exists, use the approved neutral color-block treatment with real XRF renders and a visible `VIDEO PLACEHOLDER` label.
- P1 receives large explanatory visuals; P2 appears as compact proof tiles; P3 belongs in specifications and FAQ.
- Always label Smart Air, Riser Base, Conveyor, Rotary, Fume Extractor, and optional lenses as optional when shown.
- Present 38W and 70W as equal-fit choices for different work, never as weak versus premium.
- Use the official Certia brand font for every web text style. Ship the required font files with the prototype so the public page does not depend on locally installed fonts.
- Page background surfaces must be white or `#F5F5F7`; do not use black as a section, card, announcement, or information-panel background.
- Keep the hero product stage and every product thumbnail square. Do not show the `PRODUCT VIEW`, overview-video bar, render caption, or platform caption around the hero image.
- Product media is a scrollable gallery with more than four square thumbnails. Keep a partial next thumbnail visible so desktop and mobile users understand they can swipe horizontally for additional real XRF renders.
- The desktop hero follows the xTool P3 media anatomy: a 660 × 660 main stage with previous/next controls and a visible counter, plus 70 × 70 image thumbnails with their own previous/next controls and a separate overview-video slot. Retain OneLaser colors, copy and product assets.
- Use bold Certia weights for every major page heading.
- Below the hero, use OMTech Polar 2 interaction patterns as a structural reference—sticky capability navigation, switchable benefit explanations, project proof browsing, media stories, configuration, specification and FAQ controls—but redesign the presentation and content for OneLaser rather than reproducing OMTech branding or assets.
- Structural backgrounds must resolve to exactly white or `#F5F5F7`; neutral borders, overlays and real image tones may use additional values only where functionally necessary.
- Use the shared UI system in `UI-SPEC.md` for typography, spacing, radius, dividers, buttons, cards, selected states and responsive behavior. Product H1 is 40 px / 800 on desktop and 36 px / 800 on mobile; section display headings use 46–72 px / 800; body text uses 14–16 px / 400–500.
- All customer-facing prices use OneLaser red. Do not invent reviews, discount amounts, inventory urgency, delivery dates, financing rates or accessory prices when the product workbook does not provide them.
- The PDP configuration flow may borrow the interaction anatomy of xTool package selectors, optional add-on cards, quantity controls and sticky purchase bars, but must preserve equal-fit 38W/70W framing and explicit optional-accessory labels.
- Use `https://www.1laser.com/products/onelaser-xrf-desktop-laser-machine` as the current commercial-data source for the hero: rating, current 38W price, MSRP, financing copy, packages, accessory names/prices, returns, warranty and support. The workbook remains the feature/specification source when the official sales page does not cover a Gen2 claim.
- The hero purchase flow follows xTool P3's decision order while remaining visually OneLaser: product title and evidence, official price/MSRP, equal-fit 38W/70W power selector, package selector, optional frequently-bought-together cards, quantity/CTA and bottom sticky purchase bar.
- The user-authorized 70W new-product price is exactly $500 above the equivalent 38W configuration. Therefore Standalone is $3,999 / $4,499 and Riser Base is $4,499 / $4,999 for 38W / 70W respectively, unless newer direct user or official pricing supersedes it.
