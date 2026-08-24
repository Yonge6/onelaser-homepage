import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CaretLeft,
  CaretRight,
  CheckCircle,
  EnvelopeSimple,
  GraduationCap,
  Headset,
  List,
  MapPin,
  Package,
  Phone,
  ShieldCheck,
  Sparkle,
  Storefront,
  Wrench,
  X,
} from "@phosphor-icons/react";

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;
const XRF_PAGE_URL = `${import.meta.env.BASE_URL}?page=xrf`;

const heroSlides = [
  {
    image: "home-banner-hydra-education.png",
    alt: "OneLaser Hydra Gen2 in a bright STEM classroom with students and an instructor",
    href: "https://www.1laser.com/pages/education",
    label: "Explore OneLaser for Education",
    mobileTitle: "OneLaser for Education",
    mobileCopy: "Classroom-ready tools for hands-on STEM learning.",
  },
  {
    image: "home-banner-xrf-dark.png",
    alt: "OneLaser XRF desktop RF laser on a dramatic red and black stage",
    href: XRF_PAGE_URL,
    label: "Discover OneLaser XRF",
    mobileTitle: "The RF desktop laser, redefined.",
    mobileCopy: "Finer detail. Faster output. Forged solid. Fully backed.",
  },
  {
    image: "home-banner-xrf-maker.png",
    alt: "A small business maker presenting engraved products beside a OneLaser XRF",
    href: XRF_PAGE_URL,
    label: "Shop OneLaser XRF",
    mobileTitle: "Made for makers who mean business.",
    mobileCopy: "Desktop scale. Professional output. Built to keep up.",
  },
];

const workModes = [
  {
    id: "business",
    label: "Small Business",
    icon: Storefront,
    title: "Turn a good idea into a repeatable product.",
    copy: "Build premium personalized goods, launch faster and keep quality consistent from the first order to the hundredth.",
    image: "commercial-product-line.webp",
    link: XRF_PAGE_URL,
    action: "Explore XRF Gen2",
  },
  {
    id: "education",
    label: "Education",
    icon: GraduationCap,
    title: "Make learning tangible.",
    copy: "Bring design, engineering, art and entrepreneurship together with classroom-ready laser workflows and hands-on training.",
    image: "home-banner-hydra-education.png",
    link: "https://www.1laser.com/pages/education",
    action: "Explore Education",
  },
  {
    id: "production",
    label: "Production",
    icon: Wrench,
    title: "Move from one-off work to serious output.",
    copy: "Choose an industrial platform for demanding schedules, larger work and the precise control professional production requires.",
    image: "xrf-workshop-story.webp",
    link: "https://www.1laser.com/collections/x-series",
    action: "Explore Laser Systems",
  },
];

const productCards = [
  {
    id: "xrf",
    category: "DESKTOP RF",
    name: "XRF",
    copy: "All-in-one desktop laser",
    image: "home-product-xrf.png",
    href: XRF_PAGE_URL,
    cta: "Explore XRF",
  },
  {
    id: "vertigo",
    category: "VERTICAL LASER",
    name: "VertiGo",
    copy: "Built around vertical work",
    image: "home-product-vertigo.png",
    href: "https://wiki.1laser.com/en/vertigo/vertigo-series-wiki",
    cta: "Explore VertiGo",
  },
  {
    id: "hydra",
    category: "INDUSTRIAL PLATFORM",
    name: "Hydra Gen2",
    copy: "Production-scale laser system",
    image: "home-product-hydra-gen2.png",
    href: "https://www.1laser.com/collections/hydra-gen-2-rf-laser-engravers-cutters",
    cta: "Explore Hydra",
  },
  {
    id: "cobra",
    category: "WORKSHOP CO₂",
    name: "Cobra",
    copy: "Serious power for the shop",
    image: "home-product-cobra.png",
    href: "https://www.1laser.com/products/cobra-10-100w-co2-laser-engraver-cutter",
    cta: "Explore Cobra",
  },
];

export function HomePage() {
  const [activeHero, setActiveHero] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMode, setActiveMode] = useState(0);
  const touchStart = useRef(null);

  useEffect(() => {
    document.title = "OneLaser — Make Better With One";
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = "Discover OneLaser professional laser systems for makers, small businesses, education and production.";
  }, []);

  useEffect(() => {
    if (heroPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setInterval(() => {
      setActiveHero((current) => (current + 1) % heroSlides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [heroPaused]);

  function moveHero(direction) {
    setActiveHero((current) => (current + direction + heroSlides.length) % heroSlides.length);
  }

  function handleHeroTouchEnd(event) {
    if (touchStart.current == null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(distance) > 45) moveHero(distance > 0 ? -1 : 1);
    touchStart.current = null;
  }

  const selectedMode = workModes[activeMode];

  return (
    <div className="home-shell" id="top">
      <a className="home-skip" href="#home-main">Skip to content</a>
      <div className="home-assurance" aria-label="OneLaser customer assurance">
        <span>30-Day Money-Back</span><i aria-hidden="true" /><span>Ships from California</span><i aria-hidden="true" /><span>One Support</span>
      </div>

      <header className="home-header">
        <a className="home-brand" href={import.meta.env.BASE_URL} aria-label="OneLaser home">
          <img src={asset("onelaser-logo.png")} alt="OneLaser" />
        </a>
        <button className="home-menu-button" type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? <X size={21} weight="bold" /> : <List size={22} weight="bold" />}
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
        </button>
        <nav className={menuOpen ? "home-nav is-open" : "home-nav"} aria-label="Main navigation">
          <a href="#machines" onClick={() => setMenuOpen(false)}>Machines</a>
          <a href="#solutions" onClick={() => setMenuOpen(false)}>Solutions</a>
          <a href="#inspiration" onClick={() => setMenuOpen(false)}>Inspiration</a>
          <a href="https://www.1laser.com/pages/laser-engraving-community" target="_blank" rel="noreferrer">Community</a>
          <a href="https://www.1laser.com/pages/contact-us" target="_blank" rel="noreferrer">Support</a>
        </nav>
        <div className="home-header__actions">
          <a href="tel:+16268004130" aria-label="Call OneLaser"><Phone size={18} weight="bold" /></a>
          <a className="home-header__cta" href="https://www.1laser.com/collections/x-series" target="_blank" rel="noreferrer">Shop</a>
        </div>
      </header>

      <main id="home-main">
        <section
          className="home-hero"
          aria-roledescription="carousel"
          aria-label="Featured OneLaser stories"
          onMouseEnter={() => setHeroPaused(true)}
          onMouseLeave={() => setHeroPaused(false)}
          onFocus={() => setHeroPaused(true)}
          onBlur={() => setHeroPaused(false)}
          onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; setHeroPaused(true); }}
          onTouchEnd={handleHeroTouchEnd}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") moveHero(-1);
            if (event.key === "ArrowRight") moveHero(1);
          }}
          tabIndex={0}
        >
          <div className="home-hero__track" style={{ transform: `translate3d(-${activeHero * 100}%, 0, 0)` }}>
            {heroSlides.map((slide, index) => (
              <article className="home-hero__slide" aria-hidden={activeHero !== index} key={slide.image}>
                <img src={asset(slide.image)} alt={slide.alt} draggable="false" />
                <div className="home-hero__mobile-copy">
                  <h1>{slide.mobileTitle}</h1>
                  <p>{slide.mobileCopy}</p>
                  <span>Learn more <ArrowRight size={16} weight="bold" /></span>
                </div>
                <a className="home-hero__link" href={slide.href} aria-label={slide.label} tabIndex={activeHero === index ? 0 : -1} />
              </article>
            ))}
          </div>
          <button className="home-hero__arrow home-hero__arrow--left" type="button" onClick={() => moveHero(-1)} aria-label="Previous banner"><CaretLeft size={23} weight="bold" /></button>
          <button className="home-hero__arrow home-hero__arrow--right" type="button" onClick={() => moveHero(1)} aria-label="Next banner"><CaretRight size={23} weight="bold" /></button>
          <div className="home-hero__dots" aria-label="Choose banner">
            {heroSlides.map((slide, index) => (
              <button className={index === activeHero ? "is-active" : ""} type="button" onClick={() => setActiveHero(index)} aria-label={`Show banner ${index + 1}`} aria-current={index === activeHero ? "true" : undefined} key={slide.image}><span /></button>
            ))}
          </div>
        </section>

        <section className="home-products" id="machines">
          <header className="home-products__heading">
            <span>ONE SERIES</span>
            <h2>Find your OneLaser.</h2>
            <p>Four product families, designed for different ways of making.</p>
          </header>
          <div className="home-products__grid">
            {productCards.map((product) => (
              <a className={`home-product-card home-product-card--${product.id}`} href={product.href} key={product.name}>
                <div className="home-product-card__media"><img src={asset(product.image)} alt={`${product.name} laser system`} /></div>
                <div className="home-product-card__copy">
                  <span>{product.category}</span>
                  <h3>{product.name}</h3>
                  <p>{product.copy}</p>
                  <strong>{product.cta} <ArrowRight size={15} weight="bold" /></strong>
                </div>
              </a>
            ))}
          </div>
          <a className="home-text-link" href="https://www.1laser.com/collections/laser-engraving-cutting-marking-machines" target="_blank" rel="noreferrer">Compare all laser systems <ArrowUpRight size={15} weight="bold" /></a>
        </section>

        <section className="home-manifesto">
          <span>MAKE BETTER WITH ONE</span>
          <h1>Professional laser systems,<br />built around the way you work.</h1>
          <p>From the first prototype to daily production, OneLaser brings precision, speed and real support into one confident workflow.</p>
          <a href="#solutions">Find your workflow <ArrowRight size={17} weight="bold" /></a>
        </section>

        <section className="home-solutions" id="solutions">
          <div className="home-solutions__inner">
            <header className="home-section-heading home-section-heading--inverse">
              <span>BUILT AROUND YOUR WORK</span>
              <h2>One platform. Different ambitions.</h2>
            </header>
            <div className="home-solutions__tabs" role="tablist" aria-label="Choose how you work">
              {workModes.map((mode, index) => {
                const Icon = mode.icon;
                return <button type="button" role="tab" aria-selected={activeMode === index} className={activeMode === index ? "is-active" : ""} onClick={() => setActiveMode(index)} key={mode.id}><Icon size={21} weight={activeMode === index ? "fill" : "regular"} />{mode.label}</button>;
              })}
            </div>
            <article className="home-solutions__stage" role="tabpanel">
              <div className="home-solutions__media"><img src={asset(selectedMode.image)} alt={selectedMode.title} /></div>
              <div className="home-solutions__copy">
                <span>0{activeMode + 1} / 03</span>
                <h3>{selectedMode.title}</h3>
                <p>{selectedMode.copy}</p>
                <a href={selectedMode.link}>{selectedMode.action} <ArrowRight size={16} weight="bold" /></a>
              </div>
            </article>
          </div>
        </section>

        <section className="home-results" id="inspiration">
          <header className="home-section-heading">
            <span>WHAT WILL YOU MAKE?</span>
            <h2>Ideas look better when they’re real.</h2>
            <p>From personalized gifts to repeatable product lines, precision becomes valuable when it turns into something people want to keep.</p>
          </header>
          <div className="home-results__mosaic">
            <figure className="home-results__item home-results__item--wide"><img src={asset("xrf-profit-products-web.webp")} alt="A collection of finished products made with a OneLaser" /><figcaption><span>One machine. More possibilities.</span><a href={XRF_PAGE_URL}>Explore what XRF can make <ArrowRight size={15} /></a></figcaption></figure>
            <figure className="home-results__item"><img src={asset("commercial-premium-personalization.webp")} alt="Premium personalized goods made with a laser" /><figcaption><span>Personalization</span><small>Make every detail feel considered.</small></figcaption></figure>
            <figure className="home-results__item"><img src={asset("commercial-repeatable-batches.webp")} alt="Repeatable batch production with engraved products" /><figcaption><span>Repeatable output</span><small>Quality that stays consistent.</small></figcaption></figure>
          </div>
        </section>

        <section className="home-trust">
          <div className="home-trust__intro">
            <span>OWNERSHIP, MADE SIMPLE</span>
            <h2>The machine is only half the promise.</h2>
            <p>OneLaser backs professional hardware with practical help before, during and after your first job.</p>
          </div>
          <div className="home-trust__grid">
            <article><Package size={29} /><h3>Ships from California</h3><p>Local fulfillment from our Lake Forest base.</p></article>
            <article><ShieldCheck size={29} /><h3>3-2-1 Warranty</h3><p>Clear, structured coverage for confident ownership.</p></article>
            <article><Headset size={29} /><h3>One Support</h3><p>Talk to real people who know laser systems.</p></article>
            <article><CheckCircle size={29} /><h3>30-Day Money-Back</h3><p>Make the decision with room to be sure.</p></article>
          </div>
        </section>

        <section className="home-concierge">
          <div className="home-concierge__mark"><Sparkle size={30} weight="fill" /></div>
          <span>NOT SURE WHERE TO START?</span>
          <h2>Tell us what you want to make.</h2>
          <p>A OneLaser engineer can help you match the right machine to your materials, space and production goals.</p>
          <div>
            <a className="home-button home-button--primary" href="https://www.1laser.com/products/sales-consultation-call" target="_blank" rel="noreferrer">Book a free call <ArrowUpRight size={16} weight="bold" /></a>
            <a className="home-button home-button--secondary" href="mailto:sales@1laser.com">Email sales</a>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <div className="home-footer__main">
          <div className="home-footer__brand">
            <img src={asset("onelaser-logo-transparent.svg")} alt="OneLaser" />
            <p>Professional laser systems for makers, studios, schools and production teams.</p>
            <div><a href="tel:+16268004130"><Phone size={16} />626-800-4130</a><a href="mailto:sales@1laser.com"><EnvelopeSimple size={16} />sales@1laser.com</a><span><MapPin size={16} />Lake Forest, California</span></div>
          </div>
          <div className="home-footer__links">
            <div><strong>Machines</strong><a href={XRF_PAGE_URL}>XRF Gen2</a><a href="https://www.1laser.com/collections/x-series">Hydra Gen2</a><a href="https://www.1laser.com/collections/x-series">All Machines</a></div>
            <div><strong>Solutions</strong><a href="https://www.1laser.com/pages/education">Education</a><a href="https://www.1laser.com/pages/sales-consultation">Business</a><a href="https://www.1laser.com/pages/trade-up-program">Trade-Up</a></div>
            <div><strong>Support</strong><a href="https://wiki.1laser.com/">OneLaser Wiki</a><a href="https://www.1laser.com/pages/common-faq">FAQ</a><a href="https://www.1laser.com/pages/contact-us">Contact</a></div>
            <div><strong>Follow</strong><a href="https://www.youtube.com/@OneLaser.Official">YouTube</a><a href="https://www.instagram.com/onelaser.official/">Instagram</a><a href="https://www.facebook.com/onelaser.official">Facebook</a></div>
          </div>
        </div>
        <div className="home-footer__bottom"><span>© {new Date().getFullYear()} OneLaser. All rights reserved.</span><a href="#top">Back to top <ArrowUpRight size={13} /></a></div>
      </footer>
    </div>
  );
}
