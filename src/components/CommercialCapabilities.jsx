import { useMemo, useRef, useState } from "react";
import {
  ArrowClockwise,
  CubeFocus,
  ShieldCheck,
  Target,
} from "@phosphor-icons/react";
import {
  economicsAssumptions,
  economicsDisclaimer,
  economicsExamples,
  productCategories,
  products,
  workflowCapabilities,
} from "../data/commercialCapabilities.js";
import "./CommercialCapabilities.css";

const workflowIcons = {
  precision: Target,
  motion: ArrowClockwise,
  workflow: CubeFocus,
  production: ShieldCheck,
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function ProductEconomics({ product, equipmentInvestment }) {
  const economics = economicsExamples[product.economicsId];
  const marginRate = Number.parseInt(economics.margin, 10) / 100;
  const profitPerItem = economics.unitPrice * marginRate;
  const monthlyNetProfit = profitPerItem * economicsAssumptions.monthlySales;
  const annualNetProfit = monthlyNetProfit * 12;
  const paybackMonths = equipmentInvestment / monthlyNetProfit;

  return (
    <aside className="product-economics" aria-live="polite" aria-atomic="true">
      <div key={product.id} className="product-economics__inner">
        <header>
          <div>
            <span>ILLUSTRATIVE EXAMPLE</span>
            <h4>Illustrative return snapshot</h4>
          </div>
        </header>
        <dl className="product-economics__metrics">
          <div className="product-economics__payback">
            <dt>Estimated equipment payback</dt>
            <dd>{paybackMonths.toFixed(1)} <small>months</small></dd>
          </div>
          <div><dt>Profit per item</dt><dd>{currencyFormatter.format(profitPerItem)}</dd></div>
          <div><dt>Monthly net profit</dt><dd>{currencyFormatter.format(monthlyNetProfit)}</dd></div>
          <div><dt>Annual net profit</dt><dd>{currencyFormatter.format(annualNetProfit)}</dd></div>
          <div><dt>Example margin</dt><dd>{economics.margin}</dd></div>
        </dl>
        <p className="product-economics__assumptions">
          Based on {economicsAssumptions.monthlySales} illustrative sales/mo. and a {currencyFormatter.format(equipmentInvestment)} equipment investment.
        </p>
        <dl className="product-economics__details">
          <div><dt>Best suited for</dt><dd>{economics.bestFor}</dd></div>
          <div><dt>Required setup</dt><dd>{economics.requiredSetup}</dd></div>
        </dl>
        <p className="product-economics__disclaimer">{economicsDisclaimer}</p>
      </div>
    </aside>
  );
}

function ProductOpportunities({ asset, equipmentInvestment }) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeProductId, setActiveProductId] = useState(productCategories[0].productIds[0]);
  const categoryTabRefs = useRef([]);
  const productTabRefs = useRef([]);
  const selectionRef = useRef(null);
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

  function selectProduct(productId) {
    setActiveProductId(productId);
    if (typeof window === "undefined" || !window.matchMedia("(max-width: 640px)").matches) return;
    window.requestAnimationFrame(() => {
      selectionRef.current?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "nearest",
      });
    });
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
                  onClick={() => selectProduct(product.id)}
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
            ref={selectionRef}
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
              <p className="product-detail__setup">
                <small>Setup guidance</small>
                <span>{activeProduct.setupNote}</span>
              </p>
            </article>
            <ProductEconomics product={activeProduct} equipmentInvestment={equipmentInvestment} />
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowBridge() {
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
    </div>
  );
}

export function CommercialCapabilities({ asset, equipmentInvestment }) {
  return (
    <section className="commercial-capabilities" id="capabilities" aria-label="XRF Gen2 commercial capabilities">
      <span className="commercial-capabilities__anchor" id="results" aria-hidden="true" />
      <ProductOpportunities asset={asset} equipmentInvestment={equipmentInvestment} />
      <WorkflowBridge />
    </section>
  );
}
