import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CaretLeft,
  CaretRight,
  EnvelopeSimple,
  Headset,
  List,
  MapPin,
  Monitor,
  Package,
  Phone,
  Play,
  ShieldCheck,
  Sparkle,
  Wrench,
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

const engineeringStories = [
  {
    title: "Built for Precision.",
    copy: "Rigid frames, precise motion systems, and RF power deliver consistent accuracy and repeatability.",
    action: "See the engineering",
    image: "xrf-internal-wide.jpg",
    alt: "The precision motion system inside a OneLaser XRF",
  },
  {
    title: "Designed for Makers. Trusted by Professionals.",
    copy: "Every detail is considered for easier operation, dependable output, and long-term reliability.",
    action: "Learn the design philosophy",
    image: "xrf-workshop-story.webp",
    alt: "A professional maker with a OneLaser system in his workshop",
  },
  {
    title: "Total Performance.",
    copy: "Fine detail, fast response, and repeatable results—engineered to outperform every day.",
    action: "Discover the performance",
    image: "power-38w-result.webp",
    alt: "Fine engraving results produced with OneLaser RF technology",
  },
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

const workflow = [
  {
    icon: Monitor,
    step: "1. Design",
    copy: "Create in your favorite software or choose from templates.",
  },
  {
    icon: Wrench,
    step: "2. Set Up",
    copy: "Place your material, focus, and set your parameters.",
  },
  {
    icon: Sparkle,
    step: "3. Make",
    copy: "Start the job and watch your idea become real.",
  },
];

const supportItems = [
  {
    icon: Headset,
    title: "World-Class Support",
    copy: "Real people. Real answers. We’re here to help.",
  },
  {
    icon: Phone,
    title: "Request a Demo",
    copy: "See OneLaser live, online or in person.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty & Reliability",
    copy: "Built to last. Backed for your peace of mind.",
  },
  {
    icon: Package,
    title: "Made in the USA",
    copy: "Engineered, assembled, and supported in the USA.",
  },
];

export function HomePage() {
  const [activeHero, setActiveHero] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const touchStart = useRef(null);

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
  }, [heroPaused]);

  useEffect(() => {
    if (!activeVideo) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeVideo]);

  function moveHero(direction) {
    setActiveHero((current) => (current + direction + heroSlides.length) % heroSlides.length);
  }

  function handleHeroTouchEnd(event) {
    if (touchStart.current == null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(distance) > 45) moveHero(distance > 0 ? -1 : 1);
    touchStart.current = null;
  }

  return (
    <div className="home-shell" id="top">
      <a className="home-skip" href="#home-main">Skip to content</a>

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
          <a href="#machines" onClick={() => setMenuOpen(false)}>Lasers</a>
          <a href="#results" onClick={() => setMenuOpen(false)}>Materials</a>
          <a href="#industries" onClick={() => setMenuOpen(false)}>Industries</a>
          <a href="#videos" onClick={() => setMenuOpen(false)}>Resources</a>
          <a href="#support" onClick={() => setMenuOpen(false)}>Support</a>
          <a href="https://www.1laser.com/pages/our-story" target="_blank" rel="noreferrer">About</a>
        </nav>
        <a className="home-header__cta" href="https://www.1laser.com/products/sales-consultation-call" target="_blank" rel="noreferrer">Request a Demo</a>
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
                onClick={() => setActiveHero(index)}
                aria-label={`Show banner ${index + 1}`}
                aria-current={index === activeHero ? "true" : undefined}
                key={slide.image}
              ><span /></button>
            ))}
          </div>
        </section>

        <section className="home-products" id="machines" aria-label="OneLaser product families">
          <div className="home-products__grid">
            {productCards.map((product) => (
              <a className={`home-product-card home-product-card--${product.id}`} href={product.href} key={product.name}>
                <span className="home-product-card__label">{product.label}</span>
                <div className="home-product-card__copy">
                  <h2>{product.name}</h2>
                  <p>{product.copy}</p>
                  <div className="home-product-card__features">
                    {product.features.map((feature) => <span key={feature}>{feature}</span>)}
                  </div>
                </div>
                <div className="home-product-card__media">
                  <img src={asset(product.image)} alt={`${product.name} laser system`} />
                </div>
                <strong className="home-product-card__cta">Explore Now</strong>
              </a>
            ))}
          </div>
        </section>

        <section className="home-results" id="results">
          <img src={asset("commercial-premium-personalization.webp")} alt="A collection of detailed products made with OneLaser" />
          <div className="home-results__copy">
            <h2>Bring Every Idea to Life</h2>
            <p>From intricate detail to bold statements—OneLaser makes it possible.</p>
            <a href={XRF_PAGE_URL}>Explore what you can make <ArrowRight size={15} weight="bold" /></a>
          </div>
        </section>

        <section className="home-engineering" aria-label="OneLaser engineering stories">
          {engineeringStories.map((story, index) => (
            <article className={index % 2 === 1 ? "home-engineering__story is-reversed" : "home-engineering__story"} key={story.title}>
              <div className="home-engineering__media"><img src={asset(story.image)} alt={story.alt} /></div>
              <div className="home-engineering__copy">
                <span>ENGINEERING STORY</span>
                <h2>{story.title}</h2>
                <p>{story.copy}</p>
                <a href={XRF_PAGE_URL}>{story.action} <ArrowRight size={15} weight="bold" /></a>
              </div>
            </article>
          ))}
        </section>

        <section className="home-videos" id="videos">
          <header className="home-section-heading">
            <h2>OneLaser on YouTube</h2>
            <p>Engineering, behind the scenes, and everything laser.</p>
          </header>
          <div className="home-videos__grid">
            {videos.map((video) => (
              <article className={video.featured ? "home-video-card is-featured" : "home-video-card"} key={video.id}>
                <button className="home-video-card__cover" type="button" onClick={() => setActiveVideo(video)} aria-label={`Play ${video.title}`}>
                  <img src={asset(video.image)} alt="" />
                  <span className="home-video-card__play"><Play size={24} weight="fill" /></span>
                </button>
                <h3>{video.title}</h3>
                <p>{video.copy}</p>
              </article>
            ))}
          </div>
          <a className="home-youtube-link" href="https://www.youtube.com/@OneLaser.Official" target="_blank" rel="noreferrer">Explore the OneLaser channel <ArrowUpRight size={15} weight="bold" /></a>
        </section>

        <section className="home-workflow" aria-label="OneLaser workflow">
          <header className="home-section-heading home-section-heading--centered">
            <h2>Simple Workflow. Stunning Results.</h2>
          </header>
          <div className="home-workflow__steps">
            {workflow.map(({ icon: Icon, step, copy }, index) => (
              <article key={step}>
                <div className="home-workflow__icon"><Icon size={44} weight="light" /></div>
                <h3>{step}</h3>
                <p>{copy}</p>
                {index < workflow.length - 1 && <ArrowRight className="home-workflow__arrow" size={22} weight="light" aria-hidden="true" />}
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
          <a className="home-industry home-industry--education" href="https://www.1laser.com/pages/education" target="_blank" rel="noreferrer">
            <img src={asset("home-banner-hydra-education.png")} alt="Students learning with OneLaser in a classroom" />
            <span className="home-industry__shade" />
            <div><h2>For Business & Education</h2><p>Power your shop, classroom, or institution with tools built to perform.</p><strong>Explore Solutions <ArrowRight size={15} /></strong></div>
          </a>
        </section>

        <section className="home-support" id="support">
          {supportItems.map(({ icon: Icon, title, copy }) => (
            <article key={title}><Icon size={31} weight="light" /><div><h3>{title}</h3><p>{copy}</p></div></article>
          ))}
        </section>

        <section className="home-brand-pillars" aria-labelledby="brand-pillars-title">
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

        <section className="home-final-cta">
          <div className="home-final-cta__copy">
            <h2>Ready to Make More?</h2>
            <p>Join makers, educators, and businesses creating more with OneLaser.</p>
            <a href="https://www.1laser.com/products/sales-consultation-call" target="_blank" rel="noreferrer">Request a Demo</a>
          </div>
          <img src={asset("home-product-xrf.png")} alt="OneLaser XRF desktop laser" />
        </section>
      </main>

      <footer className="home-footer">
        <div className="home-footer__main">
          <div className="home-footer__brand">
            <img src={asset("onelaser-logo-transparent.svg")} alt="OneLaser" />
            <p>OneLaser designs and builds professional laser machines for makers, educators, and businesses around the world.</p>
            <span>Engineered in the USA</span>
          </div>
          <div className="home-footer__links">
            <div><strong>Lasers</strong><a href={XRF_PAGE_URL}>XRF</a><a href="https://wiki.1laser.com/en/vertigo/vertigo-series-wiki">VertiGo</a><a href="https://www.1laser.com/collections/hydra-gen-2-rf-laser-engravers-cutters">Hydra Gen2</a><a href="https://www.1laser.com/products/cobra-10-100w-co2-laser-engraver-cutter">Cobra</a><a href="https://www.1laser.com/collections/laser-engraving-cutting-marking-machines">Compare All</a></div>
            <div><strong>Resources</strong><a href="https://www.1laser.com/collections/materials">Materials</a><a href="#results">Project Gallery</a><a href="https://www.1laser.com/blogs/tutorials">Blog</a><a href="https://www.1laser.com/pages/customer-stories">Customer Stories</a><a href="https://www.youtube.com/@OneLaser.Official">YouTube</a></div>
            <div><strong>Support</strong><a href="https://www.1laser.com/pages/contact-us">Help Center</a><a href="https://wiki.1laser.com/">Software & Drivers</a><a href="https://www.1laser.com/pages/laser-engraving-community">Manuals</a><a href="https://www.1laser.com/pages/contact-us">Contact Support</a><a href="https://www.1laser.com/pages/warranty-policy">Warranty</a></div>
            <div><strong>Company</strong><a href="https://www.1laser.com/pages/our-story">About OneLaser</a><a href="https://www.1laser.com/blogs/news">News</a><a href="https://www.1laser.com/pages/contact-us">Contact Us</a></div>
          </div>
        </div>
        <div className="home-footer__contact"><a href="tel:+16268004130"><Phone size={15} />626-800-4130</a><a href="mailto:sales@1laser.com"><EnvelopeSimple size={15} />sales@1laser.com</a><span><MapPin size={15} />Lake Forest, California</span></div>
        <div className="home-footer__bottom"><span>© {new Date().getFullYear()} OneLaser. All rights reserved.</span><div><a href="https://www.1laser.com/policies/privacy-policy">Privacy Policy</a><a href="https://www.1laser.com/policies/terms-of-service">Terms of Service</a><a href="#top">Back to top <ArrowUpRight size={13} /></a></div></div>
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
    </div>
  );
}
