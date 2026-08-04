# XRF Gen2 Prototype Instructions

## Continuation and token-efficiency protocol

- Continue in `/Users/yongyuan/Documents/XRF Gen2 网页` using the saved project directly. Do not create a worktree for routine continuation; this checkout intentionally contains untracked QA evidence.
- Read `CURRENT.md` first and treat it as the only routine handoff. Do not replay old Codex tasks, rollout JSONL files, or the legacy `XRF-GEN2-HANDOFF.md` unless the user explicitly requests historical investigation.
- The complete pre-compaction decision history is archived at `docs/decisions/AGENTS-2026-08-03-full.md`. Never read it in full during normal work. When an exact section rule, asset mapping, or user-supplied sentence is needed, use one narrow `rg -n` query and read only the matching lines.
- Keep this file canonical and compact. When new durable feedback supersedes an existing rule, edit or replace that rule instead of appending a duplicate. Archive displaced detail only when it remains useful.
- Prefer medium reasoning for routine copy, asset, CSS and component changes. Reserve high reasoning for architecture, difficult regressions, security-sensitive work or conflicting requirements.
- Keep tool output narrow: use `./scripts/compact-status.sh`, `git diff --stat`, `git diff --check` and focused `rg`. Do not print all untracked `qa/*.png`, full-page DOM, large diffs or whole source files unless necessary.
- Batch one coherent request through: inspect once, patch once, run `npm run verify` once, check one desktop and one 390 px mobile surface when UI changed, then commit/push and verify the live page when publication is requested.
- Save temporary screenshots and visual references under ignored `references/incoming/`; inspect the saved path instead of re-extracting Base64 from task logs. Move only approved production assets into `public/assets/`.
- Preserve every existing untracked `qa/*.png`. Do not stage, rename, overwrite or delete them unless the user explicitly asks.

## Working rules

- Run the local server and open the preview yourself. Do not give the user server-start instructions when the environment can run it.
- Before substantial visual changes, use Product Design `get-context` only when the source is unclear or no longer matches the goal. A selected user mock or supplied image is the source of truth for layout, anatomy, density, spacing, color, typography, visible content and hierarchy.
- Make the smallest scoped change that satisfies the request. Preserve unrelated user work and avoid opportunistic refactors.
- For public-release work, distinguish local build, deployment and live-page validation. A commit or successful workflow alone is not production proof.

## Sources of truth

Use sources in this order:

1. Direct user feedback and supplied approved assets.
2. `/Users/yongyuan/Downloads/OneLaser Web UI Guideline.pdf` and `UI-SPEC.md` for the visual system.
3. `XRF Gen2 卖点参数发布汇总.xlsx`, specifically `XRF Gen2 卖点` and `XRF Gen2 Specs-1`, for features and specifications. Never use `参数作废`.
4. `https://www.1laser.com/products/onelaser-xrf-desktop-laser-machine` for current commercial facts not covered by the workbook.
5. `docs/decisions/AGENTS-2026-08-03-full.md` only through a narrow search when exact legacy detail is required.

Do not invent reviews, discounts, urgency, shipping dates, accessory pricing, financing rates, performance gaps or checkout targets. Revalidate time-sensitive commercial facts before changing them.

## Core visual system

- Use official Certia files shipped with the prototype. Major headings use Certia 800; Hero price uses Certia Black 900.
- Structural surfaces are exactly white or `#F5F5F7`, except the approved at-a-glance artwork band on `#141414`. Use `#000`, `#6B6B70`, `#D2D2D7`, OneLaser red `#E7310E`, action red `#D92D0D`, 24–32 px media/card radii and pill primary actions.
- Reserve red for the primary CTA, selected states, prices and a few proof accents. Selected configuration cards use only a red border plus pale-red surface; no checkmark or `SELECTED` label.
- Product H1 is 32 px / 800 at all breakpoints. Editorial headings are 48 px desktop and 32 px mobile; body is 14–16 px. No customer-facing text may be below 12 px.
- Standard section boundaries are 48 px desktop and 32 px mobile. Heading rhythm is 8 px eyebrow-to-title and 12 px title-to-body. Avoid blank spacer bands.
- Follow benefit-first storytelling: Customer Benefit → Product Feature → Technical Proof → Real Result. Each section has one primary message and no more than one primary plus one secondary action.

## Hero and purchase flow

- Structure follows OMTech Polar 2 media-left / purchase-right anatomy with xTool P3-like premium whitespace, but retains OneLaser content, assets and branding.
- Start with the H1; no announcement strip or Hero kicker row. Keep the page header as the first chrome.
- The desktop Hero has a 660 × 660 square stage, counter, previous/next controls, 70 × 70 square thumbnails with their own controls, and a separate overview-video slot. All 23 supplied `xrf-hero-01.webp` through `xrf-hero-23.webp` images are square, edge-to-edge, uncropped and unpadded. Main media and thumbnail rails swipe independently on touch.
- Hero arrows are subdued until hover or keyboard focus. The overview slot uses local cover `xrf-overview-video-cover.jpg` and YouTube `F1ZJvoeANgk` through the shared lazy modal.
- Below the gallery, keep side-by-side `Book A Free Call` and `Download Brochure` actions, then a compact 2×2 grid for 30-day returns, 3-2-1 warranty, California fulfillment and US support.
- Purchase order is title/evidence → official price/MSRP → equal-fit 38W/70W selector → package → optional add-ons → quantity/actions. Power cards describe use-case fit and do not repeat prices.
- Prices are red; MSRP is gray; financing links are blue. Use current official 38W pricing, with every equivalent 70W configuration exactly $1,000 higher. Current baselines are Standalone $3,999/$4,999 and Riser Base $4,499/$5,499 unless newer direct or official pricing supersedes them.
- Every accessory is explicitly optional. Frequently-bought-together images fill their crop edge-to-edge.
- Keep `Add to Cart` as the primary Hero/sticky action with restrained prompting motion and a reduced-motion fallback. It must open the official 38W purchase flow. Until an official stable 70W checkout exists, route 70W interest to engineer consultation.
- Show `Buy with SHOP` only while it points to the approved direct Shop Pay URL. Keep `More payment options` on its approved checkout URL. Never simulate an `Added` state.
- Show `30-Day Money-Back · 3-2-1 Warranty · Ships from California` at the decision point. Keep the brochure action in Specifications too.
- The Hero is the only full configurator. Do not add another configurator later in the page.

## Page narrative and navigation

- Current sequence: finished results and Product Opportunities → Materials → RF advantages → equal-fit 38W/70W guide → Gen 2 vs Gen 1 → scroll-linked selling-point chapters → MakerBoost → Software → Specifications → decision paths and Trade-Up → reviews/comparisons → Support → FAQ → footer.
- `#capabilities` answers “What can I make and sell?”; `#capability-system` remains the separate engineering chapter browser.
- The major journey navigator appears below the main header after the initial product view. Selling-point navigation is genuinely scroll-linked: every chapter stays in document flow, the desktop rail floats near the left viewport edge, and mobile uses one horizontal sticky rail below the journey navigation. The rails must never overlap content.
- No separate introduction above selling-point chapters, no internal `P0/P1/P2/P3` labels, no per-story eyebrow, no media counter pills and no `VIDEO STORY · IMAGE PREVIEW` pill on chapter media.
- P0 and video stages are 16:9 with `object-fit: contain`; clickable stages are keyboard accessible and open the shared preview. Desktop sticky copy and media remain vertically aligned in one scene. Reduced motion disables crossfades/settle motion.
- Project-result media stays fixed 4:3. The finished-product carousel uses arrows/dots without a `PROJECT PROOF` overlay.

## Confirmed claims and content safety

- Customer-facing motion data is exactly `1,200 mm/s` and `True 3.5G`; remove older `1,300 mm/s` or `3G` references.
- Supported proof includes closed-loop motion, Hydra-derived all-steel axes, a 20% lighter head, up to 2,000 DPI, ≤0.01 mm positioning, 0.07 mm spot, RF response and up to 30,000 source hours when supported by the workbook.
- Present 38W and 70W as equal-fit choices. The long-form power proof is display-only and never changes Hero configuration, cart or sticky total.
- Generated imagery may fill a workbook-led proof gap only. Use supplied real XRF renders whenever the machine appears, tie each generated image to one claim, and ship WebP.
- Commercial economics are illustrative only: keep figures in one data object, label `ILLUSTRATIVE EXAMPLE`, retain the disclaimer and never imply guaranteed income.
- State Rotary requirements for cylindrical work. Never imply bare metal can be directly deep-engraved by the RF CO₂ source; use powder-coated, anodized, coated or otherwise laser-compatible wording.

## Section-specific canonical rules

- At-a-glance uses the supplied profit/output artwork immediately above the capability collage on one edge-to-edge `#141414` band, intrinsic aspect ratios, zero gap, padding, crop or letterbox.
- Product Opportunities has four horizontal category tabs and three independent image-led cards per category. Each card owns its image; missing media uses the neutral placeholder. One shared compact detail/economics panel follows. Mobile scrolls the selected detail into view after direct card taps.
- Materials is a fixed-stage editorial slideshow with distinct Phosphor icons, red active icon/label/index, one 1 px progress line, six-second autoplay, pause/reset controls, keyboard/swipe support and reduced-motion disablement.
- Why RF and Speed & Motion use the same centered segmented pill: `#E2E2E7` outer surface, white active pill, black text, restrained shadow, no red active border; mobile stays one horizontal non-wrapping row.
- Speed & Motion switches Wood/Acrylic/Slate/Leather only—never 38W/70W—and uses `speed-motion-*.webp`. The two lower motion proofs are compact icon tiles. Metric values cap at 26 px / 800.
- RF advantages use one full-width `#F5F5F7` band and consistent 3:2 media frames. The power guide uses supplied `38W.webp` and `70W.webp`; the Gen 2/Gen 1 table follows immediately with Gen 2 first and pale-red emphasis.
- Smart Workflow starts with `smart-workflow-print-cut.webp`; XFocus, touchscreen and direct control live in its compact proof rail rather than a duplicate story. Lower cards use the supplied full-bed/control-machine assets and approved copy.
- MakerBoost and Software remain separate modules using `Makerboost.webp` and `software-compatibility.webp`, with titles `Out of the box, into creation.` and `Your software. Your way.` Body copy sits 12 px below the title.
- Reliability & Safety uses the approved Smart Air artwork plus three compact supplied safety cards. Desktop/tablet is a compact grid; mobile is image-left/copy-right. Preserve explicit optional framing and do not restore the old large stacked layout.
- Support is one `#F5F5F7` band with three compact white cards: exact 30-day return terms, 3-2-1 warranty and One Support engineer promise. No Support eyebrow/standalone heading or duplicated intermediate subheads.
- Reviews keep creator/customer video proof in one arrow-controlled rail, followed by named owner feedback in a horizontal scroll-snap rail: three cards desktop, two tablet, partial next card mobile. Keep review traffic on-page and omit the Mark Ellis CES 2025 clip.
- xTool P2 comparison uses published numeric facts and the established split-card anatomy. FAQ follows the Specifications heading pattern and must cover outlet requirements, current shipping/processing expectations and the exact $1,000 70W delta. FAQ transitions directly to the footer.

## Video, motion, loading and accessibility

- Load YouTube only after interaction. Default states use local/static 16:9 covers and the shared accessible player with close button, overlay close, Escape close and iframe removal on close.
- A clickable cover is the only play action; no duplicate watch button. Play controls are centered translucent black at 20% opacity with a white glyph, never red.
- Carousels pause on hover/focus/touch, reset after manual navigation, support keyboard arrows and swipe, and disable autoplay under `prefers-reduced-motion`.
- All images use one of seven stable low-saturation placeholders with subtle loading motion, stop after real pixels load, keep a calm error fallback and disable placeholder motion under reduced motion.
- Provide a compact `TOP` control above the sticky purchase bar: hidden near the top, nearly transparent/non-interactive while scrolling down, visible while scrolling up.
- Verify desktop and 390 px mobile for overflow, sticky-rail stacking, touch targets, 12 px text floor, loaded natural image dimensions and console errors.

## Analytics and release gates

- Analytics use environment-provided `VITE_GA4_ID` and `VITE_META_PIXEL_ID`; never fabricate IDs. Track ViewContent, power/package/accessory choices, purchase intent, lead actions and section navigation.
- Mid-funnel exits include official live demo, engineer consultation, email capture for offers/spec/sample and official Trade-Up. Keep them after Specifications and before Reviews; do not duplicate them in Hero purchase controls beyond the approved gallery actions.
- Before delivery run `npm run verify`. If `node` is missing, prepend `/Users/yongyuan/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin` to `PATH`; do not search the machine for another runtime. For UI changes run one focused desktop and one 390 px mobile browser check; wait for images to be complete with real natural dimensions.
- When publication is in scope, commit only target files, push `main`, wait for GitHub Pages, and validate `https://yonge6.github.io/xrf-gen2-listing/?v=<commit>` plus any new asset route. Report local/build, deployment and live proof separately.
