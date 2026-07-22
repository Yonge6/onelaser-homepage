import { useEffect, useMemo, useRef, useState } from "react";
import { CaretLeft, CaretRight, Check, Fire, LockKey, Minus, Play, Plus, ShieldCheck, Star, Thermometer, X } from "@phosphor-icons/react";

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
  ["results", "Results"],
  ["materials", "Materials"],
  ["power-guide", "38W / 70W"],
  ["performance", "Why XRF"],
  ["workflow", "Workflow"],
  ["safety", "Safety"],
  ["specs", "Specs"],
];

const materialCategories = [
  {
    id: "acrylic",
    label: "Acrylic",
    title: "Polished edges. Dimensional color.",
    copy: "Build layered signage, displays, organizers and decorative objects with clean contours and premium edge quality.",
    proof: "Clear · colored · layered · dimensional",
    image: "material-acrylic.webp",
  },
  {
    id: "wood",
    label: "Wood",
    title: "From photo detail to repeatable batches.",
    copy: "Turn natural wood into photo-real engraving, deep relief, architectural parts and products made to sell again and again.",
    proof: "Photo engraving · relief · batch goods · models",
    image: "material-wood.webp",
  },
  {
    id: "leather",
    label: "Leather",
    title: "Personalization that feels permanent.",
    copy: "Create refined wallets, notebooks, straps and tags with consistent tonal contrast and precise cut edges.",
    proof: "Wallets · straps · tags · premium gifts",
    image: "material-leather.webp",
  },
  {
    id: "glass-stone",
    label: "Glass & Stone",
    title: "Fine marks on hard, high-value surfaces.",
    copy: "Add crisp frosted artwork and detailed personalization to awards, slate, glassware, coasters and polished stone.",
    proof: "Awards · slate · glassware · keepsakes",
    image: "material-glass-stone.webp",
  },
  {
    id: "coated-metal",
    label: "Coated Metal",
    title: "High contrast for everyday production.",
    copy: "Produce detailed tumblers, anodized cards, tags and identification plates with clean, repeatable contrast.",
    proof: "Tumblers · cards · tags · nameplates",
    image: "material-coated-metal.webp",
  },
];

const projectEvidence = [
  {
    title: "One machine. A full product line.",
    proof: "Wood · leather · tumblers · acrylic · coated metal",
    copy: "Move from custom gifts to repeatable, premium products without changing platforms.",
    image: "xrf-workshop-story.webp",
    tag: "MADE TO SELL",
    position: "50% 58%",
  },
  {
    title: "More pieces in every setup.",
    proof: "24 × 12 in true production area",
    copy: "The universal material size fits everyday stock and repeatable batch layouts without trimming down the job first.",
    image: "xrf-work-area-proof.webp",
    tag: "BATCH PRODUCTION",
    position: "50% 50%",
  },
  {
    title: "Details your customers can inspect up close.",
    proof: "Up to 2,000 DPI · 0.07 mm RF laser dot",
    copy: "Fine marks, small type and tonal transitions stay crisp enough to make the finished product feel more valuable.",
    image: "xrf-detail-proof.webp",
    tag: "RF PRECISION",
    position: "50% 50%",
  },
  {
    title: "Print. Place. Cut. Done.",
    proof: "IVS mark detection with live compensation",
    copy: "Head-mounted vision corrects position and angle so printed contours need less manual calibration and create less waste.",
    image: "ivs-print-cut-proof.webp",
    tag: "INTELLIGENT VISION",
    position: "50% 50%",
  },
];

const tvFeature = {
  id: "8tn7O69iCnQ",
  title: "Fox News introduces OneLaser as a best holiday DIY gift",
  channel: "FOX & Friends Weekend",
  tag: "AS SEEN ON TV",
};

const decisionVideos = {
  performance: {
    id: "r5m8As2oOJ4",
    title: "We tested a hobby laser against the OneLaser XRF",
    channel: "OneLaser",
    tag: "PERFORMANCE TEST",
  },
  business: {
    id: "WD5has9K3IY",
    title: "From side project to six-figure business",
    channel: "OneLaser Demo Host Program",
    tag: "CUSTOMER SUCCESS",
  },
  businessFit: {
    id: "HOh6qitWLqI",
    title: "Is the XRF right for your business?",
    channel: "Bearded Builds Co",
    tag: "SMALL BUSINESS",
  },
  competitor: {
    id: "C2FDjGpLEDA",
    title: "How do they compare? xTool P2 vs OneLaser XRF",
    channel: "Bearded Builds Co",
    tag: "DIRECT COMPARISON",
  },
  facility: {
    id: "tSroh4OUkX4",
    title: "Inside OneLaser’s expanded production facility",
    channel: "OneLaser",
    tag: "BEHIND ONELASER",
  },
};

const reviewVideos = [
  { id: "jNaj50MkKiE", title: "“I was wrong about OneLaser.”", channel: "Make or Break Shop", tag: "LONG-TERM PERSPECTIVE" },
  { id: "hwtVOBUCGxw", title: "Full XRF review", channel: "The Louisiana Hobby Guy", tag: "INDEPENDENT HANDS-ON REVIEW" },
  { id: "87PrP4Vigzo", title: "Before you buy the XRF", channel: "Velf Creations", tag: "COMPLETE BUYER OVERVIEW" },
  { id: "zHtW_nGm19U", title: "Pro desktop laser at a budget price", channel: "Make or Break Shop", tag: "CREATOR REVIEW" },
  { id: "yB_RQwZj5p8", title: "Mark Ellis reviews XRF Desktop at CES 2025", channel: "OneLaser", tag: "CES 2025 THIRD-PARTY PROOF" },
];

const scrollStories = [
  {
    id: "rf",
    eyebrow: "3D PHOTO REALISTIC RF™",
    title: "Photo-real, every time.",
    copy: "Pulse-modulated RF energy through a finer spot produces photographic grayscale and deep relief up to 2,000 DPI. The sealed source is air-cooled and rated up to 30,000 hours.",
    metrics: ["2,000 DPI", "Air cooled", "Up to 30,000 h"],
    image: "power-38w-proof.webp",
  },
  {
    id: "speed",
    eyebrow: "TRUESPEED",
    title: "Measured in real work. Not empty travel.",
    copy: "Real 1,300 mm/s engraving speed and 3.5G acceleration are controlled by optimized DSP motion, closed-loop feedback, Hydra-derived steel axes and a 20% lighter head.",
    metrics: ["1,300 mm/s", "34,335 mm/s²", "≤ 0.01 mm"],
    image: "xrf-internal-wide.jpg",
  },
  {
    id: "ivs",
    eyebrow: "IVS PRINT & CUT",
    title: "Print and cut, made easy.",
    copy: "The head-mounted Intelligent Vision System detects registration marks and compensates position and angle in real time—reducing calibration, waste and rework.",
    metrics: ["Mark detection", "Live compensation", "Less material waste"],
    image: "ivs-print-cut-proof.webp",
  },
  {
    id: "workflow",
    eyebrow: "ONE TOUCH OF INNOVATION",
    title: "Out of the box, into creation.",
    copy: "MakerBoost AI, the full touchscreen and XFocus autofocus remove setup friction—from one-click vector generation and material parameters to motion, alerts and live machine status.",
    metrics: ["MakerBoost AI", "Full touchscreen", "XFocus autofocus"],
    image: "xrf-touchscreen.jpg",
  },
  {
    id: "expand",
    eyebrow: "ONE CLICK. INFINITE LENGTH",
    title: "Start desktop. Grow beyond it.",
    copy: "A true 24 × 12 inch bed handles everyday stock. Optional Riser Base, Rotary and automatic Conveyor unlock taller, cylindrical and continuous long-format work.",
    metrics: ["24 × 12 in", "8.5 in with optional Riser", "Optional Conveyor"],
    image: "conveyor-proof.webp",
  },
  {
    id: "clean",
    eyebrow: "CLEANER PRODUCTION",
    title: "Right pressure. Every mode. Automatically.",
    copy: "Optional Smart Air switches between high-pressure cutting and low-pressure engraving, while 3× extraction architecture and FumeGuard keep results and the workspace cleaner.",
    metrics: ["Optional Smart Air", "3× extraction", "FumeGuard monitoring"],
    image: "smart-air-proof.webp",
  },
];

const engineeringProofs = [
  { title: "3× extraction", copy: "Flow-matched dual-channel exhaust clears smoke and residue faster.", image: "xrf-front.jpg" },
  { title: "Sealed electronics", copy: "The working area and optical-electrical zones stay isolated from dust.", image: "xrf-open.jpg" },
  { title: "Under 65 dB", copy: "Load-following cooling reduces noise without giving up production power.", image: "xrf-gallery-06.jpg" },
  { title: "Protected focus path", copy: "Cable routing and thermal isolation keep critical parts outside the hot zone.", image: "xrf-gallery-09.jpg" },
];

const microFeatures = [
  ["12MP lid camera", "Full-frame positioning and remote monitoring"],
  ["RedDot™", "Sub-1 mW guided alignment"],
  ["WiFi / USB / Ethernet", "Flexible connected control"],
  ["Power-off resume", "Continue after power returns"],
  ["XFocus™", "Integrated motorized autofocus"],
  ["Debris drawer", "Pull-out cleanup access"],
  ["Zero field alignment", "Factory-calibrated optical path"],
  ["Dual-anchor mount", "Laser-source alignment retention"],
];

const purchasePackages = [
  {
    id: "standalone",
    name: "XRF Standalone",
    price: 3999,
    msrp: 6499,
    badge: "CURRENT OFFER",
    description: "38W RF desktop laser with 1,300 mm/s motion, True 3.5G acceleration and a 24 × 12 in workspace.",
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
      ["Real working speed", "1,300 mm/s"],
      ["Real working acceleration", "3.5G"],
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
    title: "Control & software",
    rows: [
      ["Connectivity", "WiFi / USB / Ethernet"],
      ["Software", "LightBurn / MakerBoost AI / RDWorks"],
      ["Operating systems", "Windows / macOS"],
      ["Control panel", "Integrated full touchscreen"],
      ["Autofocus", "Integrated XFocus™ motorized autofocus"],
    ],
  },
  {
    title: "Machine & electrical",
    rows: [
      ["Standalone size", "1085 × 725 × 268 mm"],
      ["Standalone weight", "127 lb"],
      ["Voltage / frequency", "110–240V AC, 50/60Hz"],
      ["Rated power draw", "672.9W at 115V / 653.5W at 225V"],
    ],
  },
  {
    title: "Optics & safety",
    rows: [
      ["Standard focal lens", "2.5 in"],
      ["Laser safety", "Class 1 design"],
      ["Protection", "Lid interlock / thermal alarm / electrical-bay suppression"],
      ["Positioning", "Top-cover camera / IVS camera / RedDot™"],
    ],
  },
  {
    title: "Optional expansion",
    rows: [
      ["Smart Air Control", "Optional"],
      ["Riser Base", "Optional · up to 8.5 in work height"],
      ["Automatic Conveyor", "Optional · unlimited-length workflow"],
      ["Rotary / Fume Extractor / 2 in lens", "Optional"],
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
        </div>
      </div>
      <div className="immersive-story__steps">
        {scrollStories.map((item, index) => (
          <button
            type="button"
            ref={(node) => { stepRefs.current[index] = node; }}
            className={active === index ? "immersive-story__step is-active" : "immersive-story__step"}
            key={item.id}
            onClick={() => onPlay(item.eyebrow, item.title, asset(item.image))}
            aria-label={`Open ${item.title} video and full image preview`}
          >
            <img src={asset(item.image)} alt={`${item.title} XRF Gen2 feature view`} />
            <span className="immersive-story__play" aria-hidden="true"><Play size={26} weight="fill" /></span>
            <div className="immersive-story__media-label"><span>VIDEO STORY · IMAGE PREVIEW</span><span>{String(index + 1).padStart(2, "0")} / {String(scrollStories.length).padStart(2, "0")}</span></div>
          </button>
        ))}
      </div>
    </section>
  );
}

function YouTubeCover({ video, onPlay, className = "" }) {
  return (
    <button type="button" className={`youtube-cover ${className}`.trim()} onClick={() => onPlay(video)} aria-label={`Play ${video.title} by ${video.channel}`}>
      <img src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt="" loading="lazy" />
      <span className="youtube-cover__play"><Play size={26} weight="fill" /></span>
      <i>{video.tag}</i>
    </button>
  );
}

function ReviewVideoCard({ video, onPlay, index, total }) {
  return (
    <button type="button" className="review-video-card" onClick={() => onPlay(video)} aria-label={`Play ${video.title} by ${video.channel}`}>
      <span className="review-video-card__media">
        <img src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt="" loading="lazy" />
        <span><Play size={22} weight="fill" /></span>
        {index !== undefined && <i>{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</i>}
      </span>
      <span className="review-video-card__copy"><small>{video.tag}</small><strong>{video.title}</strong><span>{video.channel}</span></span>
    </button>
  );
}

export function App() {
  const [power, setPower] = useState("38W");
  const [activeMedia, setActiveMedia] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  const [activeMaterial, setActiveMaterial] = useState(0);
  const [activeFeature, setActiveFeature] = useState("features");
  const [openFaq, setOpenFaq] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedPackageId, setSelectedPackageId] = useState("standalone");
  const [purchasePower, setPurchasePower] = useState("38W");
  const [selectedPurchaseAccessories, setSelectedPurchaseAccessories] = useState([]);
  const [purchaseAdded, setPurchaseAdded] = useState(false);
  const [videoModal, setVideoModal] = useState(null);
  const [youtubeVideo, setYoutubeVideo] = useState(null);
  const thumbnailRailRef = useRef(null);
  const reviewVideoRailRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    materialCategories.forEach(({ image }) => {
      const preload = new Image();
      preload.src = asset(image);
    });
  }, []);

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

  useEffect(() => {
    if (!youtubeVideo) return undefined;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setYoutubeVideo(null);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [youtubeVideo]);

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

  function scrollReviewVideos(direction) {
    reviewVideoRailRef.current?.scrollBy({ left: direction * 420, behavior: "smooth" });
  }

  function openStory(eyebrow, title, image) {
    setVideoModal({ eyebrow, title, image });
  }

  function jumpTo(sectionId) {
    setActiveFeature(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
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
                  <small>VIDEO PREVIEW</small>
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
              <li><strong>1,300 mm/s + True 3.5G:</strong> real working speed with 34,335 mm/s² acceleration.</li>
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
                <strong><span>{formatMoney(selectedPurchasePackage.msrp)}</span> <small>USD</small></strong>
              </div>
            </div>
            <div className="financing-line">
              <strong>0% APR · or as low as $194/mo with Affirm</strong>
              <a href="https://www.1laser.com/pages/financing" target="_blank" rel="noreferrer">See if you qualify <CaretRight size={15} /></a>
            </div>

            <div className="purchase-options" id="purchase-options">
              <div className="purchase-section-heading">
                <div><span>Choose your RF power</span><small>Same platform, tuned for different workloads.</small></div>
              </div>
              <div className="purchase-power-options">
                {[
                  { id: "38W", title: "38W RF", copy: "Fine detail & everyday production" },
                  { id: "70W", title: "70W RF", copy: "Deeper relief & higher throughput", badge: "NEW" },
                ].map((item) => {
                  const selected = purchasePower === item.id;
                  return (
                    <button type="button" className={selected ? "purchase-power is-selected" : "purchase-power"} key={item.id} onClick={() => { setPurchasePower(item.id); setPower(item.id); setPurchaseAdded(false); }} aria-pressed={selected}>
                      <span><strong>{item.title}</strong>{item.badge && <small>{item.badge}</small>}</span>
                      <p>{item.copy}</p>
                    </button>
                  );
                })}
              </div>

              <div className="purchase-section-heading">
                <div><span>Package</span><small>Choose the setup that matches your workspace.</small></div>
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
                        <span><small>{item.badge}</small><strong>{item.name}</strong></span>
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
              <a className="secondary-cta secondary-cta--link secondary-cta--shop" href="https://www.1laser.com/products/onelaser-xrf-desktop-laser-machine" target="_blank" rel="noreferrer">Buy with SHOP</a>
            </div>

          </div>
        </section>

        <nav className="feature-nav" aria-label="Explore XRF Gen2 capabilities">
          <div>
            {featureLinks.map(([sectionId, label]) => (
              <button type="button" key={sectionId} className={activeFeature === sectionId ? "is-active" : ""} onClick={() => jumpTo(sectionId)}>{label}</button>
            ))}
          </div>
        </nav>

        <section className="tv-proof" aria-labelledby="tv-proof-title" data-reveal>
          <div className="tv-proof__copy">
            <span className="eyebrow">AS SEEN ON TV</span>
            <h2 id="tv-proof-title">Featured on FOX &amp; Friends Weekend.</h2>
            <p>Discover why OneLaser was featured as a standout tool for makers, creators and small businesses.</p>
            <div className="tv-proof__signals" aria-label="FOX feature highlights">
              <span>As Seen on TV</span><span>FOX &amp; Friends Weekend</span><span>December 2024</span>
            </div>
          </div>
          <button type="button" className="tv-proof__media" onClick={() => setYoutubeVideo(tvFeature)} aria-label="Play the FOX and Friends Weekend OneLaser feature">
            <img src={`https://i.ytimg.com/vi/${tvFeature.id}/maxresdefault.jpg`} alt="FOX and Friends Weekend OneLaser television feature" loading="lazy" />
            <span className="tv-proof__play"><Play size={28} weight="fill" /></span>
            <i>FOX &amp; FRIENDS WEEKEND · VIDEO</i>
          </button>
        </section>

        <section className="feature-overview" id="features" data-reveal>
          <img src={asset("xrf-dark-hero.webp")} alt="XRF Gen2 RF desktop laser presented in a premium studio environment" />
        </section>

        <section className="sales-video sales-video--performance" data-reveal>
          <YouTubeCover video={decisionVideos.performance} onPlay={setYoutubeVideo} />
          <div className="sales-video__copy">
            <span className="eyebrow">XRF PERFORMANCE PROOF</span>
            <h2>Not just faster. Built for production.</h2>
            <p>See how the XRF compares with a typical hobby laser when speed, detail and repeatability actually matter.</p>
            <div className="sales-video__metrics">
              <span><strong>1,300 mm/s</strong>Real working speed</span>
              <span><strong>True 3.5G</strong>Controlled acceleration</span>
              <span><strong>38W RF</strong>Fine-detail metal tube</span>
              <span><strong>Repeatable</strong>Production-ready output</span>
            </div>
          </div>
        </section>

        <section className="section results" id="results" data-reveal>
          <div className="section-heading section-heading--stack">
            <span className="eyebrow">WHAT WILL YOU MAKE NEXT?</span>
            <h2>Made to sell. Built to repeat.</h2>
            <p>Start with the finished work customers pay for. Then trace every result back to the RF source, controlled motion and workflow that make it repeatable.</p>
          </div>
          <div className="project-showcase">
            <div className="project-visual">
              <img src={asset(projectEvidence[activeProject].image)} alt={projectEvidence[activeProject].title} style={{ objectPosition: projectEvidence[activeProject].position }} />
              <span>PROJECT PROOF · {String(activeProject + 1).padStart(2, "0")}/{String(projectEvidence.length).padStart(2, "0")}</span>
            </div>
            <div className="project-content">
              <span className="eyebrow">{projectEvidence[activeProject].tag}</span>
              <h3>{projectEvidence[activeProject].title}</h3>
              <p>{projectEvidence[activeProject].copy}</p>
              <strong className="project-proof">{projectEvidence[activeProject].proof}</strong>
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

        <section className="section materials" id="materials" data-reveal>
          <div className="section-heading section-heading--stack">
            <span className="eyebrow">MATERIALS THAT BECOME PRODUCTS</span>
            <h2>One platform. More ways to create value.</h2>
            <p>Explore real product categories XRF Gen2 can turn into premium, repeatable work for gifts, retail and custom orders.</p>
          </div>
          <div className="material-gallery">
            <div className="material-gallery__stage" aria-live="polite">
              <img key={materialCategories[activeMaterial].id} src={asset(materialCategories[activeMaterial].image)} alt={`${materialCategories[activeMaterial].label} products created for XRF Gen2 material proof`} />
              <div className="material-gallery__copy">
                <span>{materialCategories[activeMaterial].label}</span>
                <h3>{materialCategories[activeMaterial].title}</h3>
                <p>{materialCategories[activeMaterial].copy}</p>
                <strong>{materialCategories[activeMaterial].proof}</strong>
              </div>
            </div>
            <div className="material-tabs" role="tablist" aria-label="Explore XRF Gen2 material categories">
              {materialCategories.map((item, index) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeMaterial === index}
                  className={activeMaterial === index ? "is-active" : ""}
                  key={item.id}
                  onClick={() => setActiveMaterial(index)}
                >
                  <span>{item.label}</span>
                  <small>{String(index + 1).padStart(2, "0")}</small>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="business-proof" id="business-proof" data-reveal>
          <div className="section-heading section-heading--stack">
            <span className="eyebrow">CUSTOMER SUCCESS</span>
            <h2>Built to build a business.</h2>
            <p>More than a creative tool&mdash;the XRF is designed to support real products, real orders and growing businesses.</p>
          </div>
          <div className="business-proof__grid">
            <article className="business-proof__card">
              <YouTubeCover video={decisionVideos.business} onPlay={setYoutubeVideo} />
              <div><span className="eyebrow">FROM SIDE PROJECT TO SIX-FIGURE BUSINESS</span><h3>See how one maker built around real customer orders.</h3><p>A OneLaser customer turned laser production into a growing business and a more repeatable workflow.</p></div>
            </article>
            <article className="business-proof__card">
              <YouTubeCover video={decisionVideos.businessFit} onPlay={setYoutubeVideo} />
              <div><span className="eyebrow">SMALL BUSINESS · PRODUCTION</span><h3>Is the XRF right for your business?</h3><p>A buyer-focused view of fit, workflow and production potential.</p></div>
            </article>
          </div>
          <small className="business-proof__disclaimer">Individual results vary. Business success depends on products, pricing, marketing, demand and execution.</small>
        </section>

        <section className="section power-guide" id="power-guide" data-reveal>
          <div className="section-heading section-heading--left">
            <span className="eyebrow">TWO PURPOSE-BUILT RF OPTIONS</span>
            <h2>Choose the power that fits your work.</h2>
            <p>38W and 70W share the same professional platform. Your workload decides the right fit.</p>
          </div>
          <div className="power-compare">
            <button type="button" className={power === "38W" ? "power-card is-selected" : "power-card"} onClick={() => { setPower("38W"); setPurchasePower("38W"); }} aria-pressed={power === "38W"}>
              <span className="power-card__media"><img src={asset("power-38w-proof.webp")} alt="Fine RF engraving detail for 38W everyday production" /><i>38W RF · FINE DETAIL</i></span>
              <span className="power-card__body">
                <span className="power-card__top"><strong>38W RF</strong></span>
                <strong className="power-card__title">Fine detail for everyday production.</strong>
                <span className="power-card__use">Photography · fine text · personalization · balanced daily output</span>
                <span className="power-card__proofs"><i>2,000 DPI detail</i><i>Air cooled</i><i>Up to 30,000 h</i></span>
              </span>
            </button>
            <button type="button" className={power === "70W" ? "power-card is-selected" : "power-card"} onClick={() => { setPower("70W"); setPurchasePower("70W"); }} aria-pressed={power === "70W"}>
              <span className="power-card__media"><img src={asset("power-70w-proof.webp")} alt="Deep relief and batch production proof for higher-throughput 70W RF work" /><i>70W RF · NEW POWERMAX</i></span>
              <span className="power-card__body">
                <span className="power-card__top"><strong>70W RF</strong></span>
                <strong className="power-card__title">More headroom for demanding work.</strong>
                <span className="power-card__use">Deeper 3D relief · high-DPI grayscale at speed · heavier workloads</span>
                <span className="power-card__proofs"><i>Up to 50 kHz</i><i>Deeper relief</i><i>More cutting headroom</i></span>
              </span>
            </button>
          </div>
        </section>

        <StickyStory onPlay={openStory} />

        <section className="section workflow" id="workflow" data-reveal>
          <div className="section-heading section-heading--stack">
            <span className="eyebrow">ONE TOUCH OF INNOVATION</span>
            <h2>Four decisions from design to done.</h2>
            <p>MakerBoost AI, the lid camera, XFocus and the full touchscreen turn a professional RF workflow into four clear decisions.</p>
          </div>
          <div className="workflow-layout">
            <div className="workflow-image">
              <img src={asset("xrf-touchscreen.jpg")} alt="XRF Gen2 integrated touchscreen close-up" />
              <span>FULL TOUCHSCREEN · MOTION · ALERTS · STATUS</span>
            </div>
            <ol className="workflow-steps">
              <li><span>01</span><div><strong>Create</strong><p>Generate vectors and match material parameters in MakerBoost AI, or work in LightBurn and RDWorks.</p></div></li>
              <li><span>02</span><div><strong>Place</strong><p>Use the 12MP lid camera and RedDot™ positioning to align artwork before material is spent.</p></div></li>
              <li><span>03</span><div><strong>Focus</strong><p>XFocus™ moves the head to the detected material height automatically.</p></div></li>
              <li><span>04</span><div><strong>Run</strong><p>Move the head, adjust parameters and read status, alarms and faults from the touchscreen.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="section reliability" id="reliability" data-reveal>
          <div className="section-heading section-heading--left">
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

        <section className="proof-system" data-reveal>
          <div className="proof-system__heading">
            <span className="eyebrow">ENGINEERING PROOF</span>
            <h2>Small systems. One steadier machine.</h2>
            <p>Each compact system removes a real source of residue, noise, drift or risk.</p>
          </div>
          <div className="proof-system__grid">
            {engineeringProofs.map((item, index) => (
              <article key={item.title}>
                <div><img src={asset(item.image)} alt="" /></div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section safety" id="safety" data-reveal>
          <div className="safety-intro">
            <span className="eyebrow">BUILT-IN PROTECTION</span>
            <h2>Protection built into every job.</h2>
            <p>Safety is treated as an architecture: separation, containment, monitoring and automatic response—not a list of stickers.</p>
          </div>
          <div className="safety-stage"><img src={asset("xrf-open.jpg")} alt="Open XRF Gen2 showing its enclosed Class 1 work area" /></div>
          <div className="safety-proof-grid">
            <article><ShieldCheck size={28} weight="regular" /><div><h3>Class 1 enclosure</h3><p>A fully enclosed processing zone keeps normal operation contained.</p></div></article>
            <article><LockKey size={28} weight="regular" /><div><h3>Lid interlock</h3><p>Opening the lid stops laser operation until the machine is safely sealed.</p></div></article>
            <article><Fire size={28} weight="regular" /><div><h3>Automatic suppression</h3><p>The isolated electrical bay includes heat-triggered fire suppression.</p></div></article>
            <article><Thermometer size={28} weight="regular" /><div><h3>Thermal response</h3><p>High-temperature detection raises an alert and stops laser output.</p></div></article>
          </div>
        </section>

        <section className="micro-features" aria-label="Additional XRF Gen2 features" data-reveal>
          <div className="micro-features__intro"><span className="eyebrow">MORE DETAILS, LESS NOISE</span><h2>Everything else, exactly where it belongs.</h2></div>
          <div className="micro-features__rail">
            {microFeatures.map(([title, copy], index) => (
              <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><strong>{title}</strong><p>{copy}</p></article>
            ))}
          </div>
        </section>

        <section className="section specs" id="specs" data-reveal>
          <div className="section-heading section-heading--stack">
            <span className="eyebrow">COMPLETE DETAILS</span><h2>Specifications.</h2>
            <p>Core published specifications for the XRF Gen2 platform. Final bundle content and electrical requirements should be confirmed at checkout.</p>
          </div>
          <div className="spec-list">
            {specs.map((group) => <SpecGroup group={group} key={group.title} />)}
          </div>
        </section>

        <section className="review-proof" id="reviews" aria-labelledby="review-proof-title" data-reveal>
          <div className="review-proof__header">
            <div className="section-heading section-heading--stack">
              <span className="eyebrow">INDEPENDENT WORKSHOP REVIEWS</span>
              <h2 id="review-proof-title">Real reviews. Real results.</h2>
              <p>Hear from creators who tested OneLaser machines in real workshops and production environments.</p>
            </div>
            <div className="review-proof__controls" aria-label="Browse creator reviews">
              <button type="button" onClick={() => scrollReviewVideos(-1)} aria-label="Show previous creator reviews"><CaretLeft size={22} /></button>
              <button type="button" onClick={() => scrollReviewVideos(1)} aria-label="Show more creator reviews"><CaretRight size={22} /></button>
            </div>
          </div>
          <div className="review-proof__rail" ref={reviewVideoRailRef}>
            {reviewVideos.map((video, index) => <ReviewVideoCard video={video} onPlay={setYoutubeVideo} index={index} total={reviewVideos.length} key={video.id} />)}
          </div>
        </section>

        <section className="sales-video sales-video--competitor" id="comparison-proof" data-reveal>
          <YouTubeCover video={decisionVideos.competitor} onPlay={setYoutubeVideo} />
          <div className="sales-video__copy">
            <span className="eyebrow">A FAIR SIDE-BY-SIDE</span>
            <h2>Considering an xTool P2? Watch this first.</h2>
            <p>See how the OneLaser XRF compares when speed, detail, laser source and production workflow matter.</p>
            <dl className="comparison-proof">
              <div><dt>Laser source</dt><dd>RF metal tube for fine detail and consistent output</dd></div>
              <div><dt>Throughput</dt><dd>Built for higher-speed repeatable production</dd></div>
              <div><dt>Cooling</dt><dd>Air-cooled RF architecture</dd></div>
              <div><dt>Workflow</dt><dd>Designed for serious makers and growing businesses</dd></div>
            </dl>
            <blockquote>Hobby machines help you start creating. The XRF is designed to help you keep producing.</blockquote>
          </div>
        </section>

        <section className="facility-trust" data-reveal>
          <YouTubeCover video={decisionVideos.facility} onPlay={setYoutubeVideo} />
          <div className="facility-trust__copy"><span className="eyebrow">ENGINEERING YOU CAN SEE</span><h2>Support you can reach.</h2><p>See the production capability behind the machine, then stay supported through ownership.</p></div>
          <div className="facility-trust__proofs"><span>3-Year Warranty</span><span>Technical Support</span><span>Replacement Parts</span><span>Knowledge Base</span></div>
        </section>

        <section className="support-section" id="support" data-reveal>
          <img src={asset("xrf-workshop-story.webp")} alt="OneLaser customer in a workshop beside XRF Gen2 and finished products" />
          <div className="support-overlay">
            <span className="eyebrow">ONE SUPPORT</span>
            <h2>Real engineers.<br />Real experience.</h2>
            <p>US-based engineers with 5+ years of average laser-industry experience help with setup, troubleshooting and long-term production support.</p>
            <div className="support-proof">
              <div><strong>30 days</strong><span>Satisfaction period*</span></div>
              <div><strong>3–2–1</strong><span>Warranty structure</span></div>
              <div><strong>US based</strong><span>Engineer support</span></div>
            </div>
            <a href="#faq">Review support details</a>
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
          <img src={asset("xrf-dark-hero.webp")} alt="XRF Gen2 product render" />
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
        <p>Professional RF production for creators, studios and growing custom-product businesses.</p>
        <a href="#top">Back to top</a>
      </footer>

      <div className="sticky-buy" aria-label="Sticky purchase bar">
        <div><strong>{selectedPurchasePackage.name}</strong><span>{purchasePower} RF · {selectedPurchaseAccessories.length ? `${selectedPurchaseAccessories.length} optional item${selectedPurchaseAccessories.length > 1 ? "s" : ""}` : "Standalone configuration"}</span></div>
        <div className="sticky-buy__price"><span><strong>{formatMoney(purchaseTotal)}</strong><del>{formatMoney(purchaseMsrpTotal)}</del></span><button type="button" onClick={() => setPurchaseAdded(true)}>{purchaseAdded ? "Added" : "Add to Cart"}</button></div>
      </div>

      {videoModal && (
        <div className="video-modal" role="dialog" aria-modal="true" aria-label={`${videoModal.title} media preview`} onClick={() => setVideoModal(null)}>
          <div className="video-modal__dialog" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="video-modal__close" aria-label="Close media preview" onClick={() => setVideoModal(null)}><X size={22} /></button>
            <div className="video-modal__media">
              <img src={videoModal.image} alt="" />
              <span><Play size={26} weight="fill" /></span>
            </div>
            <div className="video-modal__copy">
              <span className="eyebrow">{videoModal.eyebrow}</span>
              <h2>{videoModal.title}</h2>
              <p>Full-size 16:9 media preview. The final production video can replace this image without changing the story layout.</p>
            </div>
          </div>
        </div>
      )}

      {youtubeVideo && (
        <div className="youtube-modal" role="dialog" aria-modal="true" aria-label={`${youtubeVideo.title} YouTube video`} onClick={() => setYoutubeVideo(null)}>
          <div className="youtube-modal__dialog" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="youtube-modal__close" aria-label="Close YouTube video" onClick={() => setYoutubeVideo(null)}><X size={23} /></button>
            <div className="youtube-modal__player">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${youtubeVideo.id}?autoplay=1&rel=0&modestbranding=1`}
                title={youtubeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="youtube-modal__copy"><span className="eyebrow">{youtubeVideo.tag}</span><h2>{youtubeVideo.title}</h2><p>{youtubeVideo.channel} · YouTube</p></div>
          </div>
        </div>
      )}
    </div>
  );
}
