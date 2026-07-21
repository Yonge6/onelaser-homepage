import { useEffect, useMemo, useRef, useState } from "react";
import { CaretLeft, CaretRight, Check, Minus, Play, Plus, Star, X } from "@phosphor-icons/react";

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

const media = [
  { src: asset("xrf-hero.jpg"), alt: "XRF Gen2 closed three-quarter product render", label: "Studio" },
  { src: asset("xrf-open.jpg"), alt: "XRF Gen2 with the lid open", label: "Inside" },
  { src: asset("xrf-front.jpg"), alt: "Front view of XRF Gen2", label: "Front" },
  { src: asset("xrf-ivs.jpg"), alt: "XRF Gen2 intelligent vision system close-up", label: "IVS" },
  { src: asset("xrf-gallery-01.jpg"), alt: "Straight-on front view of XRF Gen2", label: "Front 01" },
  { src: asset("xrf-gallery-02.jpg"), alt: "Straight-on closed view of XRF Gen2", label: "Front 02" },
  { src: asset("xrf-gallery-03.jpg"), alt: "Open XRF Gen2 from the front-left angle", label: "Open 01" },
  { src: asset("xrf-gallery-04.jpg"), alt: "Open XRF Gen2 viewed from the front", label: "Open 02" },
  { src: asset("xrf-gallery-05.jpg"), alt: "Open XRF Gen2 from the front-right angle", label: "Open 03" },
  { src: asset("xrf-gallery-06.jpg"), alt: "Closed XRF Gen2 from the front-right angle", label: "Angle" },
  { src: asset("xrf-gallery-07.jpg"), alt: "XRF Gen2 internal motion system", label: "Motion" },
  { src: asset("xrf-gallery-08.jpg"), alt: "XRF Gen2 RF laser head close-up", label: "Head 01" },
  { src: asset("xrf-gallery-09.jpg"), alt: "XRF Gen2 RF laser head from a lower angle", label: "Head 02" },
  { src: asset("xrf-gallery-10.jpg"), alt: "XRF Gen2 gantry and honeycomb bed", label: "Gantry" },
  { src: asset("xrf-gallery-11.jpg"), alt: "XRF Gen2 integrated touchscreen detail", label: "Touch" },
  { src: asset("xrf-gallery-12.jpg"), alt: "XRF Gen2 work area and control enclosure", label: "Bed" },
  { src: asset("xrf-internal-wide.jpg"), alt: "XRF Gen2 overview video placeholder", label: "Overview", type: "video" },
];

const featureLinks = [
  ["features", "Overview"],
  ["rf-benefits", "RF results"],
  ["performance", "Performance"],
  ["workflow", "Workflow"],
  ["safety", "Safety"],
  ["configuration", "Configure"],
  ["specs", "Specs"],
];

const projectEvidence = [
  { title: "Photo-grade grayscale", proof: "2,000 DPI RF detail", image: "xrf-lifestyle.jpg", tag: "RF RESULTS" },
  { title: "Fine text and QR codes", proof: "≤ 0.01 mm positioning", image: "xrf-gallery-08.jpg", tag: "PRECISION" },
  { title: "Print & cut outlines", proof: "IVS mark-point compensation", image: "xrf-ivs.jpg", tag: "INTELLIGENT VISION" },
  { title: "Repeatable batch work", proof: "1,200 mm/s · True 3G", image: "xrf-gallery-07.jpg", tag: "THROUGHPUT" },
  { title: "Rotary personalization", proof: "Optional Rotary accessory", image: "xrf-open.jpg", tag: "OPTIONAL ROTARY" },
  { title: "Long-format signage", proof: "Optional Conveyor workflow", image: "xrf-front.jpg", tag: "OPTIONAL CONVEYOR" },
];

const rfBenefits = [
  {
    id: "precision",
    tab: "Cleaner details",
    eyebrow: "FINE RF SPOT",
    title: "Crisp marks your customers can inspect up close.",
    copy: "Pulse-modulated RF control preserves small type, photographic transitions and fine surface detail with up to 2,000 DPI scanning precision.",
    metrics: ["2,000 DPI", "≤ 0.01 mm", "Stable RF output"],
    image: "xrf-gallery-08.jpg",
  },
  {
    id: "response",
    tab: "Faster response",
    eyebrow: "CONTROLLED MOTION",
    title: "Speed that stays useful inside a real job.",
    copy: "Real 1,200 mm/s working speed, True 3G acceleration and closed-loop feedback turn rapid motion into repeatable finished output.",
    metrics: ["1,200 mm/s", "True 3G", "Closed-loop feedback"],
    image: "xrf-internal-wide.jpg",
  },
  {
    id: "lifespan",
    tab: "Longer lifespan",
    eyebrow: "AIR-COOLED RF SOURCE",
    title: "Less maintenance between you and the next order.",
    copy: "The sealed, air-cooled RF metal tube is rated up to 30,000 hours and works with a factory-locked optical path designed to avoid routine field alignment.",
    metrics: ["Up to 30,000 h", "Air cooled", "Factory-locked optics"],
    image: "xrf-open.jpg",
  },
];

const featureOverview = [
  { id: "rf-benefits", eyebrow: "RF METAL TUBE", title: "Photo-real, every time.", copy: "Up to 2,000 DPI for fine grayscale, small type and premium surface detail.", image: "xrf-gallery-08.jpg", size: "tall" },
  { id: "performance", eyebrow: "TRUE SPEED", title: "1,200 mm/s", copy: "Real working speed at controlled 3G acceleration.", size: "metric" },
  { id: "performance", eyebrow: "INTELLIGENT VISION", title: "Print and cut, made easy.", copy: "IVS detects registration marks and compensates placement in real time.", image: "xrf-ivs.jpg", size: "wide" },
  { id: "power-guide", eyebrow: "NEW 70W RF", title: "More power. More possible.", copy: "More headroom for deep relief, high-DPI grayscale and demanding production.", image: "xrf-hero.jpg", size: "large" },
  { id: "workflow", eyebrow: "MAKERBOOST AI + XFOCUS", title: "Out of the box, into creation.", copy: "Design, preview, focus and run with fewer manual steps.", image: "xrf-touchscreen.jpg", size: "tall" },
  { id: "safety", eyebrow: "BUILT-IN PROTECTION", title: "Class 1 design", copy: "Enclosure, lid interlock and thermal response work together.", size: "metric" },
  { id: "configuration", eyebrow: "OPTIONAL EXPANSION", title: "Endless engraving, auto-feed.", copy: "Optional Riser, Conveyor and Rotary expand the jobs you can accept.", image: "xrf-front.jpg", size: "wide" },
  { id: "reliability", eyebrow: "LOW MAINTENANCE", title: "Sealed tight. Dust out.", copy: "Protected optics, magnetic lens changes and factory-locked alignment.", image: "xrf-gallery-09.jpg", size: "wide" },
  { id: "support", eyebrow: "US ENGINEER SUPPORT", title: "Real engineers. Real experience.", copy: "Setup, troubleshooting and long-term support from laser specialists.", image: "xrf-lifestyle.jpg", size: "tall" },
];

const scrollStories = [
  {
    id: "rf",
    eyebrow: "P0 · RF RESULTS",
    title: "Photo-real, every time.",
    copy: "A sealed RF metal tube, precise pulse control and a fine laser spot preserve tiny type, tonal transitions and surface detail your customers can inspect up close.",
    metrics: ["38W / 70W RF", "2,000 DPI", "Up to 30,000 hours"],
    image: "xrf-open.jpg",
  },
  {
    id: "speed",
    eyebrow: "P0 · TRUESPEED",
    title: "The fastest of its class.",
    copy: "Real 1,200 mm/s working speed, controlled 3G acceleration, closed-loop feedback and a 20% lighter head turn motion into repeatable finished output.",
    metrics: ["1,200 mm/s", "True 3G", "≤ 0.01 mm"],
    image: "xrf-internal-wide.jpg",
  },
  {
    id: "ivs",
    eyebrow: "P0 · IVS PRINT & CUT",
    title: "Print and cut, made easy.",
    copy: "The head-mounted Intelligent Vision System detects registration marks and compensates position and angle in real time—reducing calibration, waste and rework.",
    metrics: ["Mark detection", "Live compensation", "Less material waste"],
    image: "xrf-ivs.jpg",
  },
  {
    id: "motion",
    eyebrow: "P0 · MOTION PLATFORM",
    title: "Flagship motion, in a desktop machine.",
    copy: "Hydra-derived all-steel rolling axes and closed-loop motors combine smooth travel, long service life and feedback-controlled accuracy for sustained production.",
    metrics: ["All-steel axes", "Closed-loop motors", "20% lighter head"],
    image: "xrf-gallery-07.jpg",
  },
  {
    id: "expand",
    eyebrow: "P0 · OPTIONAL EXPANSION",
    title: "Start desktop. Take on bigger jobs.",
    copy: "A true 24 × 12 inch bed handles everyday stock. Optional Riser, Rotary and Conveyor accessories unlock taller, cylindrical and continuous long-format work.",
    metrics: ["24 × 12 in", "8.5 in with optional Riser", "Optional auto-feed"],
    image: "xrf-front.jpg",
  },
];

const accessoryOptions = [
  { id: "smart-air", name: "Smart Air Assist", use: "Automatically matches airflow to cutting or engraving.", image: "xrf-gallery-08.jpg" },
  { id: "riser", name: "Riser Base", use: "Adds clearance for objects up to 8.5 inches tall.", image: "xrf-open.jpg" },
  { id: "conveyor", name: "Auto Conveyor", use: "Supports continuous long-format processing.", image: "xrf-front.jpg" },
  { id: "rotary", name: "Rotary Accessory", use: "Enables cylindrical personalization workflows.", image: "xrf-lifestyle.jpg" },
  { id: "fume", name: "Filtered Fume Extractor", use: "Adds filtered extraction for the workspace.", image: "xrf-gallery-06.jpg" },
];

const purchasePackages = [
  {
    id: "standalone",
    name: "XRF Standalone",
    price: 3999,
    msrp: 6499,
    badge: "CURRENT OFFER",
    description: "38W RF desktop laser with 1,200 mm/s motion, True 3G acceleration and a 24 × 12 in workspace.",
    detail: "The New King of Desktop Lasers",
  },
  {
    id: "riser",
    name: "XRF & Riser Base",
    price: 4499,
    msrp: 6999,
    badge: "EXPANDED HEIGHT",
    description: "Adds the optional Riser Base for taller objects and expanded rotary workflows.",
    detail: "Includes optional Riser Base",
  },
];

const officialAccessories = [
  {
    id: "lightburn",
    name: "LightBurn Pro License Key",
    price: 189.05,
    msrp: 199,
    description: "Professional laser layout, control and production software.",
    image: "xrf-touchscreen.jpg",
  },
  {
    id: "conveyor-official",
    name: "Automatic Conveyor Feeder for OneLaser XRF",
    price: 759.05,
    msrp: 799,
    description: "Optional continuous-feed workflow for long-format projects.",
    image: "xrf-front.jpg",
  },
  {
    id: "air-assist-official",
    name: "OneLaser Air Assist Control",
    price: 190,
    msrp: 199.99,
    description: "Optional automated dual-mode airflow for cutting and engraving.",
    image: "xrf-gallery-08.jpg",
  },
  {
    id: "lens-kit",
    name: "MagSwitch Lens Holder Replacement Kit",
    price: 33.25,
    msrp: 34.99,
    description: "Optional 20-pack replacement kit for the magnetic lens system.",
    image: "xrf-gallery-09.jpg",
  },
];

const formatMoney = (value) => new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
}).format(value);

const specs = [
  {
    title: "Laser source",
    rows: [
      ["RF metal tube", "38W / 70W"],
      ["Cooling", "Air cooled"],
      ["Rated lifespan", "Up to 30,000 hours"],
      ["Laser type", "Sealed CO₂ RF metal tube, 10.6 μm"],
    ],
  },
  {
    title: "Performance",
    rows: [
      ["Real working speed", "1,200 mm/s"],
      ["Real working acceleration", "3G"],
      ["Positioning accuracy", "≤ 0.01 mm"],
      ["Maximum scanning precision", "2,000 DPI"],
    ],
  },
  {
    title: "Workspace",
    rows: [
      ["True engraving area", "23.6 × 11.8 in (nominal 24 × 12 in)"],
      ["Honeycomb table", "650 × 350 mm"],
      ["Maximum work height", "8.5 in with optional Riser Base"],
      ["Maximum length", "Unlimited with pass-through workflow"],
    ],
  },
  {
    title: "Control & safety",
    rows: [
      ["Connectivity", "WiFi / USB / Ethernet"],
      ["Software", "LightBurn / MakerBoost AI / RDWorks"],
      ["Laser safety", "Class 1 design"],
      ["Protection", "Lid interlock / thermal alarm / electrical-bay suppression"],
    ],
  },
];

const faqs = [
  {
    q: "Should I choose 38W or 70W RF?",
    a: "Choose 38W for fine-detail engraving, photography, text and balanced everyday production. Choose 70W for heavier workloads, visibly deeper 3D relief, sharper high-DPI grayscale at speed and more cutting headroom.",
  },
  {
    q: "Does XRF Gen2 need water cooling or beam alignment?",
    a: "No water chiller is required for the air-cooled RF source. The optical path is calibrated and locked at the factory, so routine field beam alignment is not part of the normal workflow.",
  },
  {
    q: "Which accessories are included?",
    a: "The base machine includes integrated autofocus, air assist, the honeycomb table, pass-through access and connectivity. Smart Air, Riser Base, Conveyor, Rotary, Fume Extractor and optional focal lenses are sold separately unless a bundle explicitly lists them.",
  },
  {
    q: "Which software can I use?",
    a: "XRF Gen2 supports LightBurn, RDWorks and MakerBoost AI on Windows and macOS, including common vector and bitmap formats such as AI, PDF, DXF, SVG, LBRN, BMP, JPG, PNG and TIFF.",
  },
  {
    q: "What support is available after purchase?",
    a: "OneLaser provides US-based engineer support and a 3-2-1 warranty: three years on the frame, two years on electronics and one year on the laser source.",
  },
];

function VideoPlaceholder({ eyebrow, title, copy, image, dark = false, children, onPlay }) {
  return (
    <article className={`video-story ${dark ? "video-story--dark" : ""}`}>
      <div className="video-story__copy">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{copy}</p>
        {children}
        <button className="text-action" type="button" onClick={onPlay}><Play size={17} weight="fill" />Watch the story</button>
      </div>
      <div className="video-story__media">
        <img src={image} alt="" />
        <div className="video-label">
          <span>VIDEO PLACEHOLDER</span>
          <span>16:9 · FINAL VIDEO</span>
        </div>
      </div>
    </article>
  );
}

function SpecGroup({ group }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`spec-group ${open ? "is-open" : ""}`}>
      <button type="button" className="spec-group__trigger" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        <span>{group.title}</span>
        <span aria-hidden="true">{open ? <Minus size={18} /> : <Plus size={18} />}</span>
      </button>
      {open && (
        <div className="spec-group__rows">
          {group.rows.map(([label, value]) => (
            <div className="spec-row" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function AnimatedMetric({ value, label }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.55 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={visible ? "metric-reveal is-visible" : "metric-reveal"}><strong>{value}</strong><span>{label}</span></div>;
}

function StickyStory({ onPlay }) {
  const [active, setActive] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observers = stepRefs.current.map((node, index) => {
      if (!node) return null;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActive(index);
      }, { rootMargin: "-32% 0px -48%", threshold: 0.15 });
      observer.observe(node);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  const story = scrollStories[active];

  return (
    <section className="immersive-story" id="performance">
      <div className="immersive-story__sticky">
        <div className="immersive-story__progress" aria-label={`Chapter ${active + 1} of ${scrollStories.length}`}>
          {scrollStories.map((item, index) => (
            <button type="button" key={item.id} className={active === index ? "is-active" : ""} onClick={() => stepRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" })} aria-label={`Show ${item.title}`}><span /></button>
          ))}
        </div>
        <div className="immersive-story__copy" key={story.id}>
          <span className="eyebrow">{story.eyebrow}</span>
          <h2>{story.title}</h2>
          <p>{story.copy}</p>
          <div className="inline-metrics">{story.metrics.map((metric) => <span key={metric}>{metric}</span>)}</div>
          <button className="text-action" type="button" onClick={() => onPlay(story.eyebrow, story.title, asset(story.image))}><Play size={17} weight="fill" />Watch the story</button>
        </div>
      </div>
      <div className="immersive-story__steps">
        {scrollStories.map((item, index) => (
          <article ref={(node) => { stepRefs.current[index] = node; }} className={active === index ? "immersive-story__step is-active" : "immersive-story__step"} key={item.id}>
            <img src={asset(item.image)} alt={`${item.title} XRF Gen2 feature view`} />
            <div className="immersive-story__media-label"><span>VIDEO PLACEHOLDER</span><span>{String(index + 1).padStart(2, "0")} / {String(scrollStories.length).padStart(2, "0")}</span></div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function App() {
  const [power, setPower] = useState("38W");
  const [activeMedia, setActiveMedia] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [activeFeature, setActiveFeature] = useState("features");
  const [openFaq, setOpenFaq] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [configured, setConfigured] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedAccessories, setSelectedAccessories] = useState([]);
  const [selectedPackageId, setSelectedPackageId] = useState("standalone");
  const [purchasePower, setPurchasePower] = useState("38W");
  const [selectedPurchaseAccessories, setSelectedPurchaseAccessories] = useState([]);
  const [purchaseAdded, setPurchaseAdded] = useState(false);
  const [videoModal, setVideoModal] = useState(null);
  const thumbnailRailRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const revealNodes = [...document.querySelectorAll("[data-reveal]")];
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8%" });
    revealNodes.forEach((node) => revealObserver.observe(node));

    const trackedSections = featureLinks
      .map(([id]) => document.getElementById(id))
      .filter(Boolean);
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
      const currentSection = trackedSections.reduce((current, node) => (
        node.getBoundingClientRect().top <= 190 ? node : current
      ), null);
      if (currentSection?.id) setActiveFeature(currentSection.id);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const selectedPower = useMemo(
    () => power === "38W"
      ? { label: "38W RF", use: "Fine detail & everyday production", price: "$3,999", note: "Official current price" }
      : { label: "70W RF", use: "Deeper relief & higher throughput", price: "$4,499", note: "New product price" },
    [power],
  );

  const selectedPurchasePackage = useMemo(() => {
    const selected = purchasePackages.find((item) => item.id === selectedPackageId) ?? purchasePackages[0];
    const powerDelta = purchasePower === "70W" ? 500 : 0;
    return { ...selected, price: selected.price + powerDelta, msrp: selected.msrp + powerDelta };
  }, [selectedPackageId, purchasePower]);

  const purchaseAccessoryTotal = useMemo(
    () => officialAccessories
      .filter((item) => selectedPurchaseAccessories.includes(item.id))
      .reduce((sum, item) => sum + item.price, 0),
    [selectedPurchaseAccessories],
  );

  const purchaseAccessoryMsrpTotal = useMemo(
    () => officialAccessories
      .filter((item) => selectedPurchaseAccessories.includes(item.id))
      .reduce((sum, item) => sum + item.msrp, 0),
    [selectedPurchaseAccessories],
  );

  const purchaseTotal = (selectedPurchasePackage.price + purchaseAccessoryTotal) * quantity;
  const purchaseMsrpTotal = (selectedPurchasePackage.msrp + purchaseAccessoryMsrpTotal) * quantity;

  function configure() {
    document.getElementById("purchase-options")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function selectMedia(index) {
    setActiveMedia(index);
    const item = media[index];
    if (item.type === "video") {
      setVideoModal({ eyebrow: "XRF GEN2 OVERVIEW", title: "From setup to finished product.", image: item.src });
    }
  }

  function stepMedia(direction) {
    setActiveMedia((current) => (current + direction + media.length) % media.length);
  }

  function scrollThumbnails(direction) {
    thumbnailRailRef.current?.scrollBy({ left: direction * 330, behavior: "smooth" });
  }

  function openStory(eyebrow, title, image) {
    setVideoModal({ eyebrow, title, image });
  }

  function jumpTo(sectionId) {
    setActiveFeature(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function toggleAccessory(accessoryId) {
    setSelectedAccessories((current) => current.includes(accessoryId)
      ? current.filter((id) => id !== accessoryId)
      : [...current, accessoryId]);
  }

  function togglePurchaseAccessory(accessoryId) {
    setPurchaseAdded(false);
    setSelectedPurchaseAccessories((current) => current.includes(accessoryId)
      ? current.filter((id) => id !== accessoryId)
      : [...current, accessoryId]);
  }

  return (
    <div className="site-shell">
      <div className="page-progress" aria-hidden="true"><span style={{ width: `${scrollProgress}%` }} /></div>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="announcement">
        <span>XRF GEN2</span>
        <span>Built for premium desktop production</span>
        <span>US engineer support</span>
      </div>

      <header className="site-header">
        <a href="#top" className="brand" aria-label="OneLaser home">
          <img src={asset("onelaser-logo.png")} alt="OneLaser" />
        </a>
        <button className="menu-button" type="button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen}>
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav className={menuOpen ? "nav is-open" : "nav"} aria-label="Product navigation">
          <a href="#results" onClick={() => setMenuOpen(false)}>Results</a>
          <a href="#performance" onClick={() => setMenuOpen(false)}>Performance</a>
          <a href="#workflow" onClick={() => setMenuOpen(false)}>Workflow</a>
          <a href="#safety" onClick={() => setMenuOpen(false)}>Safety</a>
          <a href="#specs" onClick={() => setMenuOpen(false)}>Specs</a>
        </nav>
        <button className="header-cta" type="button" onClick={configure}>Configure</button>
      </header>

      <main id="main">
        <section className="hero section" id="top">
          <div className="hero-media">
            <div className="media-stage">
              <img src={media[activeMedia].src} alt={media[activeMedia].alt} />
              <span className="media-count">{String(activeMedia + 1).padStart(2, "0")} / {String(media.length).padStart(2, "0")}</span>
              <button type="button" className="media-arrow media-arrow--previous" aria-label="Previous product view" onClick={() => stepMedia(-1)}><CaretLeft size={25} /></button>
              <button type="button" className="media-arrow media-arrow--next" aria-label="Next product view" onClick={() => stepMedia(1)}><CaretRight size={25} /></button>
              {media[activeMedia].type === "video" && (
                <button type="button" className="media-play" onClick={() => selectMedia(activeMedia)}>
                  <span><Play size={24} weight="fill" /></span>
                  <strong>XRF Gen2 overview</strong>
                  <small>VIDEO PLACEHOLDER</small>
                </button>
              )}
            </div>
            <div className="thumbnail-controls">
              <button type="button" className="thumb-arrow" aria-label="Scroll product views left" onClick={() => scrollThumbnails(-1)}><CaretLeft size={20} /></button>
              <div className="thumbnail-row" ref={thumbnailRailRef} aria-label="Product views">
                {media.filter((item) => item.type !== "video").map((item, index) => (
                  <button
                    type="button"
                    key={item.src}
                    className={activeMedia === index ? "thumbnail is-active" : "thumbnail"}
                    onClick={() => selectMedia(index)}
                    aria-label={`Show ${item.label} view`}
                  >
                    <img src={item.src} alt="" />
                  </button>
                ))}
              </div>
              <button type="button" className="thumb-arrow" aria-label="Scroll product views right" onClick={() => scrollThumbnails(1)}><CaretRight size={20} /></button>
              <span className="thumbnail-divider" aria-hidden="true" />
              <button type="button" className="video-thumbnail" onClick={() => selectMedia(media.length - 1)} aria-label="Open XRF Gen2 overview video placeholder">
                <img src={media.at(-1).src} alt="" />
                <span><Play size={16} weight="fill" /></span>
              </button>
            </div>
          </div>

          <div className="purchase-panel">
            <div className="product-kicker">
              <span>ONELASER XRF™</span>
              <span>Professional RF desktop laser</span>
            </div>
            <h1>OneLaser XRF™ Performance Desktop Laser Engraver (38W/70W RF)</h1>

            <div className="rating-row" aria-label="Rated 4.93 out of 5 from 45 reviews">
              <span className="rating-stars" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((item) => <Star size={18} weight="fill" key={item} />)}
              </span>
              <strong>4.93</strong>
              <a href="https://www.1laser.com/products/onelaser-xrf-desktop-laser-machine#judgeme_product_reviews" target="_blank" rel="noreferrer">45 reviews</a>
            </div>

            <ul className="hero-highlights">
              <li><strong>38W / 70W RF metal tube:</strong> rated up to 30,000 hours with air-cooled operation.</li>
              <li><strong>1,200 mm/s + True 3G:</strong> real working speed with 29,430 mm/s² acceleration.</li>
              <li><strong>Professional detail:</strong> up to 2,000 DPI, 0.07 mm laser dot and ≤ 0.01 mm repeat positioning.</li>
              <li><strong>Desktop production area:</strong> 23.6 × 11.8 in working bed with a full-frame top-cover camera.</li>
              <li><strong>Class 1 design:</strong> enclosed processing with US-based engineer support.</li>
            </ul>

            <div className="official-price">
              <div className="official-price__main">
                <span>Final price</span>
                <strong>{formatMoney(selectedPurchasePackage.price)} <small>USD</small></strong>
                <em>Save {formatMoney(selectedPurchasePackage.msrp - selectedPurchasePackage.price)}</em>
              </div>
              <div className="official-price__msrp">
                <span>MSRP</span>
                <strong>{formatMoney(selectedPurchasePackage.msrp)} <small>USD</small></strong>
              </div>
            </div>
            <div className="financing-line">
              <strong>0% APR · or as low as $194/mo with Affirm</strong>
              <a href="https://www.1laser.com/pages/financing" target="_blank" rel="noreferrer">See if you qualify <CaretRight size={15} /></a>
            </div>

            <div className="purchase-options" id="purchase-options">
              <div className="purchase-section-heading">
                <div><span>Choose your RF power</span><small>Same platform, tuned for different workloads.</small></div>
                <a href="#power-guide">Compare 38W / 70W</a>
              </div>
              <div className="purchase-power-options">
                {[
                  { id: "38W", title: "38W RF", copy: "Fine detail & everyday production", price: 3999 },
                  { id: "70W", title: "70W RF", copy: "Deeper relief & higher throughput", price: 4499, badge: "NEW" },
                ].map((item) => {
                  const selected = purchasePower === item.id;
                  return (
                    <button type="button" className={selected ? "purchase-power is-selected" : "purchase-power"} key={item.id} onClick={() => { setPurchasePower(item.id); setPower(item.id); setPurchaseAdded(false); }} aria-pressed={selected}>
                      <span><strong>{item.title}</strong>{item.badge && <small>{item.badge}</small>}{selected && <i className="selection-check"><Check size={14} weight="bold" />Selected</i>}</span>
                      <p>{item.copy}</p>
                      <em>From {formatMoney(item.price)}</em>
                    </button>
                  );
                })}
              </div>

              <div className="purchase-section-heading">
                <div><span>Package</span><small>Choose the setup that matches your workspace.</small></div>
                <a href="#configuration">Compare all options</a>
              </div>
              <div className="official-packages">
                {purchasePackages.map((item) => {
                  const selected = selectedPackageId === item.id;
                  return (
                    <button
                      type="button"
                      className={selected ? "official-package is-selected" : "official-package"}
                      key={item.id}
                      onClick={() => { setSelectedPackageId(item.id); setPurchaseAdded(false); }}
                      aria-pressed={selected}
                    >
                      <div className="official-package__top">
                        <span><small>{item.badge}</small><strong>{item.name}</strong>{selected && <i className="selection-check"><Check size={14} weight="bold" />Selected</i>}</span>
                        <span><strong>{formatMoney(item.price + (purchasePower === "70W" ? 500 : 0))}</strong><del>{formatMoney(item.msrp + (purchasePower === "70W" ? 500 : 0))}</del></span>
                      </div>
                      <p>{item.description.replace("38W", purchasePower)}</p>
                      <div className="official-package__detail"><Check size={17} weight="bold" /><span>{item.detail}</span></div>
                    </button>
                  );
                })}
              </div>

              <div className="purchase-section-heading purchase-section-heading--accessories">
                <div><span>Frequently bought together</span><small>Official current accessory prices · save 5% on listed essentials.</small></div>
              </div>
              <div className="purchase-accessories">
                {officialAccessories.map((item) => {
                  const selected = selectedPurchaseAccessories.includes(item.id);
                  return (
                    <label className={selected ? "purchase-accessory is-selected" : "purchase-accessory"} key={item.id}>
                      <input type="checkbox" checked={selected} onChange={() => togglePurchaseAccessory(item.id)} />
                      <img src={asset(item.image)} alt="" />
                      <span><strong>{item.name}</strong><small>OPTIONAL</small><p>{item.description}</p></span>
                      <span className="purchase-accessory__price"><strong>{formatMoney(item.price)}</strong><del>{formatMoney(item.msrp)}</del></span>
                    </label>
                  );
                })}
              </div>

              <div className="purchase-total">
                <span><small>Your configuration</small><strong>{purchasePower} · {selectedPurchasePackage.name}{selectedPurchaseAccessories.length ? ` + ${selectedPurchaseAccessories.length} optional item${selectedPurchaseAccessories.length > 1 ? "s" : ""}` : ""}</strong></span>
                <strong>{formatMoney(purchaseTotal)}</strong>
              </div>
              <div className="purchase-actions purchase-actions--hero">
                <div className="quantity-control" aria-label="Purchase quantity">
                  <button type="button" aria-label="Decrease quantity" onClick={() => { setQuantity((value) => Math.max(1, value - 1)); setPurchaseAdded(false); }}><Minus size={15} /></button>
                  <strong>{quantity}</strong>
                  <button type="button" aria-label="Increase quantity" onClick={() => { setQuantity((value) => value + 1); setPurchaseAdded(false); }}><Plus size={15} /></button>
                </div>
                <button type="button" className="primary-cta" onClick={() => setPurchaseAdded(true)}>{purchaseAdded ? "Added to configuration" : "Add to Cart"}</button>
              </div>
              <a className="secondary-cta secondary-cta--link" href="https://www.1laser.com/products/onelaser-xrf-desktop-laser-machine" target="_blank" rel="noreferrer">Continue on OneLaser.com</a>
            </div>

            <div className="trust-panel">
              <div><strong>30-Day</strong><span>Easy returns</span></div>
              <div><strong>3-Year</strong><span>Warranty</span></div>
              <div><strong>100% USA</strong><span>Engineer support</span></div>
            </div>
            <p className="official-source-note">Current commercial data from OneLaser.com. Riser Base, Conveyor, Air Assist Control and replacement optics are optional unless explicitly included.</p>
          </div>
        </section>

        <section className="proof-rail" aria-label="XRF Gen2 product proof" data-reveal>
          <AnimatedMetric value="2,000 DPI" label="Maximum scanning precision" />
          <AnimatedMetric value="True 3G" label="Controlled acceleration" />
          <AnimatedMetric value="≤ 0.01 mm" label="Positioning accuracy" />
          <AnimatedMetric value="30,000 h" label="Rated RF source life" />
        </section>

        <nav className="feature-nav" aria-label="Explore XRF Gen2 capabilities">
          <div>
            {featureLinks.map(([sectionId, label]) => (
              <button type="button" key={sectionId} className={activeFeature === sectionId ? "is-active" : ""} onClick={() => jumpTo(sectionId)}>{label}</button>
            ))}
          </div>
        </nav>

        <section className="section feature-overview" id="features" data-reveal>
          <div className="section-heading section-heading--split feature-overview__heading">
            <div>
              <span className="eyebrow">XRF GEN2 AT A GLANCE</span>
              <h2>Features built around finished work.</h2>
            </div>
            <p>Nine connected capabilities designed to improve output, throughput and day-to-day confidence. Select a card to explore the supporting proof.</p>
          </div>
          <div className="feature-bento">
            {featureOverview.map((feature, index) => (
              <button type="button" className={`feature-bento__card feature-bento__card--${feature.size}`} key={`${feature.title}-${index}`} onClick={() => jumpTo(feature.id)}>
                {feature.image && <img src={asset(feature.image)} alt="" />}
                <span className="feature-bento__index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <span>{feature.eyebrow}</span>
                  <strong>{feature.title}</strong>
                  <p>{feature.copy}</p>
                </div>
              </button>
            ))}
          </div>
          <p className="feature-disclaimer">Smart Air, Riser Base, Conveyor and Rotary are optional and sold separately unless included in a configured bundle.</p>
        </section>

        <section className="section results" id="results" data-reveal>
          <div className="section-heading section-heading--split">
            <div>
              <span className="eyebrow">WHAT WILL YOU MAKE NEXT?</span>
              <h2>Made to sell.<br />Built to repeat.</h2>
            </div>
            <p>XRF Gen2 is designed for the products customers notice: crisp photography, readable detail, clean acrylic, premium personalization and repeatable batches.</p>
          </div>
          <div className="project-showcase">
            <div className="project-visual">
              <img src={asset(projectEvidence[activeProject].image)} alt={projectEvidence[activeProject].title} />
              <span>REPLACEABLE PROJECT MEDIA · {String(activeProject + 1).padStart(2, "0")}/{String(projectEvidence.length).padStart(2, "0")}</span>
            </div>
            <div className="project-content">
              <span className="eyebrow">{projectEvidence[activeProject].tag}</span>
              <h3>{projectEvidence[activeProject].title}</h3>
              <p>{projectEvidence[activeProject].proof}</p>
              <p className="project-note">Final production imagery, tested settings and measured completion time can replace this proof slot without changing the layout.</p>
              <div className="project-pagination">
                <button type="button" onClick={() => setActiveProject((activeProject - 1 + projectEvidence.length) % projectEvidence.length)} aria-label="Previous project"><CaretLeft size={21} /></button>
                <div>
                  {projectEvidence.map((item, index) => <button type="button" key={item.title} className={activeProject === index ? "is-active" : ""} onClick={() => setActiveProject(index)} aria-label={`Show ${item.title}`} />)}
                </div>
                <button type="button" onClick={() => setActiveProject((activeProject + 1) % projectEvidence.length)} aria-label="Next project"><CaretRight size={21} /></button>
              </div>
            </div>
          </div>
        </section>

        <section className="section power-guide" id="power-guide" data-reveal>
          <div className="section-heading section-heading--center">
            <span className="eyebrow">TWO PURPOSE-BUILT RF OPTIONS</span>
            <h2>Choose the power that fits your work.</h2>
            <p>38W and 70W share the same professional platform. Your workload decides the right fit.</p>
          </div>
          <div className="power-compare">
            <article className={power === "38W" ? "power-card is-selected" : "power-card"}>
              <div className="power-card__top"><span>38W RF</span><span>DETAIL + VALUE</span></div>
              <h3>Precision for everyday production.</h3>
              <p>Ideal for photo engraving, fine text, personalization, signs and balanced studio output.</p>
              <ul>
                <li>Fine-detail engraving and photography</li>
                <li>Everyday custom-product production</li>
                <li>Balanced performance and investment</li>
              </ul>
              <button type="button" onClick={() => setPower("38W")}>Choose 38W</button>
            </article>
            <article className={power === "70W" ? "power-card is-selected" : "power-card"}>
              <div className="power-card__top"><span>70W RF</span><span>DEPTH + THROUGHPUT</span></div>
              <h3>More headroom for demanding work.</h3>
              <p>Built for heavier workloads, deeper 3D relief and sharper high-DPI grayscale at speed.</p>
              <ul>
                <li>Visibly deeper 3D relief</li>
                <li>High-DPI grayscale at production speed</li>
                <li>More cutting and workload headroom</li>
              </ul>
              <button type="button" onClick={() => setPower("70W")}>Choose 70W</button>
            </article>
          </div>
        </section>

        <section className="section rf-benefits" id="rf-benefits" data-reveal>
          <div className="section-heading section-heading--center">
            <span className="eyebrow">WHY RF CHANGES THE FINISHED RESULT</span>
            <h2>Professional output, explained simply.</h2>
            <p>Switch between the three RF advantages that matter most in everyday production.</p>
          </div>
          <div className="benefit-tabs" role="tablist" aria-label="RF advantages">
            {rfBenefits.map((benefit, index) => (
              <button type="button" role="tab" aria-selected={activeBenefit === index} className={activeBenefit === index ? "is-active" : ""} key={benefit.id} onClick={() => setActiveBenefit(index)}>
                <span>{String(index + 1).padStart(2, "0")}</span>{benefit.tab}
              </button>
            ))}
          </div>
          <div className="benefit-panel" role="tabpanel">
            <div className="benefit-panel__copy">
              <span className="eyebrow">{rfBenefits[activeBenefit].eyebrow}</span>
              <h3>{rfBenefits[activeBenefit].title}</h3>
              <p>{rfBenefits[activeBenefit].copy}</p>
              <div className="inline-metrics">{rfBenefits[activeBenefit].metrics.map((metric) => <span key={metric}>{metric}</span>)}</div>
            </div>
            <div className="benefit-panel__media">
              <img src={asset(rfBenefits[activeBenefit].image)} alt="" />
              <span>REPLACEABLE RF PROOF MEDIA</span>
            </div>
          </div>
        </section>

        <StickyStory onPlay={openStory} />

        <section className="section workflow" id="workflow" data-reveal>
          <div className="section-heading section-heading--split">
            <div>
              <span className="eyebrow">EASY WORKFLOW</span>
              <h2>Professional control.<br />A shorter learning curve.</h2>
            </div>
            <p>From design to focus to final output, every interaction is designed to remove uncertainty before the job starts.</p>
          </div>
          <div className="workflow-layout">
            <div className="workflow-image">
              <img src={asset("xrf-touchscreen.jpg")} alt="XRF Gen2 integrated touchscreen close-up" />
              <span>Actual XRF Gen2 detail render</span>
            </div>
            <ol className="workflow-steps">
              <li><span>01</span><div><strong>Create</strong><p>Prepare artwork in MakerBoost AI, LightBurn or RDWorks.</p></div></li>
              <li><span>02</span><div><strong>Place</strong><p>Use the lid camera and RedDot positioning to preview your material.</p></div></li>
              <li><span>03</span><div><strong>Focus</strong><p>XFocus automatically moves the head to the detected material height.</p></div></li>
              <li><span>04</span><div><strong>Run</strong><p>Confirm from the touchscreen and monitor status, alerts and faults.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="story-stack" data-reveal>
          <VideoPlaceholder
            eyebrow="BIGGER JOBS"
            title="Start desktop. Take on bigger jobs."
            copy="A 24 × 12 inch workspace handles everyday stock. Optional Riser Base, Rotary and Conveyor accessories open tall objects, cylinders and continuous long-format work."
            image={asset("xrf-hero.jpg")}
            onPlay={() => openStory("BIGGER JOBS", "Start desktop. Take on bigger jobs.", asset("xrf-hero.jpg"))}
          >
            <div className="inline-metrics"><span>24 × 12 in</span><span>8.5 in height with optional Riser</span><span>Unlimited length workflow</span></div>
          </VideoPlaceholder>

          <VideoPlaceholder
            eyebrow="CLEANER PRODUCTION"
            title="Cleaner results. A better place to work."
            copy="Flow-matched dual exhaust channels triple extraction capacity, while FumeGuard monitors fumes inside the fully enclosed machine. Optional Smart Air automatically matches airflow to cutting or engraving."
            image={asset("xrf-front.jpg")}
            onPlay={() => openStory("CLEANER PRODUCTION", "Cleaner results. A better place to work.", asset("xrf-front.jpg"))}
          >
            <div className="inline-metrics"><span>3× extraction architecture</span><span>FumeGuard monitoring</span><span>Optional Smart Air</span></div>
          </VideoPlaceholder>
        </section>

        <section className="section reliability" id="reliability" data-reveal>
          <div className="section-heading section-heading--center">
            <span className="eyebrow">ENGINEERED FOR RELIABILITY</span>
            <h2>Less maintenance. More making.</h2>
            <p>The engineering details work together to reduce cleaning interruptions, field alignment and unexpected downtime.</p>
          </div>
          <div className="reliability-grid">
            <article className="reliability-visual">
              <img src={asset("xrf-ivs.jpg")} alt="Close-up of XRF Gen2 laser head and motion system" />
              <div><span>SEALED OPTICAL ARCHITECTURE</span><h3>Keep dust away from the beam.</h3></div>
            </article>
            <div className="benefit-list">
              <article><span>01</span><div><h3>Tool-free optics care</h3><p>Magnetic QuickSwitch lenses make cleaning and swapping fast.</p></div></article>
              <article><span>02</span><div><h3>Factory-locked geometry</h3><p>The calibrated optical path is designed to stay aligned through normal use.</p></div></article>
              <article><span>03</span><div><h3>Protected focus system</h3><p>Thermal isolation and controlled cable routing keep critical parts away from the processing zone.</p></div></article>
              <article><span>04</span><div><h3>Built for sustained motion</h3><p>Closed-loop motors, all-steel rolling axes and structural reinforcement support daily production.</p></div></article>
            </div>
          </div>
        </section>

        <section className="section safety" id="safety" data-reveal>
          <div className="safety-intro">
            <span className="eyebrow">BUILT-IN PROTECTION</span>
            <h2>Protection built into every job.</h2>
            <p>Safety is treated as an architecture: separation, containment, monitoring and automatic response—not a list of stickers.</p>
          </div>
          <div className="safety-architecture">
            <div className="safety-photo"><img src={asset("xrf-open.jpg")} alt="Open XRF Gen2 showing its enclosed work area" /></div>
            <div className="safety-zones">
              <article><span>WORK ZONE</span><h3>Fully enclosed processing</h3><p>Class 1 laser design and lid interlock prevent operation until sealed.</p></article>
              <article><span>OPTICAL ZONE</span><h3>Isolated and protected</h3><p>Optical and electronic areas are separated from dust and processing heat.</p></article>
              <article><span>RESPONSE ZONE</span><h3>Automatic intervention</h3><p>Thermal alerts stop laser output; the electrical bay includes heat-triggered suppression.</p></article>
            </div>
          </div>
        </section>

        <section className="support-section" id="support" data-reveal>
          <img src={asset("xrf-lifestyle.jpg")} alt="OneLaser customer in a workshop beside XRF Gen2" />
          <div className="support-overlay">
            <span className="eyebrow">ONELASER SUPPORT</span>
            <h2>You’re not buying it alone.</h2>
            <p>US-based engineers with hands-on laser experience help with setup, troubleshooting and long-term support.</p>
            <div className="support-proof">
              <div><strong>3 years</strong><span>Frame & structure</span></div>
              <div><strong>2 years</strong><span>Electronics</span></div>
              <div><strong>1 year</strong><span>Laser source</span></div>
            </div>
            <a href="#faq">Review support details</a>
          </div>
        </section>

        <section className="section configuration" id="configuration" data-reveal>
          <div className="section-heading section-heading--split">
            <div>
              <span className="eyebrow">BUILD YOUR XRF</span>
              <h2>Choose the platform. Add only what you need.</h2>
            </div>
            <p>Configure the same professional XRF Gen2 platform around the work you plan to accept. Every optional item is clearly labeled before it enters your build.</p>
          </div>
          <div className="configurator-layout">
            <div className="configurator-main">
              <div className="configurator-block">
                <div className="configurator-block__heading"><span>01</span><div><h3>Select RF power</h3><p>Both versions use the same XRF Gen2 platform.</p></div></div>
                <div className="package-options">
                  {["38W", "70W"].map((value) => {
                    const is38 = value === "38W";
                    return (
                      <button type="button" key={value} className={power === value ? "package-card is-selected" : "package-card"} onClick={() => setPower(value)}>
                        <div><span>{is38 ? "DETAIL + EVERYDAY PRODUCTION" : "DEPTH + HIGHER THROUGHPUT"}</span><h4>XRF Gen2 {value} RF</h4></div>
                        <div className="package-card__price"><strong>{is38 ? "$3,999" : "$4,499"}</strong><span>{is38 ? "Official current price" : "New product price"}</span></div>
                        <p>{is38 ? "Photo engraving, fine text, signs and balanced studio output." : "Heavier workloads, deeper relief and more production headroom."}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="configurator-block">
                <div className="configurator-block__heading"><span>02</span><div><h3>Optional expansion</h3><p>Select accessories that match the work you plan to accept.</p></div></div>
                <div className="accessory-list">
                  {accessoryOptions.map((item) => {
                    const selected = selectedAccessories.includes(item.id);
                    return (
                      <label className={selected ? "accessory-card is-selected" : "accessory-card"} key={item.id}>
                        <input type="checkbox" checked={selected} onChange={() => toggleAccessory(item.id)} />
                        <img src={asset(item.image)} alt="" />
                        <span><small>OPTIONAL</small><strong>{item.name}</strong><p>{item.use}</p></span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>

            <aside className="configurator-summary">
              <span className="config-label">YOUR CONFIGURATION</span>
              <h3>XRF Gen2 {selectedPower.label}</h3>
              <p>{selectedPower.use}</p>
              <div className="summary-row"><span>Machine</span><strong>{selectedPower.label}</strong></div>
              <div className="summary-row"><span>Optional accessories</span><strong>{selectedAccessories.length || "None"}</strong></div>
              <div className="summary-price"><span>{selectedPower.note}</span><strong>{selectedPower.price}</strong></div>
              <div className="purchase-actions">
                <div className="quantity-control" aria-label="Quantity">
                  <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((value) => Math.max(1, value - 1))}><Minus size={15} /></button>
                  <strong>{quantity}</strong>
                  <button type="button" aria-label="Increase quantity" onClick={() => setQuantity((value) => value + 1)}><Plus size={15} /></button>
                </div>
                <button type="button" className="configurator-cta" onClick={() => setConfigured(true)}>{configured ? "Configuration saved" : "Add to configuration"}</button>
              </div>
              <p className="configurator-assurance">30-Day Guarantee · 3-2-1 Warranty · US-Based Engineer Support</p>
            </aside>
          </div>
        </section>

        <section className="section specs" id="specs" data-reveal>
          <div className="section-heading section-heading--split">
            <div><span className="eyebrow">COMPLETE DETAILS</span><h2>Specifications.</h2></div>
            <p>Core published specifications for the XRF Gen2 platform. Final bundle content and electrical requirements should be confirmed at checkout.</p>
          </div>
          <div className="spec-list">
            {specs.map((group) => <SpecGroup group={group} key={group.title} />)}
          </div>
        </section>

        <section className="section faq" id="faq" data-reveal>
          <div className="faq-heading"><span className="eyebrow">BUYING QUESTIONS</span><h2>Good answers before you commit.</h2></div>
          <div className="faq-list">
            {faqs.map((item, index) => (
              <div className="faq-item" key={item.q}>
                <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                  <span>{item.q}</span><span aria-hidden="true">{openFaq === index ? <Minus size={18} /> : <Plus size={18} />}</span>
                </button>
                {openFaq === index && <p>{item.a}</p>}
              </div>
            ))}
          </div>
        </section>

        <section className="final-cta" data-reveal>
          <img src={asset("xrf-hero.jpg")} alt="XRF Gen2 product render" />
          <div>
            <span className="eyebrow">XRF GEN2</span>
            <h2>Make better products.<br />Grow with confidence.</h2>
            <p>Choose the RF power that fits your work and build the platform around your next stage.</p>
            <button type="button" onClick={configure}>Configure Your XRF</button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <img src={asset("onelaser-logo.png")} alt="OneLaser" />
        <p>XRF Gen2 product-listing prototype. Published claims should be reviewed against final compliance and commercial terms before launch.</p>
        <a href="#top">Back to top</a>
      </footer>

      <div className="sticky-buy" aria-label="Sticky purchase bar">
        <div><strong>{selectedPurchasePackage.name}</strong><span>{purchasePower} RF · {selectedPurchaseAccessories.length ? `${selectedPurchaseAccessories.length} optional item${selectedPurchaseAccessories.length > 1 ? "s" : ""}` : "Standalone configuration"}</span></div>
        <div className="sticky-buy__price"><span><strong>{formatMoney(purchaseTotal)}</strong><del>{formatMoney(purchaseMsrpTotal)}</del></span><button type="button" onClick={() => setPurchaseAdded(true)}>{purchaseAdded ? "Added" : "Add to Cart"}</button></div>
      </div>

      {videoModal && (
        <div className="video-modal" role="dialog" aria-modal="true" aria-label={`${videoModal.title} video placeholder`} onClick={() => setVideoModal(null)}>
          <div className="video-modal__dialog" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="video-modal__close" aria-label="Close video" onClick={() => setVideoModal(null)}><X size={22} /></button>
            <div className="video-modal__media">
              <img src={videoModal.image} alt="" />
              <span><Play size={26} weight="fill" /></span>
            </div>
            <div className="video-modal__copy">
              <span className="eyebrow">{videoModal.eyebrow}</span>
              <h2>{videoModal.title}</h2>
              <p>This replaceable 16:9 slot is ready for the final production video.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
