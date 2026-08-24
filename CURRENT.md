# OneLaser Homepage + XRF Gen2 Current State

Updated: 2026-08-24 (Asia/Shanghai)

## Start here

This is the sole routine continuation handoff. Work directly in `/Users/yongyuan/Documents/XRF Gen2 网页`; do not create a worktree. Preserve all untracked `qa/*.png`. Use focused inspection only and never replay old task logs or read the archived decision file in full.

## Routes

- Repository: `Yonge6/xrf-gen2-listing`, branch `main`.
- OneLaser homepage: `https://yonge6.github.io/xrf-gen2-listing/`.
- XRF Gen2 commercial detail: `https://yonge6.github.io/xrf-gen2-listing/?page=xrf`.

## Current homepage state

- Global header, 600 px desktop hero carousel and three supplied 3840 × 1200 campaign banners.
- Four product families directly below the banner: XRF, VertiGo, Hydra Gen2 and Cobra, using the supplied transparent machine renders.
- Brand manifesto, workflow tabs, finished-product inspiration, ownership assurance, engineer consultation and footer.
- Desktop uses four product columns; 390 px mobile uses two columns and a mobile-specific hero crop/copy treatment.
- Carousel, mobile menu, workflow tabs and homepage-to-XRF route are functional and keyboard labeled.

## Validation state

- `npm run verify` passes.
- Desktop hero is exactly 600 px high.
- 390 × 844 has zero document overflow, 12 px minimum visible text and loaded product images with real natural dimensions.
- Browser console warnings/errors are empty.
- `design-qa.md` records a passed visual comparison and responsive QA.

## Working-tree contract

- Existing `qa/*.png` files are user-owned evidence. Never stage, rename, overwrite or delete them.
- Temporary visual evidence stays in ignored `references/incoming/`; production assets live in `public/assets/`.
- Run `./scripts/compact-status.sh`, then `npm run verify` after scoped changes.
- For publication, commit only target files, push `main`, wait for GitHub Pages and validate a cache-busted homepage plus `?page=xrf`.
