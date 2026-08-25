import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CaretLeft,
  CaretRight,
  EnvelopeSimple,
  List,
  MagnifyingGlass,
  MapPin,
  Phone,
  Play,
  ShoppingBag,
  UserCircle,
  X,
} from "@phosphor-icons/react";

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;
const XRF_PAGE_URL = `${import.meta.env.BASE_URL}?page=xrf`;

const heroSlides = [
  {
    image: "home-banner-xrf-dark.png",
    alt: "OneLaser XRF desktop RF laser on a dramatic red and black stage",
    href: XRF_PAGE_URL,
    label: "Discover OneLaser XRF",
    mobileTitle: "The all-in-one RF desktop laser.",
    mobileCopy: "Finer detail. Faster output. Forged solid. Fully backed.",
  },
  {
    image: "home-banner-hydra-education.png",
    alt: "OneLaser Hydra Gen2 in a bright STEM classroom with students and an instructor",
    href: "https://www.1laser.com/pages/education",
    label: "Explore OneLaser for Education",
    mobileTitle: "OneLaser for Education.",
    mobileCopy: "Classroom-ready tools for hands-on STEM learning.",
  },
  {
    image: "home-banner-xrf-maker.png",
    alt: "A small business maker presenting engraved products beside a OneLaser XRF",
    href: XRF_PAGE_URL,
    label: "Shop OneLaser XRF",
    mobileTitle: "Made for makers who mean business.",
    mobileCopy: "Desktop footprint. Professional output. Built to keep up.",
  },
];

const productCards = [
  {
    id: "cobra",
    name: "Cobra™ Series",
    label: "Workshop Essential",
    copy: "Performance CO₂+IR Dual-Laser System",
    features: ["Up to 130W Glass+3/5W IR", "Master 300+ Materials", "1200mm/s Speed", "1,000 DPI Max Resolution"],
    image: "home-product-cobra.png",
    href: "https://www.1laser.com/products/cobra-10-100w-co2-laser-engraver-cutter",
  },
  {
    id: "xrf",
    name: "XRF™",
    label: "Performance Desktop Laser",
    copy: "World’s Best-Performing RF Desktop Laser",
    features: ["38W RF Power", "1200mm/s Speed", "3G Acceleration", "Conveyor Feeder Available"],
    image: "home-product-xrf.png",
    href: XRF_PAGE_URL,
  },
  {
    id: "hydra",
    name: "Hydra™ Gen2",
    label: "Industrial Laser System",
    copy: "RF Laser Beast: Brutal Speed Meets Insane Detail.",
    features: ["Ultra-Fast 2000mm/s", "4G Acceleration", "Up to 150W Glass/70W RF Power", "Smart Dual Air-Assist"],
    image: "home-product-hydra-gen2.png",
    href: "https://www.1laser.com/products/hydra-9-gen-2-70w-rf-co2-dual-laser-machine",
  },
  {
    id: "vertigo",
    name: "VertiGo™",
    label: "Performance Rotary Laser",
    copy: "World’s First Vertical Laser — Tumblers & Cups Engraved Like Never Before",
    features: ["Cylindrical Engraving", "38W RF Power", "Built with an Integrated PiBurn Grip", "Smart Autofocus"],
    image: "home-product-vertigo.png",
    href: "https://www.1laser.com/products/vertigo-vertical-laser-engraver",
  },
];

const whyAdvantages = [
  {
    number: "01",
    title: "Long-Life RF Precision.",
    benefit: "Sharper Details, Less Downtime, Better Long-Term ROI.",
    proof: ["Sealed Metal RF Tube", "Stable Beam", "20,000–50,000-Hour Lifespan"],
    image: "home-why-rf-core.jpg",
    alt: "Exploded view of OneLaser RF laser engineering",
  },
  {
    number: "02",
    title: "Print & Cut with Full Vision Intelligence.",
    benefit: "Every Cut Lands Exactly Where It Should.",
    proof: ["Camera-Guided Alignment", "Auto Edge & Mark Detection"],
    image: "smart-workflow-print-cut.webp",
    alt: "OneLaser camera-guided print and cut workflow",
  },
  {
    number: "03",
    title: "Unmatched Speed.",
    benefit: "Finish 3× More Orders Per Day.",
    proof: ["Up to 2,000 mm/s", "True 4G Acceleration"],
    image: "speed-motion-wood.webp",
    alt: "OneLaser XRF Gen2 speed comparison on a detailed wood engraving",
  },
];

const projectShowcase = [
  { image: "product-walnut-serving-board.webp", title: "Personalized Serving Board", material: "Wood" },
  { image: "product-photo-wall-panel.webp", title: "Family Photo Panel", material: "Wood" },
  { image: "product-wine-bottle.webp", title: "Adventure Bottle", material: "Coated Metal" },
  { image: "product-custom-tumbler.webp", title: "Custom Tumbler", material: "Coated Metal" },
  { image: "product-acrylic-counter-sign.webp", title: "Counter Sign", material: "Acrylic" },
  { image: "product-rocks-glass.webp", title: "Whiskey Glass Set", material: "Glass" },
  { image: "product-leather-patch-cap.webp", title: "Leather Patch Cap", material: "Leather" },
  { image: "product-engraved-jewelry-box.webp", title: "Keepsake Jewelry Box", material: "Wood" },
  { image: "product-leather-wallet.webp", title: "Monogram Wallet", material: "Leather" },
  { image: "product-outdoor-estate-sign.webp", title: "Outdoor Estate Sign", material: "Wood" },
  { image: "product-coated-metal-tags.webp", title: "Branded Metal Tags", material: "Coated Metal" },
  { image: "product-custom-keychains.webp", title: "Custom Keychains", material: "Acrylic" },
  { image: "product-house-number-sign.webp", title: "Modern House Number", material: "Wood" },
  { image: "power-38w-result.webp", title: "Portrait & Botanical Collection", material: "Wood, Acrylic & Leather" },
  { image: "power-70w-result.webp", title: "Wildlife Art Collection", material: "Wood, Acrylic & Metal" },
  { image: "material-wood.webp", title: "Wood Maker Collection", material: "Wood" },
  { image: "material-acrylic.webp", title: "Acrylic Design Collection", material: "Acrylic" },
  { image: "material-glass-stone.webp", title: "Glass & Stone Collection", material: "Glass & Stone" },
  { image: "material-leather.webp", title: "Personalized Leather Goods", material: "Leather" },
];

const videos = [
  {
    id: "_dv0xXmHSiA",
    title: "Engineered in the USA",
    copy: "What makes OneLaser different.",
    image: "home-video-engineered-usa.jpg",
    featured: true,
  },
  {
    id: "tSroh4OUkX4",
    title: "Inside OneLaser’s Production Facility",
    copy: "A look at how OneLaser machines are built.",
    image: "home-video-production-facility.jpg",
  },
  {
    id: "87PrP4Vigzo",
    title: "OneLaser XRF Full Overview",
    copy: "Features, performance, and real-world results.",
    image: "home-video-xrf-overview.jpg",
  },
  {
    id: "RxgWwJg5kAk",
    title: "Behind The Maker Ep.001",
    copy: "Stories from the makers who inspire us.",
    image: "home-video-behind-maker.jpg",
  },
];

export function HomePage() {
  const [activeHero, setActiveHero] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);
  const [heroCycle, setHeroCycle] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const touchStart = useRef(null);
  const showcaseRailRef = useRef(null);
  const videoRailRef = useRef(null);

  useEffect(() => {
    document.title = "OneLaser — Make More";
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.content = "Discover OneLaser professional laser systems for makers, businesses, education, and production.";
    }
  }, []);

  useEffect(() => {
    if (heroPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setInterval(() => {
      setActiveHero((current) => (current + 1) % heroSlides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [heroCycle, heroPaused]);

  useEffect(() => {
    if (!activeVideo && !activeProject) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setActiveVideo(null);
        setActiveProject(null);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeProject, activeVideo]);

  function moveHero(direction) {
    setActiveHero((current) => (current + direction + heroSlides.length) % heroSlides.length);
    setHeroCycle((current) => current + 1);
  }

  function chooseHero(index) {
    setActiveHero(index);
    setHeroCycle((current) => current + 1);
  }

  function handleHeroTouchEnd(event) {
    if (touchStart.current == null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(distance) > 45) moveHero(distance > 0 ? -1 : 1);
    touchStart.current = null;
  }

  function scrollVideos(direction) {
    videoRailRef.current?.scrollBy({ left: direction * 460, behavior: "smooth" });
  }

  function scrollShowcase(direction) {
    showcaseRailRef.current?.scrollBy({ left: direction * 520, behavior: "smooth" });
  }

  function moveProject(direction) {
    setActiveProject((current) => {
      const index = projectShowcase.findIndex((project) => project.image === current?.image);
      return projectShowcase[(index + direction + projectShowcase.length) % projectShowcase.length];
    });
  }

  return (
    <div className="home-shell" id="top">
      <a className="home-skip" href="#home-main">Skip to content</a>

      <div className="home-announcement" aria-label="OneLaser offers and service updates">
        <a href="https://www.1laser.com/pages/onelaser-rewards" target="_blank" rel="noreferrer">Subscribe &amp; Get $50 OFF Your First Purchase!</a>
        <a href="https://www.1laser.com/pages/financing" target="_blank" rel="noreferrer">$0 Down Financing for Small Businesses</a>
        <a href="https://www.1laser.com/pages/refund-policy" target="_blank" rel="noreferrer">30-Day Easy Returns</a>
      </div>
      <header className="home-header">
        <a className="home-brand" href={import.meta.env.BASE_URL} aria-label="OneLaser home">
          <img src={asset("onelaser-logo.png")} alt="OneLaser" />
        </a>
        <button
          className="home-menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="home-navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={21} weight="bold" /> : <List size={22} weight="bold" />}
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
        </button>
        <nav id="home-navigation" className={menuOpen ? "home-nav is-open" : "home-nav"} aria-label="Main navigation">
          <a href="https://www.1laser.com/collections/laser-engraving-cutting-marking-machines" target="_blank" rel="noreferrer">Laser Machines</a>
          <a href="https://www.1laser.com/collections/laser-accessories" target="_blank" rel="noreferrer">Accessories</a>
          <a href="https://www.1laser.com/collections/limited-offers" target="_blank" rel="noreferrer">Clearance</a>
          <a href="https://www.1laser.com/pages/sales-consultation" target="_blank" rel="noreferrer">Support</a>
          <a href="https://www.1laser.com/pages/laser-engraving-community" target="_blank" rel="noreferrer">Community</a>
          <a href="https://www.1laser.com/pages/contact-us" target="_blank" rel="noreferrer">Contact</a>
        </nav>
        <div className="home-header__actions" aria-label="OneLaser account and shopping">
          <a href="https://www.1laser.com/search" target="_blank" rel="noreferrer" aria-label="Search OneLaser"><MagnifyingGlass size={20} /></a>
          <a href="https://www.1laser.com/cart" target="_blank" rel="noreferrer" aria-label="View cart"><ShoppingBag size={20} /></a>
          <a href="https://www.1laser.com/account/login" target="_blank" rel="noreferrer" aria-label="Log in"><UserCircle size={21} /></a>
        </div>
      </header>

      <main id="home-main">
        <section
          className={heroPaused ? "home-hero is-paused" : "home-hero"}
          aria-roledescription="carousel"
          aria-label="Featured OneLaser stories"
          onMouseEnter={() => setHeroPaused(true)}
          onMouseLeave={() => setHeroPaused(false)}
          onFocus={() => setHeroPaused(true)}
          onBlur={() => setHeroPaused(false)}
          onTouchStart={(event) => {
            touchStart.current = event.touches[0].clientX;
            setHeroPaused(true);
          }}
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
                  <span>Learn more <ArrowRight size={15} weight="bold" /></span>
                </div>
                <a className="home-hero__link" href={slide.href} aria-label={slide.label} tabIndex={activeHero === index ? 0 : -1} />
              </article>
            ))}
          </div>
          <button className="home-hero__arrow home-hero__arrow--left" type="button" onClick={() => moveHero(-1)} aria-label="Previous banner"><CaretLeft size={22} weight="bold" /></button>
          <button className="home-hero__arrow home-hero__arrow--right" type="button" onClick={() => moveHero(1)} aria-label="Next banner"><CaretRight size={22} weight="bold" /></button>
          <div className="home-hero__dots" aria-label="Choose banner">
            {heroSlides.map((slide, index) => (
              <button
                className={index === activeHero ? "is-active" : ""}
                type="button"
                onClick={() => chooseHero(index)}
                aria-label={`Show banner ${index + 1}`}
                aria-current={index === activeHero ? "true" : undefined}
                key={slide.image}
              ><span /></button>
            ))}
          </div>
        </section>

        <section className="home-products" id="machines" aria-labelledby="home-products-title">
          <header className="home-products__header">
            <h2 id="home-products-title">Engrave the Future</h2>
            <p>Browse our high-performance machines engineered for elite creators</p>
          </header>
          <div className="home-products__grid">
            {productCards.map((product) => (
              <a className={`home-product-card home-product-card--${product.id}`} href={product.href} key={product.name}>
                <div className="home-product-card__copy">
                  <span className="home-product-card__eyebrow">{product.label}</span>
                  <h2>{product.name}</h2>
                  <p>{product.copy}</p>
                  <div className="home-product-card__features">
                    {product.features.map((feature) => <span key={feature}>{feature}</span>)}
                  </div>
                </div>
                <div className="home-product-card__media">
                  <img src={asset(product.image)} alt={`${product.name} laser system`} />
                </div>
                <strong className="home-product-card__cta">Explore {product.name.replace("™ Series", "").replace("™", "")} <ArrowUpRight size={16} weight="bold" /></strong>
              </a>
            ))}
          </div>
        </section>

        <section className="home-why" id="why-onelaser" aria-labelledby="why-onelaser-title">
          <div className="home-why__inner">
            <header className="home-why__header">
              <span>WHY ONELASER</span>
              <h2 id="why-onelaser-title">OneLaser means high performance, reinvented.</h2>
              <p>Buy Once. Run Longer. Make More.</p>
            </header>
            <div className="home-why__grid">
              {whyAdvantages.map((advantage) => (
                <article className="home-why-card" key={advantage.number}>
                  <div className="home-why-card__media"><img src={asset(advantage.image)} alt={advantage.alt} /></div>
                  <div className="home-why-card__copy">
                    <span>{advantage.number}</span>
                    <h3>{advantage.title}</h3>
                    <p>{advantage.benefit}</p>
                    <div className="home-why-card__proof" aria-label={`${advantage.title} proof points`}>
                      {advantage.proof.map((item) => <strong key={item}>{item}</strong>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-showcase" id="inspiration" aria-labelledby="home-showcase-title">
          <header className="home-showcase__header">
            <div className="home-showcase__heading">
              <span>ENDLESS POSSIBILITIES</span>
              <h2 id="home-showcase-title">One Machine. Endless Possibilities.</h2>
              <p>Your work is only as good as your laser. That’s why the best work runs on OneLaser.</p>
            </div>
            <div className="home-showcase__controls" aria-label="Browse finished OneLaser projects">
              <button type="button" onClick={() => scrollShowcase(-1)} aria-label="Show previous finished projects"><CaretLeft size={22} /></button>
              <button type="button" onClick={() => scrollShowcase(1)} aria-label="Show more finished projects"><CaretRight size={22} /></button>
            </div>
          </header>
          <div className="home-showcase__grid" ref={showcaseRailRef} aria-label="Finished projects made with OneLaser">
            {projectShowcase.map((project) => (
              <button type="button" className="home-showcase-card" onClick={() => setActiveProject(project)} aria-label={`Enlarge ${project.title}`} key={project.image}>
                <img src={asset(project.image)} alt={project.title} />
                <span className="home-showcase-card__shade" />
                <span className="home-showcase-card__copy"><small>{project.material}</small><strong>{project.title}</strong></span>
              </button>
            ))}
          </div>
        </section>

        <section className="home-videos" id="videos">
          <header className="home-videos__header">
            <div className="home-section-heading">
              <h2>At OneLaser, Performance Drives Innovation</h2>
              <p>Our promise is clear: deliver innovative products built with integrity, empower users with lasting support, and strengthen our community through shared growth. These values guide everything we do and define the future we are creating together.</p>
              <strong>Designed and Engineered in the USA.</strong>
              <a href="https://www.1laser.com/pages/our-story" target="_blank" rel="noreferrer">Read Our Story <ArrowUpRight size={17} weight="bold" /></a>
            </div>
            <div className="home-videos__controls" aria-label="Browse OneLaser videos">
              <button type="button" onClick={() => scrollVideos(-1)} aria-label="Show previous OneLaser video"><CaretLeft size={22} /></button>
              <button type="button" onClick={() => scrollVideos(1)} aria-label="Show more OneLaser videos"><CaretRight size={22} /></button>
            </div>
          </header>
          <div className="home-videos__rail" ref={videoRailRef} aria-label="OneLaser videos">
            {videos.map((video) => (
              <article className="home-video-card" key={video.id}>
                <button className="home-video-card__cover" type="button" onClick={() => setActiveVideo(video)} aria-label={`Play ${video.title}`}>
                  <img src={asset(video.image)} alt="" />
                  <span className="home-video-card__play"><Play size={24} weight="fill" /></span>
                </button>
                <h3>{video.title}</h3>
                <p>{video.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-industries" id="industries" aria-label="OneLaser solutions">
          <a className="home-industry home-industry--makers" href="https://www.1laser.com/pages/laser-engraving-community" target="_blank" rel="noreferrer">
            <img src={asset("home-banner-xrf-maker.png")} alt="A maker holding a finished wood project beside a OneLaser" />
            <span className="home-industry__shade" />
            <div><h2>For Makers & Creators</h2><p>From your first project to your next big idea, OneLaser is with you every step of the way.</p><strong>Explore for Makers <ArrowRight size={15} /></strong></div>
          </a>
          <a className="home-industry home-industry--business" href="https://www.1laser.com/products/sales-consultation-call" target="_blank" rel="noreferrer">
            <img src={asset("xrf-workshop-story.webp")} alt="A professional business owner working with a OneLaser system" />
            <span className="home-industry__shade" />
            <div><h2>For Business</h2><p>Increase throughput, broaden your catalog, and build repeatable production.</p><strong>Explore for Business <ArrowRight size={15} /></strong></div>
          </a>
          <a className="home-industry home-industry--education" href="https://www.1laser.com/pages/education" target="_blank" rel="noreferrer">
            <img src={asset("home-banner-hydra-education.png")} alt="Students learning with OneLaser in a classroom" />
            <span className="home-industry__shade" />
            <div><h2>For Education</h2><p>Bring hands-on STEM learning into classrooms, labs, and maker spaces.</p><strong>Explore Education <ArrowRight size={15} /></strong></div>
          </a>
        </section>

        <section className="home-brand-pillars" id="support" aria-labelledby="brand-pillars-title">
          <header>
            <span>THE ONELASER STANDARD</span>
            <h2 id="brand-pillars-title">Built around your success.</h2>
          </header>
          <div className="home-brand-pillars__grid">
            <article>
              <span>01</span>
              <h3>U.S. Machine Company</h3>
              <p>A machine partner built for the U.S. market, with accountable delivery, local support, spare parts, users, community, and service you can rely on.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Innovation-Driven Performance</h3>
              <p>We turn innovation into real productivity: faster workflows, steadier output, and less manual work.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Outcome Guarantee</h3>
              <p>We stand behind the results you need, from setup and first successful jobs to reliable, measurable production over time.</p>
            </article>
          </div>
        </section>

      </main>

      <footer className="home-footer">
        <div className="home-footer__lead">
          <section>
            <h2>Talk to a Rep</h2>
            <p>Have questions or need help?</p>
            <a href="https://www.1laser.com/products/sales-consultation-call" target="_blank" rel="noreferrer">Book A Free Call</a>
          </section>
          <section>
            <h2>Unlock Exclusive Updates &amp; Savings!</h2>
            <p>Receive tips, promotions, and project inspiration.</p>
            <form action="https://www.1laser.com/contact#ContactFooter" method="post" target="_blank">
              <input type="hidden" name="form_type" value="customer" />
              <input type="hidden" name="utf8" value="✓" />
              <label className="sr-only" htmlFor="home-footer-email">Email address</label>
              <input id="home-footer-email" name="contact[email]" type="email" autoComplete="email" placeholder="Email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </section>
        </div>
        <div className="home-footer__main">
          <div className="home-footer__links">
            <div><strong>Community</strong><a href="https://www.1laser.com/pages/onelaser-rewards">Purchase Rewards</a><a href="https://af.uppromote.com/OneLaser/register">Become Affiliate</a><a href="https://www.1laser.com/pages/laser-engraving-community">Join Community</a><a href="https://www.1laser.com/pages/testimonials">Testimonials</a><a href="https://www.1laser.com/pages/demoroom">Demo Room</a></div>
            <div><strong>Machines</strong><a href="https://www.1laser.com/collections/laser-engraving-cutting-marking-machines">OneLaser Machines</a><a href="https://www.1laser.com/collections/x-series">X Series</a><a href="https://www.1laser.com/collections/cobra-series">Cobra Series</a><a href="https://www.1laser.com/collections/hydra-gen-2-rf-laser-engravers-cutters">Hydra Gen2 Series</a><a href="https://www.1laser.com/collections/hydra-series">Hydra Series</a><a href="https://www.1laser.com/products/vertigo-vertical-laser-engraver">VertiGo</a><a href="https://www.1laser.com/collections/laser-accessories">Laser Accessories</a></div>
            <div><strong>Support</strong><a href="https://www.1laser.com/pages/about-us">About Us</a><a href="https://www.1laser.com/pages/contact-us">Contact Us</a><a href="https://www.1laser.com/pages/financing">Financing</a><a href="https://www.1laser.com/blogs/topic">Blog Center</a><a href="https://www.1laser.com/pages/payment-methods">Payment Methods</a><a href="https://www.1laser.com/pages/faq">Common FAQ</a><a href="https://www.1laser.com/pages/laser-cutter-engraving-settings-for-different-materials">Laser Engraving &amp; Cutting Chart</a><a href="https://www.1laser.com/pages/find-demo-host">Schedule a Demo</a><a href="https://www.1laser.com/pages/demoroom">Become a Demo Host</a></div>
            <div><strong>Policy</strong><a href="https://www.1laser.com/pages/shipping-policy">Shipping Policy</a><a href="https://www.1laser.com/pages/privacy-policy">Privacy Policy</a><a href="https://www.1laser.com/pages/refund-policy">Refund Policy</a><a href="https://www.1laser.com/pages/terms-of-service">Terms of Service</a><a href="https://www.1laser.com/pages/warranty-policy">Warranty Policy</a><a href="https://www.1laser.com/pages/pre-order-backorder-policy">Pre &amp; Backorder Policy</a><a href="https://www.1laser.com/pages/onelaser-giveaway-general-terms-conditions">Giveaway General Terms &amp; Conditions</a></div>
          </div>
          <div className="home-footer__contact">
            <strong>Contact Us</strong>
            <a href="tel:+16268004130"><Phone size={16} />Phone: 626-800-4130</a>
            <a href="mailto:ts@1laser.com"><EnvelopeSimple size={16} />Tech Support: ts@1laser.com</a>
            <a href="mailto:cs@1laser.com"><EnvelopeSimple size={16} />Customer Support: cs@1laser.com</a>
            <a href="mailto:sales@1laser.com"><EnvelopeSimple size={16} />Sales Consultation: sales@1laser.com</a>
            <p><MapPin size={16} />Headquarters: 20472 Crescent Bay Dr, STE 104, Lake Forest, CA 92630</p>
          </div>
        </div>
        <div className="home-footer__bottom"><span>© {new Date().getFullYear()} OneLaser. All rights reserved.</span><div><a href="https://www.1laser.com/pages/privacy-policy">Privacy Policy</a><a href="https://www.1laser.com/pages/terms-of-service">Terms of Service</a><a href="#top">Back to top <ArrowUpRight size={13} /></a></div></div>
      </footer>

      {activeVideo && (
        <div className="home-video-modal" role="dialog" aria-modal="true" aria-label={activeVideo.title} onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveVideo(null); }}>
          <div className="home-video-modal__panel">
            <button className="home-video-modal__close" type="button" onClick={() => setActiveVideo(null)} aria-label="Close video"><X size={22} weight="bold" /></button>
            <div className="home-video-modal__frame">
              <iframe src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0`} title={activeVideo.title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
            </div>
          </div>
        </div>
      )}

      {activeProject && (
        <div className="home-project-modal" role="dialog" aria-modal="true" aria-label={activeProject.title} onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveProject(null); }}>
          <div className="home-project-modal__panel">
            <button className="home-project-modal__close" type="button" onClick={() => setActiveProject(null)} aria-label="Close enlarged project"><X size={22} weight="bold" /></button>
            <button className="home-project-modal__arrow home-project-modal__arrow--left" type="button" onClick={() => moveProject(-1)} aria-label="Show previous project"><CaretLeft size={26} /></button>
            <figure>
              <img src={asset(activeProject.image)} alt={activeProject.title} />
              <figcaption><small>{activeProject.material}</small><strong>{activeProject.title}</strong></figcaption>
            </figure>
            <button className="home-project-modal__arrow home-project-modal__arrow--right" type="button" onClick={() => moveProject(1)} aria-label="Show next project"><CaretRight size={26} /></button>
          </div>
        </div>
      )}
    </div>
  );
}
