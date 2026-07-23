import { useEffect, useMemo, useRef, useState } from "react";
import {
  Anchor,
  ArrowClockwise,
  Camera,
  CaretLeft,
  CaretRight,
  Check,
  Crosshair,
  CubeFocus,
  CubeTransparent,
  Fire,
  Handbag,
  LockKey,
  Minus,
  Play,
  Plus,
  ShieldCheck,
  Star,
  Tag,
  Target,
  Thermometer,
  Trash,
  Tree,
  WifiHigh,
  Wine,
  X,
} from "@phosphor-icons/react";
import { CommercialCapabilities } from "./components/CommercialCapabilities.jsx";

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;
const MATERIAL_AUTOPLAY_DELAY = 6000;

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
  {
    src: asset("xrf-overview-video-cover.jpg"),
    alt: "OneLaser XRF Gen2 overview video cover",
    label: "Overview",
    type: "youtube",
    youtubeId: "F1ZJvoeANgk",
  },
];

const materialCategories = [
  {
    id: "acrylic",
    label: "Acrylic",
    title: "Polished edges. Dimensional color.",
    copy: "Build layered signage, displays, organizers and decorative objects with clean contours and premium edge quality.",
    proof: "Clear · colored · layered · dimensional",
    image: "material-acrylic.webp",
    icon: CubeTransparent,
  },
  {
    id: "wood",
    label: "Wood",
    title: "From photo detail to repeatable batches.",
    copy: "Turn natural wood into photo-real engraving, deep relief, architectural parts and products made to sell again and again.",
    proof: "Photo engraving · relief · batch goods · models",
    image: "material-wood.webp",
    icon: Tree,
  },
  {
    id: "leather",
    label: "Leather",
    title: "Personalization that feels permanent.",
    copy: "Create refined wallets, notebooks, straps and tags with consistent tonal contrast and precise cut edges.",
    proof: "Wallets · straps · tags · premium gifts",
    image: "material-leather.webp",
    icon: Handbag,
  },
  {
    id: "glass-stone",
    label: "Glass & Stone",
    title: "Fine marks on hard, high-value surfaces.",
    copy: "Add crisp frosted artwork and detailed personalization to awards, slate, glassware, coasters and polished stone.",
    proof: "Awards · slate · glassware · keepsakes",
    image: "material-glass-stone.webp",
    icon: Wine,
  },
  {
    id: "coated-metal",
    label: "Coated Metal",
    title: "High contrast for everyday production.",
    copy: "Produce detailed tumblers, anodized cards, tags and identification plates with clean, repeatable contrast.",
    proof: "Tumblers · cards · tags · nameplates",
    image: "material-coated-metal.webp",
    icon: Tag,
  },
];

const powerProofs = [
  {
    id: "38W",
    tab: "38W RF",
    eyebrow: "38W RF · FINE DETAIL",
    title: "Fine detail for everyday production.",
    copy: "A precise RF source for photography, fine text, personalization and balanced daily output.",
    proof: "2,000 DPI detail · Air cooled · Up to 30,000 hours",
    image: "power-38w-result.webp",
    alt: "Fine RF engraving detail for 38W everyday production",
  },
  {
    id: "70W",
    tab: "70W RF",
    eyebrow: "70W RF · NEW POWERMAX",
    title: "More headroom for demanding work.",
    copy: "More RF output for deeper relief, high-DPI grayscale at speed and heavier production workloads.",
    proof: "Up to 50 kHz · Deeper relief · More cutting headroom",
    image: "power-70w-result.webp",
    alt: "Deep relief and batch production proof for higher-throughput 70W RF work",
  },
];

const rfAdvantages = [
  {
    id: "detail",
    tab: "Cleaner Detail",
    eyebrow: "CLEANER DETAIL",
    title: "Keep small details sharp—not scorched.",
    copy: "Fine RF pulse control reduces overburn around small text, logos, photos and linework, so every finished piece looks closer to the design on screen.",
    proof: "0.07 mm spot · Up to 2,000 DPI",
    image: "xrf-detail-proof.webp",
    alt: "Close-up proof of fine RF engraving detail on XRF Gen2",
    icon: Target,
  },
  {
    id: "speed",
    tab: "Faster Response",
    eyebrow: "FASTER RESPONSE",
    title: "Move faster without leaving quality behind.",
    copy: "RF energy switches on and off quickly, helping XRF hold clean edges and consistent contrast through real engraving work at up to 1,300 mm/s.",
    proof: "1,300 mm/s · True 3.5G",
    image: "xrf-internal-wide.jpg",
    alt: "XRF Gen2 motion system built for fast, controlled engraving",
    icon: ArrowClockwise,
  },
  {
    id: "lifespan",
    tab: "Longer Lifespan",
    eyebrow: "LONGER LIFESPAN",
    title: "Make more before the source needs attention.",
    copy: "An air-cooled RF source rated for up to 30,000 hours keeps daily production simpler, with no water chiller and more time for the work makers want to ship.",
    proof: "Up to 30,000 hours · Air cooled",
    image: "xrf-dark-hero.webp",
    alt: "XRF Gen2 RF platform shown in a professional workshop setting",
    icon: ShieldCheck,
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
  decisionVideos.business,
  decisionVideos.businessFit,
  decisionVideos.performance,
  { id: "jNaj50MkKiE", title: "“I was wrong about OneLaser.”", channel: "Make or Break Shop", tag: "LONG-TERM PERSPECTIVE" },
  { id: "hwtVOBUCGxw", title: "Full XRF review", channel: "The Louisiana Hobby Guy", tag: "INDEPENDENT HANDS-ON REVIEW" },
  { id: "87PrP4Vigzo", title: "Before you buy the XRF", channel: "Velf Creations", tag: "COMPLETE BUYER OVERVIEW" },
  { id: "zHtW_nGm19U", title: "Pro desktop laser at a budget price", channel: "Make or Break Shop", tag: "CREATOR REVIEW" },
  { id: "yB_RQwZj5p8", title: "Mark Ellis reviews XRF Desktop at CES 2025", channel: "OneLaser", tag: "CES 2025 THIRD-PARTY PROOF" },
];

const capabilityChapters = [
  {
    id: "precision",
    nav: "RF Precision",
    title: "Make products worth a closer look.",
    summary: "The RF source turns fine detail, tonal range and dimensional relief into a visible product advantage.",
    spotlights: [
      {
        title: "Photo-real, every time.",
        copy: "Pulse-modulated RF energy through a finer 0.07 mm spot produces crisp small type, photographic grayscale and dimensional relief up to 2,000 DPI—without water cooling.",
        metrics: ["2,000 DPI", "0.07 mm spot", "Up to 30,000 h"],
        image: "power-38w-proof.webp",
      },
    ],
    support: [
      { title: "Tool-free optics care", copy: "Magnetic QuickSwitch™ lenses remove in seconds for fast cleaning and focal-length changes.", image: "xrf-gallery-09.jpg" },
      { title: "Output that stays consistent", copy: "A sealed, factory-calibrated optical path helps the beam arrive true and stay true through daily production.", image: "xrf-detail-proof.webp" },
    ],
    proofs: [
      { value: "Air cooled", label: "No water chiller", icon: Thermometer },
      { value: "≤ 0.01 mm", label: "Repeat positioning", icon: Target },
      { value: "2.5 in", label: "Standard focal lens", icon: CubeFocus },
      { value: "38W / 70W", label: "Equal-fit RF options", icon: Fire },
    ],
    details: ["Optional 2 in lens", "Three-mirror optical path", "3× beam expander"],
  },
  {
    id: "motion",
    nav: "Speed & Motion",
    title: "Turn speed into finished output.",
    summary: "Measured working performance, closed-loop control and an all-steel motion system keep fast jobs useful—not merely fast.",
    spotlights: [
      {
        title: "Measured in real work. Not empty travel.",
        copy: "Real 1,300 mm/s engraving speed and True 3.5G acceleration shorten production time while optimized DSP control keeps the toolpath deliberate.",
        metrics: ["1,300 mm/s", "True 3.5G", "Real engraving conditions"],
        image: "xrf-internal-wide.jpg",
      },
    ],
    support: [
      { title: "High speed with its own feedback loop", copy: "Closed-loop motors monitor position continuously while Hydra-derived steel wheels and embedded steel shafts maintain rigidity, accuracy and service life.", image: "xrf-gallery-07.jpg" },
      { title: "20% lighter laser head", copy: "Less moving mass helps the head settle faster while carrying the integrated vision module.", image: "xrf-gallery-08.jpg" },
    ],
    proofs: [
      { value: "1,300 mm/s", label: "Working speed", icon: ArrowClockwise },
      { value: "True 3.5G", label: "Working acceleration", icon: Anchor },
      { value: "20% lighter", label: "New head design", icon: CubeTransparent },
      { value: "Steel on steel", label: "Hydra-derived axes", icon: ShieldCheck },
    ],
    details: ["Leadshine X/Y motors", "Optimized DSP trajectory", "Position feedback at speed"],
  },
  {
    id: "workflow",
    nav: "Smart Workflow",
    title: "Make every setup decision clearer.",
    summary: "Vision, autofocus and direct machine control reduce the guesswork between an idea and a finished job.",
    spotlights: [
      {
        title: "Print and cut, made easy.",
        copy: "The head-mounted Intelligent Vision System detects registration marks and compensates position and angle in real time—reducing calibration, waste and rework.",
        metrics: ["Mark detection", "Live compensation", "Less material waste"],
        image: "xrf-ivs.jpg",
      },
      {
        title: "Focus and control, in one clear flow.",
        copy: "XFocus™ handles focal distance while the full touchscreen keeps motion, settings, alerts and machine status close at hand.",
        metrics: ["XFocus™ autofocus", "Full touchscreen", "Direct machine control"],
        image: "xrf-touchscreen.jpg",
      },
    ],
    support: [
      { title: "See the full bed", copy: "The 12MP lid camera supports full-frame positioning, contour capture and remote monitoring.", image: "xrf-ivs.jpg" },
      { title: "Control it from the machine", copy: "Adjust motion, job settings and machine status directly from the integrated touchscreen.", image: "xrf-touchscreen.jpg" },
    ],
    proofs: [
      { value: "12MP", label: "Top-cover camera", icon: Camera },
      { value: "Sub-1 mW", label: "RedDot™ alignment", icon: Crosshair },
      { value: "3 ways", label: "WiFi / USB / Ethernet", icon: WifiHigh },
      { value: "Resume", label: "After power returns", icon: ArrowClockwise },
    ],
    details: ["Automatic autofocus", "Real-time status and alerts", "Remote operation and monitoring"],
  },
  {
    id: "expansion",
    nav: "Business Expansion",
    title: "Start desktop. Grow beyond it.",
    summary: "A universal bed, optional height and automatic material handling let the same platform follow a wider product catalog.",
    spotlights: [
      {
        title: "Turn long-format work into one continuous job.",
        copy: "The optional automatic Conveyor feeds material in sync with the job, stitching sections into one continuous result for signs, boards and repeating patterns.",
        metrics: ["Optional Conveyor", "Automatic feed", "Unlimited project length"],
        image: "xrf-dark-hero.webp",
      },
    ],
    support: [
      { title: "One size fits mainstream stock", copy: "The true 24 × 12 in working area handles the material size used across everyday custom-product work.", image: "xrf-work-area-proof.webp" },
      { title: "Optional height for bigger objects", copy: "The optional Riser Base unlocks up to 8.5 in of work height for taller pieces and rotary workflows.", image: "xrf-open.jpg" },
    ],
    proofs: [
      { value: "24 × 12 in", label: "True work area", icon: Target },
      { value: "8.5 in", label: "With optional Riser", icon: CubeFocus },
      { value: "Unlimited", label: "Pass-through length", icon: ArrowClockwise },
      { value: "Optional", label: "Rotary workflow", icon: Anchor },
    ],
    details: ["Optional Riser Base", "Optional Rotary", "Optional Conveyor", "Optional Fume Extractor"],
  },
  {
    id: "protection",
    nav: "Reliability & Safety",
    title: "Run cleaner. Stay protected.",
    summary: "Airflow, containment and protected critical systems work together to reduce residue, maintenance and production risk.",
    spotlights: [
      {
        title: "Right pressure. Every mode. Automatically.",
        copy: "Optional Smart Air changes between high-pressure cutting and low-pressure engraving so edges stay cleaner and fine surface detail keeps its contrast.",
        metrics: ["Optional accessory", "Cut / engrave modes", "Automatic switching"],
        image: "smart-air-proof.webp",
      },
    ],
    feature: {
      title: "Safety is the architecture.",
      copy: "A Class 1 enclosure, lid interlock, isolated electronics bay, thermal response and automatic fire suppression protect the operator and the machine through every job.",
      metrics: ["Class 1 design", "Lid interlock", "Automatic suppression"],
      image: "xrf-open.jpg",
    },
    support: [
      { title: "Dust stays away from the beam", copy: "Sealed optical clearances and a steep-angle nozzle slow residue buildup around critical optics.", image: "xrf-gallery-09.jpg" },
      { title: "FumeGuard™ containment", copy: "A fully enclosed body monitors and channels smoke toward the exhaust path instead of the room.", image: "xrf-front.jpg" },
    ],
    proofs: [
      { value: "3×", label: "Extraction architecture", icon: Fire },
      { value: "Class 1", label: "Enclosed operation", icon: ShieldCheck },
      { value: "< 65 dB", label: "Load-following cooling", icon: Thermometer },
      { value: "Auto stop", label: "Thermal response", icon: LockKey },
    ],
    details: ["Isolated electronics", "Protected focus path", "Debris drawer", "Dual-anchor laser mount", "Zero field alignment"],
  },
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

function CapabilityBrowser({ onPlay }) {
  const [activeChapter, setActiveChapter] = useState(0);
  const chapterRefs = useRef([]);
  const navRef = useRef(null);

  function jumpToNode(node, offset) {
    if (!node) return;
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo({ top: window.scrollY + node.getBoundingClientRect().top - offset, behavior: "auto" });
    requestAnimationFrame(() => { root.style.scrollBehavior = previousBehavior; });
  }

  useEffect(() => {
    const chapters = chapterRefs.current.filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => Math.abs(a.boundingClientRect.top - 150) - Math.abs(b.boundingClientRect.top - 150));
      if (visible[0]) setActiveChapter(Number(visible[0].target.dataset.chapterIndex));
    }, { rootMargin: "-96px 0px -68% 0px", threshold: 0 });

    chapters.forEach((chapter) => observer.observe(chapter));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    const activeButton = nav?.querySelector(`[data-chapter-nav="${activeChapter}"]`);
    if (!nav || !activeButton || window.innerWidth > 760) return;
    nav.scrollTo({
      left: activeButton.offsetLeft - ((nav.clientWidth - activeButton.clientWidth) / 2),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }, [activeChapter]);

  useEffect(() => {
    if (window.location.hash !== "#capability-system") return;
    const alignToCapabilities = () => jumpToNode(document.getElementById("capability-system"), 64);
    const timeout = window.setTimeout(alignToCapabilities, 350);
    window.addEventListener("load", alignToCapabilities, { once: true });
    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("load", alignToCapabilities);
    };
  }, []);

  function selectChapter(index) {
    setActiveChapter(index);
    jumpToNode(chapterRefs.current[index], window.innerWidth <= 760 ? 136 : 100);
  }

  return (
    <section className="capability-scroll" id="capability-system">
      <div className="capability-scroll__layout">
        <nav className="capability-scroll__nav" aria-label="Explore XRF Gen2 advantages" ref={navRef}>
          {capabilityChapters.map((item, index) => (
            <button
              type="button"
              key={item.id}
              className={activeChapter === index ? "is-active" : ""}
              onClick={() => selectChapter(index)}
              aria-current={activeChapter === index ? "step" : undefined}
              data-chapter-nav={index}
            >
              <strong>{item.nav}</strong>
            </button>
          ))}
        </nav>

        <div className="capability-scroll__chapters">
          {capabilityChapters.map((chapter, chapterIndex) => (
            <section
              className="capability-scroll__chapter"
              id={`capability-${chapter.id}`}
              data-chapter-index={chapterIndex}
              ref={(node) => { chapterRefs.current[chapterIndex] = node; }}
              aria-labelledby={`capability-${chapter.id}-title`}
              key={chapter.id}
            >
              <header className="capability-scroll__chapter-heading">
                <small>{chapter.nav}</small>
                <h3 id={`capability-${chapter.id}-title`}>{chapter.title}</h3>
                <p>{chapter.summary}</p>
              </header>

              <div className="capability-scroll__stories">
                {chapter.spotlights.map((spotlight, storyIndex) => (
                  <article className="capability-scroll__story" key={spotlight.title}>
                    <button
                      type="button"
                      className="capability-scroll__media"
                      onClick={() => onPlay(spotlight.title, asset(spotlight.image))}
                      aria-label={`Open ${spotlight.title} full-size media preview`}
                    >
                      <img src={asset(spotlight.image)} alt={`${spotlight.title} XRF Gen2 proof`} />
                      <span className="capability-scroll__play" aria-hidden="true"><Play size={25} weight="fill" /></span>
                      <span className="capability-scroll__media-label"><span>VIDEO STORY · IMAGE PREVIEW</span><span>{String(storyIndex + 1).padStart(2, "0")} / {String(chapter.spotlights.length).padStart(2, "0")}</span></span>
                    </button>
                    <div className="capability-scroll__story-copy">
                      <h4>{spotlight.title}</h4>
                      <p>{spotlight.copy}</p>
                      <div>{spotlight.metrics.map((metric) => <span key={metric}>{metric}</span>)}</div>
                    </div>
                  </article>
                ))}
              </div>

              {chapter.feature && (
                <article className="capability-scroll__feature capability-scroll__story">
                  <button
                    type="button"
                    className="capability-scroll__media"
                    onClick={() => onPlay(chapter.feature.title, asset(chapter.feature.image))}
                    aria-label={`Open ${chapter.feature.title} full-size media preview`}
                  >
                    <img src={asset(chapter.feature.image)} alt={`${chapter.feature.title} XRF Gen2 proof`} />
                    <span className="capability-scroll__play" aria-hidden="true"><Play size={25} weight="fill" /></span>
                    <span className="capability-scroll__media-label"><span>VIDEO STORY · IMAGE PREVIEW</span><span>01 / 01</span></span>
                  </button>
                  <div className="capability-scroll__story-copy">
                    <h4>{chapter.feature.title}</h4>
                    <p>{chapter.feature.copy}</p>
                    <div>{chapter.feature.metrics.map((metric) => <span key={metric}>{metric}</span>)}</div>
                  </div>
                </article>
              )}

              <div className="capability-scroll__support">
                {chapter.support.map((item) => (
                  <article key={item.title}>
                    <img src={asset(item.image)} alt="" />
                    <div><h4>{item.title}</h4><p>{item.copy}</p></div>
                  </article>
                ))}
              </div>

              <div className="capability-scroll__proofs">
                {chapter.proofs.map(({ value, label, icon: Icon }) => (
                  <article key={`${value}-${label}`}>
                    <Icon size={24} weight="regular" aria-hidden="true" />
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </article>
                ))}
              </div>

              <div className="capability-scroll__details" aria-label={`${chapter.nav} additional details`}>
                <span>More built in</span>
                <div>{chapter.details.map((detail) => <span key={detail}>{detail}</span>)}</div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

export function App() {
  const [activeMedia, setActiveMedia] = useState(0);
  const [activeMaterial, setActiveMaterial] = useState(0);
  const [materialPaused, setMaterialPaused] = useState(false);
  const [materialTimerEpoch, setMaterialTimerEpoch] = useState(0);
  const [materialReducedMotion, setMaterialReducedMotion] = useState(() => (
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  ));
  const [activeRfAdvantage, setActiveRfAdvantage] = useState(0);
  const [activePowerProof, setActivePowerProof] = useState(0);
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
  const materialTabRefs = useRef([]);
  const materialTouchStartX = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    materialCategories.forEach(({ image }) => {
      const preload = new Image();
      preload.src = asset(image);
    });
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setMaterialReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (materialReducedMotion || materialPaused) return undefined;
    const timeout = window.setTimeout(() => {
      setActiveMaterial((current) => (current + 1) % materialCategories.length);
    }, MATERIAL_AUTOPLAY_DELAY);
    return () => window.clearTimeout(timeout);
  }, [activeMaterial, materialPaused, materialReducedMotion, materialTimerEpoch]);

  useEffect(() => {
    const revealNodes = [...document.querySelectorAll("[data-reveal]")];
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8%" });
    revealNodes.forEach((node) => revealObserver.observe(node));

    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
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
    if (!youtubeVideo && !videoModal) return undefined;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setYoutubeVideo(null);
        setVideoModal(null);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [youtubeVideo, videoModal]);

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
    if (item.type === "youtube") {
      setYoutubeVideo({
        id: item.youtubeId,
        title: "OneLaser XRF Gen2 overview",
        channel: "OneLaser",
        tag: "XRF GEN2 OVERVIEW",
      });
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

  function selectMaterial(index, { focus = false } = {}) {
    const nextIndex = (index + materialCategories.length) % materialCategories.length;
    setActiveMaterial(nextIndex);
    setMaterialTimerEpoch((current) => current + 1);
    if (focus) materialTabRefs.current[nextIndex]?.focus();
  }

  function resumeMaterialAutoplay() {
    setMaterialPaused(false);
    setMaterialTimerEpoch((current) => current + 1);
  }

  function handleMaterialKeyDown(event, index) {
    const navigationKeys = ["ArrowLeft", "ArrowRight", "Home", "End"];
    if (!navigationKeys.includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === "Home"
      ? 0
      : event.key === "End"
        ? materialCategories.length - 1
        : event.key === "ArrowLeft"
          ? index - 1
          : index + 1;
    selectMaterial(nextIndex, { focus: true });
  }

  function openStory(title, image) {
    setVideoModal({ title, image });
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
      <header className="site-header">
        <a href="#top" className="brand" aria-label="OneLaser home">
          <img src={asset("onelaser-logo.png")} alt="OneLaser" />
        </a>
        <button className="menu-button" type="button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen}>
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav className={menuOpen ? "nav is-open" : "nav"} aria-label="Product navigation">
          <a href="#results" onClick={() => setMenuOpen(false)}>Results</a>
          <a href="#capabilities" onClick={() => setMenuOpen(false)}>Why XRF</a>
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
              {media[activeMedia].type === "youtube" && (
                <button type="button" className="media-play" onClick={() => selectMedia(activeMedia)}>
                  <span><Play size={24} weight="fill" /></span>
                  <strong>XRF Gen2 overview</strong>
                  <small>WATCH VIDEO</small>
                </button>
              )}
            </div>
            <div className="thumbnail-controls">
              <button type="button" className="thumb-arrow" aria-label="Scroll product views left" onClick={() => scrollThumbnails(-1)}><CaretLeft size={20} /></button>
              <div className="thumbnail-row" ref={thumbnailRailRef} aria-label="Product views">
                {media.filter((item) => item.type !== "youtube").map((item, index) => (
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
              <button type="button" className="video-thumbnail" onClick={() => selectMedia(media.length - 1)} aria-label="Play the OneLaser XRF Gen2 overview video">
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
                    <button type="button" className={selected ? "purchase-power is-selected" : "purchase-power"} key={item.id} onClick={() => { setPurchasePower(item.id); setPurchaseAdded(false); }} aria-pressed={selected}>
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

        <section className="feature-overview" id="features" data-reveal>
          <img src={asset("xrf-overview-hero-web.webp")} alt="OneLaser XRF Gen2 in a working studio with finished products and brand proof" />
          <img src={asset("xrf-profit-products-web.webp")} alt="Premium products and example business outputs made with the OneLaser XRF Gen2" />
          <img src={asset("xrf-feature-overview-web.webp")} alt="XRF Gen2 capabilities overview including RF precision, 38W and 70W power, 1,300 millimeters per second motion, IVS, workflow, safety and support" />
        </section>

        <section className="tv-proof" aria-labelledby="tv-proof-title" data-reveal>
          <div className="tv-proof__copy">
            <span className="eyebrow">AS SEEN ON TV</span>
            <h2 id="tv-proof-title">Featured on FOX &amp; Friends Weekend.</h2>
            <p>Discover why OneLaser was featured as a standout tool for makers, creators and small businesses.</p>
            <div className="tv-proof__signals" aria-label="FOX feature highlights">
              <span>As Seen on TV</span><span>FOX &amp; Friends Weekend</span>
            </div>
          </div>
          <button type="button" className="tv-proof__media" onClick={() => setYoutubeVideo(tvFeature)} aria-label="Play the FOX and Friends Weekend OneLaser feature">
            <img src={`https://i.ytimg.com/vi/${tvFeature.id}/maxresdefault.jpg`} alt="FOX and Friends Weekend OneLaser television feature" loading="lazy" />
            <span className="tv-proof__play"><Play size={28} weight="fill" /></span>
            <i>FOX &amp; FRIENDS WEEKEND · VIDEO</i>
          </button>
        </section>

        <CommercialCapabilities asset={asset} />

        <section className="section materials" id="materials" data-reveal>
          <div className="section-heading section-heading--stack">
            <span className="eyebrow">MATERIALS THAT BECOME PRODUCTS</span>
            <h2>One platform. More ways to create value.</h2>
            <p>Explore real product categories XRF Gen2 can turn into premium, repeatable work for gifts, retail and custom orders.</p>
          </div>
          <div
            className="material-gallery"
            role="region"
            aria-roledescription="carousel"
            aria-label="XRF Gen2 finished-product material gallery"
            onMouseEnter={() => setMaterialPaused(true)}
            onMouseLeave={resumeMaterialAutoplay}
            onFocusCapture={() => setMaterialPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) resumeMaterialAutoplay();
            }}
            onTouchStart={(event) => {
              materialTouchStartX.current = event.changedTouches[0]?.clientX ?? null;
              setMaterialPaused(true);
            }}
            onTouchEnd={(event) => {
              const endX = event.changedTouches[0]?.clientX;
              if (materialTouchStartX.current !== null && endX !== undefined) {
                const distance = endX - materialTouchStartX.current;
                if (Math.abs(distance) > 48) selectMaterial(activeMaterial + (distance > 0 ? -1 : 1));
              }
              materialTouchStartX.current = null;
              resumeMaterialAutoplay();
            }}
            onTouchCancel={() => {
              materialTouchStartX.current = null;
              resumeMaterialAutoplay();
            }}
          >
            <div id="material-gallery-stage" className="material-gallery__stage" aria-live={materialPaused ? "polite" : "off"}>
              <img key={materialCategories[activeMaterial].id} src={asset(materialCategories[activeMaterial].image)} alt={`${materialCategories[activeMaterial].label} products created for XRF Gen2 material proof`} />
              <div className="material-gallery__copy">
                <span>{materialCategories[activeMaterial].label}</span>
                <h3>{materialCategories[activeMaterial].title}</h3>
                <p>{materialCategories[activeMaterial].copy}</p>
                <strong>{materialCategories[activeMaterial].proof}</strong>
              </div>
            </div>
            <div className="material-tabs" role="tablist" aria-label="Explore XRF Gen2 material categories">
              {materialCategories.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeMaterial === index}
                    aria-controls="material-gallery-stage"
                    className={activeMaterial === index ? "is-active" : ""}
                    key={item.id}
                    ref={(node) => { materialTabRefs.current[index] = node; }}
                    onClick={() => selectMaterial(index)}
                    onKeyDown={(event) => handleMaterialKeyDown(event, index)}
                  >
                    <span className="material-tab__label"><Icon size={23} weight="regular" aria-hidden="true" /><span>{item.label}</span></span>
                    <small>{String(index + 1).padStart(2, "0")}</small>
                  </button>
                );
              })}
            </div>
            <div className="material-progress" aria-hidden="true">
              <span
                key={`${activeMaterial}-${materialTimerEpoch}`}
                className={materialPaused ? "is-paused" : ""}
                style={{ "--material-progress-duration": `${MATERIAL_AUTOPLAY_DELAY}ms` }}
              />
            </div>
          </div>
        </section>

        <section className="rf-advantages" id="rf-advantages" data-reveal>
          <div className="rf-advantages__inner">
            <header className="rf-advantages__header">
              <span className="eyebrow">WHY RF</span>
              <h2>Why makers choose RF.</h2>
              <p>Cleaner detail, faster response, and up to 30,000 hours of source life—built for products worth making and selling.</p>
            </header>
            <div className="rf-advantages__tabs" role="tablist" aria-label="Explore the advantages of RF laser technology">
              {rfAdvantages.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    type="button"
                    role="tab"
                    id={`rf-tab-${item.id}`}
                    aria-selected={activeRfAdvantage === index}
                    aria-controls="rf-advantage-panel"
                    tabIndex={activeRfAdvantage === index ? 0 : -1}
                    className={activeRfAdvantage === index ? "is-active" : ""}
                    key={item.id}
                    onClick={() => setActiveRfAdvantage(index)}
                    onKeyDown={(event) => {
                      const navigationKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"];
                      if (!navigationKeys.includes(event.key)) return;
                      event.preventDefault();
                      const lastIndex = rfAdvantages.length - 1;
                      const nextIndex = event.key === "Home"
                        ? 0
                        : event.key === "End"
                          ? lastIndex
                          : event.key === "ArrowLeft" || event.key === "ArrowUp"
                            ? (index - 1 + rfAdvantages.length) % rfAdvantages.length
                            : (index + 1) % rfAdvantages.length;
                      setActiveRfAdvantage(nextIndex);
                      event.currentTarget.parentElement
                        ?.querySelectorAll('[role="tab"]')
                        [nextIndex]?.focus();
                    }}
                  >
                    <Icon size={22} weight={activeRfAdvantage === index ? "bold" : "regular"} aria-hidden="true" />
                    <span>{item.tab}</span>
                  </button>
                );
              })}
            </div>
            <div
              className="rf-advantages__stage"
              id="rf-advantage-panel"
              role="tabpanel"
              aria-labelledby={`rf-tab-${rfAdvantages[activeRfAdvantage].id}`}
              aria-live="polite"
            >
              <div className="rf-advantages__media">
                <img
                  key={rfAdvantages[activeRfAdvantage].id}
                  src={asset(rfAdvantages[activeRfAdvantage].image)}
                  alt={rfAdvantages[activeRfAdvantage].alt}
                />
              </div>
              <div className="rf-advantages__copy">
                <span className="eyebrow">{rfAdvantages[activeRfAdvantage].eyebrow}</span>
                <h3>{rfAdvantages[activeRfAdvantage].title}</h3>
                <p>{rfAdvantages[activeRfAdvantage].copy}</p>
                <strong>{rfAdvantages[activeRfAdvantage].proof}</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="power-guide" id="power-guide" data-reveal>
          <div className="power-guide__inner">
            <div className="section-heading section-heading--left">
              <span className="eyebrow">TWO PURPOSE-BUILT RF OPTIONS</span>
              <h2>Choose the power that fits your work.</h2>
              <p>38W and 70W share the same professional platform. Explore the result each RF source is designed to produce.</p>
            </div>
            <div className="power-switch" role="tablist" aria-label="Explore 38W and 70W RF results">
              {powerProofs.map((item, index) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={activePowerProof === index}
                  className={activePowerProof === index ? "is-active" : ""}
                  key={item.id}
                  onClick={() => setActivePowerProof(index)}
                >
                  {item.tab}
                </button>
              ))}
            </div>
            <div className="power-proof-stage" aria-live="polite">
              <div className="power-proof-stage__media">
                <img key={powerProofs[activePowerProof].id} src={asset(powerProofs[activePowerProof].image)} alt={powerProofs[activePowerProof].alt} />
              </div>
              <div className="power-proof-stage__copy">
                <span className="eyebrow">{powerProofs[activePowerProof].eyebrow}</span>
                <h3>{powerProofs[activePowerProof].title}</h3>
                <p>{powerProofs[activePowerProof].copy}</p>
                <strong>{powerProofs[activePowerProof].proof}</strong>
              </div>
            </div>
          </div>
        </section>

        <CapabilityBrowser onPlay={openStory} />

        <section className="makerboost-proof" id="makerboost" data-reveal>
          <div className="makerboost-proof__inner">
            <div className="makerboost-proof__intro">
              <header className="makerboost-proof__header">
                <span className="eyebrow">MAKERBOOST AI SOFTWARE</span>
                <h2>&quot;Out of the box, into creation.&quot;</h2>
              </header>
              <div className="makerboost-proof__copy">
                <p className="makerboost-proof__subhead">MakerBoost AI Software — Deeply Tuned for XRF, Zero Learning Curve</p>
                <p className="makerboost-proof__body">MakerBoost AI is deeply integrated with the XRF platform — one-click AI vector generation and a material-matched parameter library take first-time users from unboxing to finished work in minutes.</p>
              </div>
            </div>
            <div className="makerboost-proof__media">
              <img src={asset("software-makerboost.webp")} alt="MakerBoost AI software identity artwork" />
            </div>
          </div>
        </section>

        <section className="software-compatibility" id="software" data-reveal>
          <div className="software-compatibility__inner">
            <header className="software-compatibility__header">
              <span className="eyebrow">SOFTWARE</span>
              <h2>&quot;Your software. Your way.&quot;</h2>
            </header>
            <article className="software-compatibility__stage">
              <div className="software-compatibility__copy">
                <p className="software-compatibility__subhead">LightBurn / RDWorks / MakerBoost Compatible</p>
                <p className="software-compatibility__body">Works with LightBurn, RDWorks, and MakerBoost AI — supporting formats including AI, PDF, DXF, HPGL, PLT, RD, SVG, LBRN, BMP, JPG, PNG, GIF, TIFF and more.</p>
              </div>
              <div className="software-compatibility__media">
                <img src={asset("software-compatibility.webp")} alt="LightBurn and RDWorks software compatibility shown on a laptop" />
              </div>
            </article>
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
              <span className="eyebrow">CUSTOMER SUCCESS · INDEPENDENT REVIEWS</span>
              <h2 id="review-proof-title">Real stories. Real results.</h2>
              <p>Hear from customers building with XRF and creators who tested OneLaser machines in real workshops.</p>
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

        <section className="sales-video sales-video--facility" data-reveal>
          <YouTubeCover video={decisionVideos.facility} onPlay={setYoutubeVideo} />
          <div className="sales-video__copy">
            <span className="eyebrow">ENGINEERING YOU CAN SEE</span>
            <h2>Built behind the product.</h2>
            <p>See the production capability, quality process and parts readiness behind every OneLaser machine.</p>
            <dl className="comparison-proof">
              <div><dt>Facility</dt><dd>Expanded production capacity</dd></div>
              <div><dt>Assembly</dt><dd>Built and tuned by OneLaser</dd></div>
              <div><dt>Quality control</dt><dd>Checked before delivery</dd></div>
              <div><dt>Parts readiness</dt><dd>Support beyond setup</dd></div>
            </dl>
          </div>
        </section>

        <section className="ownership-support" id="support" data-reveal>
          <div className="ownership-support__inner">
            <div className="ownership-support__grid">
              <article className="ownership-support__card">
                <div className="ownership-support__card-top"><Check size={26} weight="bold" aria-hidden="true" /><span>01</span></div>
                <div className="ownership-support__lead"><h3>30-Day Money-Back Guarantee.</h3></div>
                <div className="ownership-support__details">
                  <h4>Support 30-Day Satisfaction Guarantee — Try It. Love It. Or Return It.</h4>
                  <p>Take a full 30 days to get to know your XRF. If it's not the right fit for you, just reach out — we'll help you send it back, no hard feelings, no hassle. We'd rather you find the perfect machine than keep one that isn't. (Refunds are issued in full, less a 3% payment processing fee and round-trip shipping costs.)</p>
                </div>
              </article>
              <article className="ownership-support__card">
                <div className="ownership-support__card-top"><ShieldCheck size={26} weight="regular" aria-hidden="true" /><span>02</span></div>
                <div className="ownership-support__lead"><h3>We built it to last. We back it to prove it.</h3></div>
                <div className="ownership-support__details">
                  <h4>3-2-1 Warranty — 3-Year Frame / 2-Year Electronics / 1-Year Laser Source</h4>
                  <p>Every XRF is backed by our 3-2-1 warranty: three years on the frame and structure, two years on electronics, and one year on the laser source — among the strongest coverage in its class. It's not fine print; it's what confidence in our own build quality looks like.</p>
                </div>
              </article>
              <article className="ownership-support__card ownership-support__card--wide">
                <div className="ownership-support__card-top"><Star size={26} weight="regular" aria-hidden="true" /><span>03</span></div>
                <div className="ownership-support__lead"><h3>&quot;One&quot; Support: &quot;Real engineers. Real experience.&quot;</h3></div>
                <div className="ownership-support__details">
                  <h4>US-Based Engineers, 5+ Years Average Industry Experience — Lifetime Support</h4>
                  <p>When you call OneLaser, you talk to a US-based engineer with an average of over five years in the laser industry — people who've built, tuned, and repaired these machines, not script-readers. That experience means faster answers, first-call solutions, and real support. You're not just buying a machine; you're buying the team behind it.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section faq" id="faq" data-reveal>
          <div className="section-heading section-heading--stack faq-heading"><span className="eyebrow">BUYING QUESTIONS</span><h2>Good answers before you commit.</h2></div>
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
