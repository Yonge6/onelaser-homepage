# Product Opportunities + Materials Carousel

## Goal

Make the commercial opportunity section easier to understand within one desktop viewport and turn the materials gallery into a self-running editorial slideshow without changing the page’s established OneLaser visual system.

## Product Opportunities

Keep the existing category tabs and large product photography. Replace the three vertically stacked full-detail product cards with a compact three-item product selector. Selecting a product updates one shared detail panel and the existing illustrative economics panel. This keeps material, process, tags, setup requirements, economics figures and the full disclaimer visible without extending the right column beyond the scene image.

Desktop keeps a media-left / information-right split. Mobile keeps the required order: category tabs, scene image, category copy, horizontally scrollable product selector, selected product details and economics.

## Materials

Reuse the existing material data, images and tabs. Advance to the next material every six seconds. Pause while hovered, focused or touched; restart the timer after manual tab selection. Support Arrow Left, Arrow Right, Home and End on the tabs, plus horizontal swipe on the gallery. Disable autoplay under `prefers-reduced-motion`.

A four-pixel red progress rail sits directly below the material tabs. It resets for every automatic or manual slide change and pauses with the carousel.

## Verification

Check desktop at 1586 × 1178 and mobile at 390 × 844. Confirm the economics panel is visible within the active product scene, category and product controls remain keyboard operable, the material timer advances and resets, touch swipe works, reduced motion disables autoplay, no horizontal page overflow appears, and the production build completes.
