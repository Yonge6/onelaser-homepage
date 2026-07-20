import { useMemo, useState } from "react";

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

const media = [
  { src: asset("xrf-hero.jpg"), alt: "XRF Gen2 closed three-quarter product render", label: "Studio" },
  { src: asset("xrf-open.jpg"), alt: "XRF Gen2 with the lid open", label: "Inside" },
  { src: asset("xrf-front.jpg"), alt: "Front view of XRF Gen2", label: "Front" },
  { src: asset("xrf-ivs.jpg"), alt: "XRF Gen2 intelligent vision system close-up", label: "IVS" },
];

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
      ["True engraving area", "24 × 12 in"],
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

function VideoPlaceholder({ eyebrow, title, copy, image, dark = false, children }) {
  return (
    <article className={`video-story ${dark ? "video-story--dark" : ""}`}>
      <div className="video-story__copy">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{copy}</p>
        {children}
        <button className="text-action" type="button" onClick={() => alert("Video slot ready for final production asset.")}>Watch the story</button>
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
        <span>{open ? "Close" : "Open"}</span>
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

export function App() {
  const [power, setPower] = useState("38W");
  const [activeMedia, setActiveMedia] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [configured, setConfigured] = useState(false);

  const selectedPower = useMemo(
    () => power === "38W"
      ? { label: "38W RF", use: "Fine detail & everyday production", price: "$5,999", note: "Starting price" }
      : { label: "70W RF", use: "Deeper relief & higher throughput", price: "Launch pricing", note: "Request final configuration" },
    [power],
  );

  function configure() {
    setConfigured(true);
    document.getElementById("configuration")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="site-shell">
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
              <div className="media-stage__bar">
                <span>PRODUCT VIEW</span>
                <button type="button" onClick={() => alert("Hero video slot ready for final 18–25 second production asset.")}>Watch 24s overview</button>
              </div>
              <img src={media[activeMedia].src} alt={media[activeMedia].alt} />
              <div className="media-stage__caption">
                <span>Actual XRF Gen2 render</span>
                <span>Gen2 · RF desktop platform</span>
              </div>
            </div>
            <div className="thumbnail-row" aria-label="Product views">
              {media.map((item, index) => (
                <button
                  type="button"
                  key={item.src}
                  className={activeMedia === index ? "thumbnail is-active" : "thumbnail"}
                  onClick={() => setActiveMedia(index)}
                  aria-label={`Show ${item.label} view`}
                >
                  <img src={item.src} alt="" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="purchase-panel">
            <div className="product-kicker">
              <span>NEW · GEN 2</span>
              <span>Professional RF desktop platform</span>
            </div>
            <h1>XRF Gen2</h1>
            <h2>From idea to finished product—faster.</h2>
            <p className="hero-lede">Professional RF precision, controlled 3G motion and intelligent vision—built to create premium products with less setup, less waste and less maintenance.</p>

            <div className="hero-proof" aria-label="Key specifications">
              <span><strong>38W / 70W</strong> RF power</span>
              <span><strong>1,200 mm/s</strong> real work speed</span>
              <span><strong>24 × 12 in</strong> workspace</span>
              <span><strong>30,000 h</strong> rated life</span>
            </div>

            <div className="choice-block">
              <div className="choice-heading">
                <span>Choose your RF power</span>
                <a href="#power-guide">Compare</a>
              </div>
              <div className="power-options">
                {["38W", "70W"].map((value) => (
                  <button type="button" key={value} onClick={() => setPower(value)} className={power === value ? "power-option is-selected" : "power-option"}>
                    <span>{value} RF</span>
                    <small>{value === "38W" ? "Fine detail & everyday production" : "Deeper relief & higher throughput"}</small>
                  </button>
                ))}
              </div>
            </div>

            <div className="price-row">
              <div>
                <span>{selectedPower.note}</span>
                <strong>{selectedPower.price}</strong>
              </div>
              <p>or financing options at checkout<br />Estimated freight from $399</p>
            </div>

            <button type="button" className="primary-cta" onClick={configure}>Configure Your XRF</button>
            <button type="button" className="secondary-cta" onClick={() => document.getElementById("performance")?.scrollIntoView({ behavior: "smooth" })}>See it in action</button>

            <div className="trust-strip">
              <span>30-Day Guarantee</span>
              <span>3-2-1 Warranty</span>
              <span>US-Based Engineers</span>
            </div>
            <p className="optional-note">Smart Air, Riser Base, Conveyor, Rotary and Fume Extractor are optional.</p>
          </div>
        </section>

        <section className="proof-rail" aria-label="XRF Gen2 product proof">
          <div><strong>2,000 DPI</strong><span>Maximum scanning precision</span></div>
          <div><strong>True 3G</strong><span>Controlled acceleration</span></div>
          <div><strong>≤ 0.01 mm</strong><span>Positioning accuracy</span></div>
          <div><strong>Air cooled</strong><span>No water chiller</span></div>
        </section>

        <section className="section results" id="results">
          <div className="section-heading section-heading--split">
            <div>
              <span className="eyebrow">WHAT WILL YOU MAKE NEXT?</span>
              <h2>Made to sell.<br />Built to repeat.</h2>
            </div>
            <p>XRF Gen2 is designed for the products customers notice: crisp photography, readable detail, clean acrylic, premium personalization and repeatable batches.</p>
          </div>
          <div className="application-grid">
            <article className="application-card application-card--large">
              <img src={asset("xrf-lifestyle.jpg")} alt="Maker standing beside XRF Gen2 with finished engraved products" />
              <div><span>REAL-WORLD RANGE</span><h3>One platform. Products people pay for.</h3></div>
            </article>
            <article className="application-card crop-tumbler">
              <img src={asset("xrf-lifestyle.jpg")} alt="Engraved tumbler" />
              <div><span>ROTARY</span><h3>Personalized drinkware</h3></div>
            </article>
            <article className="application-card crop-wood">
              <img src={asset("xrf-lifestyle.jpg")} alt="Engraved wooden sign" />
              <div><span>RF DETAIL</span><h3>Premium wood products</h3></div>
            </article>
            <article className="application-card crop-acrylic">
              <img src={asset("xrf-lifestyle.jpg")} alt="Engraved acrylic award" />
              <div><span>HIGH VALUE</span><h3>Clear acrylic awards</h3></div>
            </article>
          </div>
        </section>

        <section className="section power-guide" id="power-guide">
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

        <section className="story-stack" id="performance">
          <VideoPlaceholder
            eyebrow="RF RESULTS"
            title="Details your customers can see."
            copy="A fine RF spot, pulse-modulated control and stable output preserve small type, grayscale transitions and surface detail—up to 2,000 DPI."
            image={asset("xrf-open.jpg")}
            dark
          >
            <div className="inline-metrics"><span>38W / 70W RF</span><span>Air cooled</span><span>Up to 30,000 hours</span></div>
          </VideoPlaceholder>

          <VideoPlaceholder
            eyebrow="SPEED + CONTROL"
            title="Fast, without losing control."
            copy="Real 1,200 mm/s working speed, True 3G acceleration, closed-loop feedback and Hydra-derived all-steel motion turn speed into finished output—not empty-travel claims."
            image={asset("xrf-internal-wide.jpg")}
          >
            <div className="inline-metrics"><span>1,200 mm/s</span><span>True 3G</span><span>20% lighter head</span></div>
          </VideoPlaceholder>

          <VideoPlaceholder
            eyebrow="IVS PRINT & CUT"
            title="Print. Place. Cut. Done."
            copy="The head-mounted Intelligent Vision System recognizes registration marks and compensates cut placement in real time—reducing manual calibration, misalignment and waste."
            image={asset("xrf-ivs.jpg")}
            dark
          >
            <div className="inline-metrics"><span>Mark-point recognition</span><span>Real-time compensation</span></div>
          </VideoPlaceholder>
        </section>

        <section className="section workflow" id="workflow">
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

        <section className="story-stack">
          <VideoPlaceholder
            eyebrow="BIGGER JOBS"
            title="Start desktop. Take on bigger jobs."
            copy="A 24 × 12 inch workspace handles everyday stock. Optional Riser Base, Rotary and Conveyor accessories open tall objects, cylinders and continuous long-format work."
            image={asset("xrf-hero.jpg")}
            dark
          >
            <div className="inline-metrics"><span>24 × 12 in</span><span>8.5 in height with optional Riser</span><span>Unlimited length workflow</span></div>
          </VideoPlaceholder>

          <VideoPlaceholder
            eyebrow="CLEANER PRODUCTION"
            title="Cleaner results. A better place to work."
            copy="Flow-matched dual exhaust channels triple extraction capacity, while FumeGuard monitors fumes inside the fully enclosed machine. Optional Smart Air automatically matches airflow to cutting or engraving."
            image={asset("xrf-front.jpg")}
          >
            <div className="inline-metrics"><span>3× extraction architecture</span><span>FumeGuard monitoring</span><span>Optional Smart Air</span></div>
          </VideoPlaceholder>
        </section>

        <section className="section reliability">
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

        <section className="section safety" id="safety">
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

        <section className="support-section">
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

        <section className="section configuration" id="configuration">
          <div className="section-heading section-heading--split">
            <div>
              <span className="eyebrow">CONFIGURATION TRANSPARENCY</span>
              <h2>Know exactly what you’re building.</h2>
            </div>
            <p>Optional accessories are always labeled, so the capability you see matches the configuration you buy.</p>
          </div>
          <div className="config-grid">
            <article>
              <span className="config-label">STANDARD PLATFORM</span>
              <h3>XRF Gen2 {selectedPower.label}</h3>
              <ul>
                <li>24 × 12 inch engraving area</li>
                <li>Integrated XFocus autofocus</li>
                <li>Air assist and built-in exhaust fan</li>
                <li>Touch control panel</li>
                <li>WiFi / USB / Ethernet</li>
                <li>LightBurn / MakerBoost / RDWorks support</li>
              </ul>
            </article>
            <article className="config-optional">
              <span className="config-label">OPTIONAL EXPANSION</span>
              <h3>Build for your next job.</h3>
              <ul>
                <li>Smart Air Assist</li>
                <li>Riser Base</li>
                <li>Auto Conveyor</li>
                <li>Rotary accessory</li>
                <li>Filtered Fume Extractor</li>
                <li>1.5 / 2 / 3 inch focal lenses</li>
              </ul>
            </article>
            <aside className="config-summary">
              <span>YOUR STARTING CONFIGURATION</span>
              <strong>{selectedPower.label}</strong>
              <p>{selectedPower.use}</p>
              <div><span>{selectedPower.note}</span><strong>{selectedPower.price}</strong></div>
              <button type="button" onClick={() => setConfigured(true)}>{configured ? "Configuration saved" : "Start configuration"}</button>
            </aside>
          </div>
        </section>

        <section className="section specs" id="specs">
          <div className="section-heading section-heading--split">
            <div><span className="eyebrow">COMPLETE DETAILS</span><h2>Specifications.</h2></div>
            <p>Core published specifications for the XRF Gen2 platform. Final bundle content and electrical requirements should be confirmed at checkout.</p>
          </div>
          <div className="spec-list">
            {specs.map((group) => <SpecGroup group={group} key={group.title} />)}
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="faq-heading"><span className="eyebrow">BUYING QUESTIONS</span><h2>Good answers before you commit.</h2></div>
          <div className="faq-list">
            {faqs.map((item, index) => (
              <div className="faq-item" key={item.q}>
                <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                  <span>{item.q}</span><span>{openFaq === index ? "Close" : "Open"}</span>
                </button>
                {openFaq === index && <p>{item.a}</p>}
              </div>
            ))}
          </div>
        </section>

        <section className="final-cta">
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
        <div><strong>XRF Gen2 · {selectedPower.label}</strong><span>{selectedPower.use}</span></div>
        <div><strong>{selectedPower.price}</strong><button type="button" onClick={configure}>Configure Your XRF</button></div>
      </div>
    </div>
  );
}
