import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowClockwise,
  ArrowUpRight,
  CaretLeft,
  CaretRight,
  CubeFocus,
  ShieldCheck,
  Target,
} from "@phosphor-icons/react";
import {
  capabilitySlides,
  economicsDisclaimer,
  economicsExamples,
  productCategories,
  products,
  workflowCapabilities,
} from "../data/commercialCapabilities.js";
import "./CommercialCapabilities.css";

const AUTOPLAY_DELAY = 6500;

const workflowIcons = {
  precision: Target,
  motion: ArrowClockwise,
  workflow: CubeFocus,
  production: ShieldCheck,
};

function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => (
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  ));

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return prefersReducedMotion;
}

function CommercialHero({ asset }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [timerEpoch, setTimerEpoch] = useState(0);
  const touchStartX = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const slide = capabilitySlides[activeSlide];

  function showSlide(index, { manual = true } = {}) {
    const nextIndex = (index + capabilitySlides.length) % capabilitySlides.length;
    setActiveSlide(nextIndex);
    if (manual) setTimerEpoch((current) => current + 1);
  }

  function stepSlide(direction, options) {
    showSlide(activeSlide + direction, options);
  }

  useEffect(() => {
    if (prefersReducedMotion || isPaused) return undefined;
    const timeout = window.setTimeout(() => {
      setActiveSlide((current) => (current + 1) % capabilitySlides.length);
    }, AUTOPLAY_DELAY);
    return () => window.clearTimeout(timeout);
  }, [activeSlide, isPaused, prefersReducedMotion, timerEpoch]);

  function handleKeyDown(event) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    stepSlide(event.key === "ArrowLeft" ? -1 : 1);
  }

  function handleTouchStart(event) {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
    setIsPaused(true);
  }

  function handleTouchEnd(event) {
    const endX = event.changedTouches[0]?.clientX;
    if (touchStartX.current !== null && endX !== undefined) {
      const distance = endX - touchStartX.current;
      if (Math.abs(distance) > 48) stepSlide(distance > 0 ? -1 : 1);
    }
    touchStartX.current = null;
    setIsPaused(false);
  }

  return (
    <div className="commercial-hero">
      <header className="commercial-hero__header">
        <span className="eyebrow">WHAT WILL YOU MAKE NEXT?</span>
        <h2>Made to sell. Built to repeat.</h2>
        <p>Start with the finished work customers pay for. Then see how RF precision, controlled motion and a repeatable workflow help turn one-off ideas into products you can make again and again.</p>
      </header>

      <div
        className="commercial-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="XRF Gen2 commercial product capabilities"
        tabIndex="0"
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={() => {
          touchStartX.current = null;
          setIsPaused(false);
        }}
      >
        <div className="commercial-carousel__visual">
          <img
            key={slide.id}
            src={asset(slide.image)}
            alt={slide.alt}
            style={{ objectPosition: slide.imagePosition }}
            width="1920"
            height="1080"
            decoding="async"
          />
        </div>
        <article className="commercial-carousel__content" aria-live="polite" aria-atomic="true">
          <div key={slide.id} className="commercial-carousel__copy">
            <span className="eyebrow">{slide.eyebrow}</span>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
            <strong>{slide.meta}</strong>
          </div>
          <div className="commercial-carousel__controls">
            <button type="button" onClick={() => stepSlide(-1)} aria-label="Show previous commercial capability">
              <CaretLeft size={22} aria-hidden="true" />
            </button>
            <div className="commercial-carousel__dots" aria-label="Choose commercial capability slide">
              {capabilitySlides.map((item, index) => (
                <button
                  type="button"
                  key={item.id}
                  className={index === activeSlide ? "is-active" : ""}
                  onClick={() => showSlide(index)}
                  aria-label={`Show slide ${index + 1}: ${item.title}`}
                  aria-current={index === activeSlide ? "true" : undefined}
                />
              ))}
            </div>
            <button type="button" onClick={() => stepSlide(1)} aria-label="Show next commercial capability">
              <CaretRight size={22} aria-hidden="true" />
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}

function ProductEconomics({ product }) {
  const economics = economicsExamples[product.economicsId];

  return (
    <aside className="product-economics" aria-live="polite" aria-atomic="true">
      <div key={product.id} className="product-economics__inner">
        <header>
          <div>
            <span>ILLUSTRATIVE EXAMPLE</span>
            <h4>Example product economics</h4>
          </div>
        </header>
        <dl className="product-economics__metrics">
          <div><dt>Example margin</dt><dd>{economics.margin}</dd></div>
          <div><dt>Potential hourly output</dt><dd>{economics.hourlyOutput}</dd></div>
        </dl>
        <dl className="product-economics__details">
          <div><dt>Best suited for</dt><dd>{economics.bestFor}</dd></div>
          <div><dt>Required setup</dt><dd>{economics.requiredSetup}</dd></div>
        </dl>
        <p className="product-economics__disclaimer">{economicsDisclaimer}</p>
      </div>
    </aside>
  );
}

function ProductOpportunities({ asset }) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeProductId, setActiveProductId] = useState(productCategories[0].productIds[0]);
  const categoryTabRefs = useRef([]);
  const productTabRefs = useRef([]);
  const activeCategory = productCategories[activeCategoryIndex];
  const categoryProducts = useMemo(
    () => activeCategory.productIds.map((productId) => products[productId]),
    [activeCategory],
  );
  const activeProduct = products[activeProductId] ?? categoryProducts[0];

  function selectCategory(index) {
    const nextIndex = (index + productCategories.length) % productCategories.length;
    setActiveCategoryIndex(nextIndex);
    setActiveProductId(productCategories[nextIndex].productIds[0]);
  }

  function handleCategoryKeyDown(event, index) {
    const navigationKeys = ["ArrowLeft", "ArrowRight", "Home", "End"];
    if (!navigationKeys.includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === "Home"
      ? 0
      : event.key === "End"
        ? productCategories.length - 1
        : event.key === "ArrowLeft"
          ? (index - 1 + productCategories.length) % productCategories.length
          : (index + 1) % productCategories.length;
    selectCategory(nextIndex);
    categoryTabRefs.current[nextIndex]?.focus();
  }

  function handleProductKeyDown(event, index) {
    const navigationKeys = ["ArrowLeft", "ArrowRight", "Home", "End"];
    if (!navigationKeys.includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === "Home"
      ? 0
      : event.key === "End"
        ? categoryProducts.length - 1
        : event.key === "ArrowLeft"
          ? (index - 1 + categoryProducts.length) % categoryProducts.length
          : (index + 1) % categoryProducts.length;
    setActiveProductId(categoryProducts[nextIndex].id);
    productTabRefs.current[nextIndex]?.focus();
  }

  return (
    <section id="product-opportunities" className="product-opportunities" aria-labelledby="product-opportunities-title">
      <div className="product-opportunities__inner">
        <header className="product-opportunities__header">
          <span className="eyebrow">PRODUCT OPPORTUNITIES</span>
          <h2 id="product-opportunities-title">What could you sell with XRF Gen2?</h2>
          <p>Explore product categories designed for one-offs, repeat orders and small-batch production.</p>
        </header>

        <div className="product-opportunities__tabs" role="tablist" aria-label="Explore product opportunity categories">
          {productCategories.map((category, index) => (
            <button
              type="button"
              role="tab"
              id={`opportunity-tab-${category.id}`}
              aria-controls={`opportunity-panel-${category.id}`}
              aria-selected={index === activeCategoryIndex}
              tabIndex={index === activeCategoryIndex ? 0 : -1}
              className={index === activeCategoryIndex ? "is-active" : ""}
              key={category.id}
              ref={(node) => { categoryTabRefs.current[index] = node; }}
              onClick={() => selectCategory(index)}
              onKeyDown={(event) => handleCategoryKeyDown(event, index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{category.label}</strong>
            </button>
          ))}
        </div>

        <div
          className="product-opportunities__panel"
          id={`opportunity-panel-${activeCategory.id}`}
          role="tabpanel"
          aria-labelledby={`opportunity-tab-${activeCategory.id}`}
        >
          <header className="product-opportunities__category-copy">
            <p>{activeCategory.description}</p>
          </header>

          <div className="product-card-grid" role="tablist" aria-label={`${activeCategory.label} products`}>
            {categoryProducts.map((product, index) => {
              const economics = economicsExamples[product.economicsId];
              const isActive = product.id === activeProduct.id;

              return (
                <button
                  type="button"
                  role="tab"
                  id={`product-tab-${product.id}`}
                  aria-controls={`product-panel-${activeCategory.id}`}
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  className={isActive ? "product-card is-active" : "product-card"}
                  onClick={() => setActiveProductId(product.id)}
                  onKeyDown={(event) => handleProductKeyDown(event, index)}
                  key={product.id}
                  ref={(node) => { productTabRefs.current[index] = node; }}
                  data-product-id={product.id}
                >
                  <span className="product-card__media">
                    <img
                      src={asset(product.image)}
                      alt={product.imageAlt}
                      width="1200"
                      height="900"
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  <span className="product-card__body">
                    <small>{String(index + 1).padStart(2, "0")}</small>
                    <strong>{product.name}</strong>
                    <span>Example {economics.sellingPrice}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div
            className="product-opportunities__selection"
            id={`product-panel-${activeCategory.id}`}
            role="tabpanel"
            aria-labelledby={`product-tab-${activeProduct.id}`}
            aria-live="polite"
          >
            <article
              className="product-detail"
              key={activeProduct.id}
            >
              <div className="product-detail__facts">
                <span><small>Material</small><strong>{activeProduct.material}</strong></span>
                <span><small>Process</small><strong>{activeProduct.process}</strong></span>
                <span>
                  <small>Example selling price</small>
                  <strong className="product-detail__price">{economicsExamples[activeProduct.economicsId].sellingPrice}</strong>
                </span>
              </div>
              <div className="product-detail__tags">
                {activeProduct.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <p className="product-detail__summary">{activeProduct.description}</p>
              <p>{activeProduct.setupNote}</p>
            </article>
            <ProductEconomics product={activeProduct} />
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowBridge() {
  const prefersReducedMotion = useReducedMotion();

  function handleAnchorClick(event, targetId) {
    const target = document.getElementById(targetId);
    if (!target) return;
    event.preventDefault();
    const top = window.scrollY + target.getBoundingClientRect().top - 88;
    window.history.replaceState(null, "", `#${targetId}`);
    window.scrollTo({ top, behavior: prefersReducedMotion ? "auto" : "smooth" });
  }

  return (
    <div className="workflow-bridge">
      <section className="workflow-bridge__proof" aria-labelledby="workflow-bridge-title">
        <header>
          <span className="eyebrow">FROM PRODUCT TO PROCESS</span>
          <h2 id="workflow-bridge-title">The workflow behind repeatable results.</h2>
          <p>Four connected capabilities help turn a finished sample into work you can produce again with confidence.</p>
        </header>
        <div className="workflow-bridge__grid">
          {workflowCapabilities.map((capability) => {
            const Icon = workflowIcons[capability.icon];
            return (
              <article key={capability.id}>
                <Icon size={25} weight="regular" aria-hidden="true" />
                <h3>{capability.label}</h3>
                <p>{capability.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="commercial-cta" aria-labelledby="commercial-cta-title">
        <div>
          <span className="eyebrow">BUILD YOUR NEXT PRODUCT LINE</span>
          <h2 id="commercial-cta-title">Ready to build your next product line?</h2>
          <p>Explore the XRF Gen2 platform, compare configurations and choose the setup that fits the work you want to make.</p>
        </div>
        <div className="commercial-cta__actions">
          <a href="#purchase-options" onClick={(event) => handleAnchorClick(event, "purchase-options")}>
            Explore XRF Gen2 <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a href="#power-guide" onClick={(event) => handleAnchorClick(event, "power-guide")}>
            Compare configurations
          </a>
        </div>
      </section>
    </div>
  );
}

export function CommercialCapabilities({ asset }) {
  return (
    <section className="commercial-capabilities" id="capabilities" aria-label="XRF Gen2 commercial capabilities">
      <span className="commercial-capabilities__anchor" id="results" aria-hidden="true" />
      <CommercialHero asset={asset} />
      <ProductOpportunities asset={asset} />
      <WorkflowBridge />
    </section>
  );
}
