# XRF Gen2 Current State

Updated: 2026-08-03 (Asia/Shanghai)

## Start here

This file is the sole routine continuation handoff. Work directly in `/Users/yongyuan/Documents/XRF Gen2 网页` using the saved local project; do not create a worktree. Read `AGENTS.md`, then inspect only files needed for the current request. Never replay old Codex sessions or read the archived decision file in full.

## Live baseline

- Repository: `Yonge6/xrf-gen2-listing`
- Branch: `main`
- Last verified UI commit: `86e66b2`
- Production: `https://yonge6.github.io/xrf-gen2-listing/?v=86e66b2`
- Pages workflow: `30795510267` succeeded.

## Current product state

- Full commercial page, Hero purchase flow, 23-image gallery and official overview video are live.
- Hero consultation/brochure actions, 2×2 assurance grid, payment exits and Specs brochure action are live.
- Desktop and 390×844 mobile checks passed with no horizontal overflow, no text below 12 px, loaded 23rd image and no console warnings/errors.
- No known incomplete UI request remains at this checkpoint.

## Working-tree contract

- Existing `qa/*.png` files are user-owned untracked evidence. Preserve them and never print, stage or delete them by default.
- Use `./scripts/compact-status.sh` for orientation.
- Use focused `rg`, `git diff --stat` and `git diff --check`; avoid full logs, whole-file dumps and broad screenshots.
- Temporary reference images go in ignored `references/incoming/`; approved production assets go in `public/assets/`.

## Completion loop

1. Inspect the target module and exact user feedback.
2. Make one scoped patch.
3. Run `npm run verify` once.
4. For UI changes, check one desktop viewport and one 390 px mobile viewport.
5. If publication is requested, commit target files, push `main`, wait for Pages and verify the cache-busted live URL and new asset routes.

Replace stale state instead of appending a diary. Keep this file under 2 KB.
