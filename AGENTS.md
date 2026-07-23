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
- Use the shared UI system in `UI-SPEC.md` for typography, spacing, radius, dividers, buttons, cards, selected states and responsive behavior. Product H1 is 32 px / 800 on desktop and mobile; editorial section headings use 48 px / 800 desktop and 32 px / 800 mobile; body text uses 14–16 px / 400–500.
- All customer-facing prices use OneLaser red. Do not invent reviews, discount amounts, inventory urgency, delivery dates, financing rates or accessory prices when the product workbook does not provide them.
- The PDP configuration flow may borrow the interaction anatomy of xTool package selectors, optional add-on cards, quantity controls and sticky purchase bars, but must preserve equal-fit 38W/70W framing and explicit optional-accessory labels.
- Treat `/Users/yongyuan/Downloads/OneLaser Web UI Guideline.pdf` as the current visual-system source of truth. Use OneLaser red `#E7310E`, action red `#D92D0D`, white and `#F5F5F7` surfaces, `#000000` primary text, `#6B6B70` secondary text, `#D2D2D7` borders, 24–32 px media/card radii, and pill primary actions.
- Use the official guideline's benefit-first sequence: Customer Benefit → Product Feature → Technical Proof → Real Result. Each section should communicate one primary message and no more than one primary plus one secondary action.
- Use bright Insta360-style motion through sticky storytelling, progressive chapter indicators, restrained image zoom, metric reveals and slight vertical section reveals. Do not use excessive parallax, forced horizontal page scrolling, red flashes, blocking animations or autoplay sound. Always provide a reduced-motion path.
- Organize the page by the current `XRF Gen2 卖点` and `XRF Gen2 Specs-1` sheets. P0 becomes dynamic story content, P1 gets large visual modules, P2 gets compact proof cards, and P3 stays in specifications/FAQ. Never use the `参数作废` sheet.
- Use `https://www.1laser.com/products/onelaser-xrf-desktop-laser-machine` as the current commercial-data source for the hero: rating, current 38W price, MSRP, financing copy, packages, accessory names/prices, returns, warranty and support. The workbook remains the feature/specification source when the official sales page does not cover a Gen2 claim.
- The hero purchase flow follows xTool P3's decision order while remaining visually OneLaser: product title and evidence, official price/MSRP, equal-fit 38W/70W power selector, package selector, optional frequently-bought-together cards, quantity/CTA and bottom sticky purchase bar.
- The user-authorized 70W new-product price is exactly $500 above the equivalent 38W configuration. Therefore Standalone is $3,999 / $4,499 and Riser Base is $4,499 / $4,999 for 38W / 70W respectively, unless newer direct user or official pricing supersedes it.
- Customer-facing text must never render below 12 px at any breakpoint; small labels may use tracking and weight for hierarchy instead of smaller type.
- Keep the XRF Gen2 at-a-glance module static with no internal interaction. Place the supplied workshop proof image immediately above the supplied capability-collage image, then place the pair immediately before the FOX proof module. Both images run edge to edge with zero outer padding and zero gap on `#141414`; until dedicated mobile assets arrive, scale the desktop images proportionally without cropping.
- Keep project-result media at a fixed 4:3 aspect ratio across desktop and mobile so switching projects never shifts the page layout.
- Keep the long-form 38W/70W proof independent from purchase configuration: use one display-only segmented control on a full-width `#F5F5F7` band to switch between one large 38W proof image and one large 70W proof image. This control must never update the hero power selector, cart or sticky total.
- Every P0 story and video placeholder uses a horizontal 16:9 stage.
- Present safety as one wide 16:9 product image followed by compact proof cards; avoid abstract safety-zone diagrams.
- The hero purchase panel is the only configuration flow. Do not repeat a second full configurator below the storytelling content.
- Hero highlight bullets use 12 px type. MSRP is gray, while the final price remains OneLaser red. Financing links use blue.
- Do not show a separate `Compare 38W / 70W` link in the hero or the four-metric proof rail below it.
- The secondary hero purchase action reads `Buy with SHOP` and uses a `#5532EB` purple surface with white text.
- Power choice cards communicate use-case fit only and do not repeat prices. The hero final price uses Certia Black 900.
- Do not show the three-column trust strip or the commercial-source note below hero purchase actions.
- Selected power and package cards are communicated only through the red border and pale-red surface; never repeat `SELECTED`, a checkmark, or a `Selected here` label inside the choice UI.
- The hero starts with the product H1 and keeps compact top spacing; do not show the `ONELASER XRF™` / `PROFESSIONAL RF DESKTOP LASER` kicker row.
- The at-a-glance overview is the one explicit dark-band exception: use the supplied long-form artwork on `#141414`; all other structural page surfaces remain white or `#F5F5F7`.
- P0/video images must use `object-fit: contain` with no active/hover crop so the complete 16:9 frame stays visible.
- The 38W/70W proof stage grows fluidly to the 1280 px content maximum on larger viewports. Project media always stays at a centered 4:3 stage with consistent dimensions, and the whole image-plus-copy carousel clips to a shared 32 px desktop / 24 px mobile outer radius.
- The page narrative is workbook-led: finished results first, equal-fit 38W/70W choice second, then six non-duplicative P0 image/video stories, followed by P1 workflow/reliability, P2 compact engineering proof, P3 one-line details, support, specifications and FAQ.
- Never expose internal priority codes such as `P0`, `P1`, `P2` or `P3` to customers. Priority determines media size and page weight only.
- Use the supplied July 2026 XRF workshop, dark product, work-area and fine-detail images as the primary product-proof assets. Do not replace product-faithful supplied imagery with generic AI visuals when a real approved asset already fits the slot.
- Customer-facing placeholder language should read `VIDEO PREVIEW` or `VIDEO STORY · IMAGE PREVIEW`, not unfinished-production language such as `REPLACEABLE MEDIA` or `VIDEO PLACEHOLDER`.
- Keep the power guide, reliability, safety and micro-feature introductions left aligned; use one consistent editorial axis for narrative section headings.
- Keep the desktop project-proof carousel at a fixed height with stable previous/next controls. Reduce its secondary headline scale so the proof image remains the dominant visual.
- Make every P0 story media stage directly clickable and keyboard accessible, opening the existing full-size 16:9 media preview until production videos replace the stills.
- Safety uses a full-viewport-width `#F5F5F7` background band with its content aligned to the 1280 px page grid.
- Put narrative descriptions directly beneath their left-aligned titles instead of using a split heading/copy layout. Keep short workflow headings and reliability support copy on one line on desktop when the 1280 px grid permits, with normal responsive wrapping below 1180 px.
- Distribute YouTube proof across the buying journey instead of using one large video collection: FOX media proof after the hero; hobby-laser comparison after core benefits; customer success after finished-product proof; independent reviews after specifications; xTool P2 comparison before late-stage trust; production-facility proof beside warranty/support.
- Treat the FOX & Friends Weekend feature as a standalone early-page `As Seen on TV` social-proof module. Use only the wording `Featured on FOX & Friends Weekend`, with `As Seen on TV` and `FOX & Friends Weekend` tags; do not show a date and never imply FOX gave XRF an award.
- Direct page video proof should focus on brand credibility, measurable production performance, customer business outcomes, independent long-term reviews, fair competitor comparison and visible engineering/support. Keep tutorials, setup, calibration, maintenance and pure unboxings out of the sales journey.
- Load YouTube only after interaction: every default state uses a lazy 16:9 static cover, and all sections reuse the same accessible in-page player with close button, overlay close, Escape close and playback removal on close. Creator-review videos live in one arrow-controlled carousel; do not add a separate `View More Creator Reviews` action.
- Add a dedicated materials gallery after finished-product proof. Use a stable, switchable proof stage for Acrylic, Wood, Leather, Glass & Stone and Coated Metal; each state must show finished products rather than raw material swatches, keep the stage dimensions fixed, pair every material tab with a distinct Phosphor line icon, and use only a red underline to communicate the active tab.
- Generated imagery is allowed only to fill workbook-led proof gaps. Preserve approved real XRF renders wherever the machine itself is visible, compress generated assets to WebP, and keep every generated image tied to a specific claim such as material capability, 38W micro-detail, 70W relief/throughput, IVS compensation, optional Smart Air or optional Conveyor.
- Center the 38W/70W power guide on the 1280 px editorial axis, while the safety band spans the full viewport and centers its inner content on that same axis. Engineering-proof headings remain on one line on desktop when they fit. Keep a clear gap between FOX copy and video, and place the same centered translucent-black play button on every P0 media stage.
- Power-proof detail titles use the card-heading scale (36 px desktop / 28 px mobile), and desktop sticky-story copy begins at the same top edge as the active media stage.
- Give all eight compact micro-feature tiles distinct Phosphor line icons. Icons use the OneLaser red accent and remain secondary to the feature title.
- Use one compact vertical rhythm across the sales narrative: 48 px desktop and 32 px mobile for standard section boundaries unless the sticky story needs additional scroll range. This replaces the earlier 96 px / 64 px standard; adjacent sales modules should never rely on extra blank spacer bands.
- All video-proof section headings use the same 48 px / 800 desktop and 32 px / 800 mobile type standard. Adjacent video cards must have identical 16:9 media, card anatomy, copy spacing and visual weight.
- A clickable video cover is the only play action in its module. Do not repeat separate text buttons such as `Watch the full test`, `Watch his story` or `Open video preview`.
- All centered video play controls use a black surface at 20% opacity with a white play glyph; never use a red play-control circle.
- On desktop, narrative headings and their direct descriptions stay on one line when they fit the 1280 px grid. All section introductions share the same 1280 px left axis and wrap normally below 1180 px.
- Customer-facing performance data is now `1,300 mm/s` and `True 3.5G`; remove every older `1,200 mm/s` and `3G` reference from hero proof, package copy, story copy, metrics and specifications.
- Use a compact, repeatable section-heading rhythm: 8 px from eyebrow to title and 12 px from title to supporting copy. Adjacent modules must not repeat the same claim or the same lead asset; each section must add a distinct proof layer.
- The Hero overview video uses the official OneLaser YouTube video `F1ZJvoeANgk`. Ship its static cover locally and open it through the shared lazy in-page YouTube player; do not show a placeholder in this slot.
- Do not keep a standalone hobby-laser performance video module near the top of the page. Include that proof as the first item in the arrow-controlled independent-review video rail instead.
- Place the supplied profit-and-product-output artwork immediately above the supplied at-a-glance capability collage. Both images render edge to edge on the same `#141414` band with no padding or gap between them.
- P0 chapter changes use a restrained crossfade, slight upward settle and subtle image scale reset while copy and media remain locked on one horizontal scene. Disable this motion under `prefers-reduced-motion`.
- Render the two supplied at-a-glance images at their intrinsic aspect ratios with no inherited 16:9 frame, padding, gap or letterboxing above or below either image.
- In the desktop P0 scroll story, the active copy and active 16:9 media form one sticky scene and stay vertically centered on the same horizontal line; offscreen chapters act only as scroll triggers and must not push the visible media out of alignment.
- Keep the finished-product carousel image clean: do not overlay a `PROJECT PROOF` counter or similar production label on the project media; use the existing arrows and dots for navigation state.
- On desktop, each sticky P0 story keeps the active left-hand copy and right-hand media in the same upper-middle horizontal band. Keep story steps close enough that switching never leaves a large blank interval between the copy and its corresponding media.
- Do not show an announcement strip above the main navigation; the main header is the first visible site chrome.
- Selling-point navigation must be genuinely scroll-linked: keep every chapter in document flow, update the sticky desktop rail / mobile horizontal rail from reading position, and let each rail item jump to its chapter. Do not simulate this with tabs that replace a single content panel.
- Keep the desktop selling-point rail flush to the far-left page edge like xTool P3. Each rail item shows only the selling-point name with no number, border or card container. Keep the existing horizontal swipe rail on mobile, also without numbers.
- Do not place a separate introduction block above the selling-point chapters; the chapter content should begin immediately with the navigation and first proof story.
- Customer-success videos belong inside the shared arrow-controlled review rail, not in a separate large two-card module.
- Use the supplied `38W.webp` and `70W.webp` as the dedicated editorial power-proof images without replacing other precision-story assets that happen to reuse earlier power imagery.
- Keep MakerBoost AI as its own standalone module using the supplied `Makerboost.webp` and the exact user-supplied `Out of the box, into creation.` copy. Present `Your software. Your way.` and the supplied `Software Compatibility.webp` in a separate following module; never combine the two into one shared card group. Remove shorter duplicate software claims from Smart Workflow.
- Present Support as one dedicated three-part module covering the exact user-supplied 30-day return terms, 3-2-1 warranty and One Support engineer promise. Preserve that copy verbatim and do not repeat simplified warranty/support claims in adjacent modules.
- Place a dedicated three-advantage RF explainer immediately above `Choose the power that fits your work.` Cover cleaner engraving detail, faster RF response and up to 30,000 hours of source life in maker-facing language, using XRF-specific proof values and equal-fit 38W/70W framing.
- Use normal stacked editorial copy in MakerBoost AI, Software compatibility and every selling-point module: title first, body directly below, with no intentional desktop line breaks when the 1280 px grid can hold the text.
- Do not show a Support section eyebrow or standalone heading. In the warranty card, use `We built it to last. We back it to prove it.` as the large lead and move the 3-2-1 warranty line into the smaller bold supporting-copy position.
- The production-facility video module uses the same large split-card anatomy, heading scale, spacing and proof-row treatment as the preceding `Considering an xTool P2? Watch this first.` module.
- Do not show the final image CTA module after FAQ. The FAQ section should transition directly into the site footer.
