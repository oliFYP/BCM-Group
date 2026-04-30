import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LanguageProvider } from "./i18n/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// ── Scroll to top on route change ─────────────────────────
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// ── Construction spark burst ───────────────────────────────
// Colors inspired by metal grinding / arc welding
const SPARK_COLORS = [
  "#ffffff",   // white-hot core
  "#ffe566",   // bright yellow
  "#ffb030",   // molten orange
  "#ff6b00",   // deep orange
  "#ff4422",   // orange-red
  "#c8161d",   // BCM red
];

function fireSparkBurst(cx: number, cy: number) {
  // Root wrapper fixed at click point
  const wrap = document.createElement("div");
  wrap.setAttribute("aria-hidden", "true");
  wrap.style.cssText = [
    "position:fixed",
    `left:${cx}px`,
    `top:${cy}px`,
    "pointer-events:none",
    "z-index:9999",
    "width:0",
    "height:0",
    "overflow:visible",
  ].join(";");

  // ── Impact flash ─────────────────────────────────────────
  const flash = document.createElement("div");
  flash.style.cssText =
    "position:absolute;width:1px;height:1px;border-radius:50%;";
  flash.animate(
    [
      {
        boxShadow:
          "0 0 0px 0px rgba(255,180,50,0), 0 0 0px 0px rgba(200,22,29,0)",
        opacity: 1,
      },
      {
        boxShadow:
          "0 0 20px 12px rgba(255,180,50,0.85), 0 0 40px 20px rgba(200,22,29,0.4)",
        opacity: 1,
        offset: 0.15,
      },
      {
        boxShadow:
          "0 0 40px 30px rgba(255,160,40,0), 0 0 60px 40px rgba(200,22,29,0)",
        opacity: 0,
      },
    ],
    { duration: 350, easing: "ease-out", fill: "forwards" }
  );
  wrap.appendChild(flash);

  // ── Shockwave ring ───────────────────────────────────────
  const ring = document.createElement("div");
  ring.style.cssText = [
    "position:absolute",
    "width:8px",
    "height:8px",
    "margin:-4px",
    "border:2px solid rgba(200,22,29,0.85)",
    "border-radius:50%",
  ].join(";");
  ring.animate(
    [
      { transform: "scale(0)", opacity: 0.9 },
      { transform: "scale(10)", opacity: 0 },
    ],
    { duration: 520, easing: "cubic-bezier(0,0.6,0.4,1)", fill: "forwards" }
  );
  wrap.appendChild(ring);

  // Second, fainter ring with slight delay
  const ring2 = document.createElement("div");
  ring2.style.cssText = ring.style.cssText.replace(
    "rgba(200,22,29,0.85)",
    "rgba(255,160,40,0.5)"
  );
  ring2.animate(
    [
      { transform: "scale(0)", opacity: 0.6 },
      { transform: "scale(14)", opacity: 0 },
    ],
    { duration: 650, delay: 60, easing: "cubic-bezier(0,0.5,0.4,1)", fill: "forwards" }
  );
  wrap.appendChild(ring2);

  // ── Spark particles ──────────────────────────────────────
  const N = 20;
  for (let i = 0; i < N; i++) {
    // Spread evenly around 360° with jitter
    const baseAngle = (360 / N) * i;
    const jitter = (Math.random() - 0.5) * (360 / N) * 0.9;
    const angle = baseAngle + jitter;
    const rad = (angle * Math.PI) / 180;

    const speed = 45 + Math.random() * 90;
    const gravity = 25 + Math.random() * 55; // downward pull (construction = heavy)

    // Final position: radial + gravity
    const tx = Math.cos(rad) * speed;
    const ty = Math.sin(rad) * speed + gravity;

    // Particle shape: elongated streak (taller than wide)
    const w = 1.5 + Math.random() * 2;
    const h = w * (2.5 + Math.random() * 2.5); // streak ratio
    const color = SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)];
    const dur = 380 + Math.random() * 320;
    const delay = Math.random() * 70;

    // Rotate streak to point along travel direction
    const travelAngle = (Math.atan2(ty, tx) * 180) / Math.PI - 90;

    const spark = document.createElement("div");
    spark.style.cssText = [
      "position:absolute",
      `width:${w}px`,
      `height:${h}px`,
      `margin:${-h / 2}px ${-w / 2}px`,
      `background:linear-gradient(to bottom, ${color}, rgba(255,100,0,0.2))`,
      `border-radius:${w}px`,
      `box-shadow:0 0 3px 1px ${color}66`,
      `transform:rotate(${travelAngle}deg)`,
    ].join(";");

    spark.animate(
      [
        {
          transform: `rotate(${travelAngle}deg) translate(0, 0)`,
          opacity: 1,
        },
        {
          // Mid-point: full speed, still bright
          transform: `rotate(${travelAngle}deg) translate(${tx * 0.5}px, ${ty * 0.5 - 8}px)`,
          opacity: 1,
          offset: 0.4,
        },
        {
          // End: fully traveled, gravity won
          transform: `rotate(${travelAngle + 15}deg) translate(${tx}px, ${ty}px)`,
          opacity: 0,
        },
      ],
      {
        duration: dur,
        delay,
        easing: "cubic-bezier(0.2, 0, 1, 1)",
        fill: "forwards",
      }
    );

    wrap.appendChild(spark);
  }

  // ── A few chunky "ember" particles ──────────────────────
  for (let i = 0; i < 5; i++) {
    const angle = Math.random() * 360;
    const rad = (angle * Math.PI) / 180;
    const speed = 20 + Math.random() * 40;
    const gravity = 50 + Math.random() * 60;
    const tx = Math.cos(rad) * speed;
    const ty = Math.sin(rad) * speed + gravity;
    const size = 3 + Math.random() * 4;
    const color = ["#ffb030", "#ff6b00", "#c8161d"][Math.floor(Math.random() * 3)];

    const ember = document.createElement("div");
    ember.style.cssText = [
      "position:absolute",
      `width:${size}px`,
      `height:${size}px`,
      `margin:${-size / 2}px`,
      `background:${color}`,
      "border-radius:2px",
      `box-shadow:0 0 6px 2px ${color}88`,
    ].join(";");

    ember.animate(
      [
        { transform: "translate(0, 0) rotate(0deg)", opacity: 0.9 },
        { transform: `translate(${tx}px, ${ty}px) rotate(${180 + Math.random() * 180}deg)`, opacity: 0 },
      ],
      {
        duration: 500 + Math.random() * 300,
        delay: 20 + Math.random() * 60,
        easing: "cubic-bezier(0.1, 0, 0.9, 1)",
        fill: "forwards",
      }
    );

    wrap.appendChild(ember);
  }

  document.body.appendChild(wrap);

  // Clean up after animation completes
  setTimeout(() => wrap.parentNode?.removeChild(wrap), 1000);
}

// ── Global button click watcher ────────────────────────────
function SparkListener() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      // Match any of our button classes (or children inside them)
      if (
        target.closest(
          ".btn-red, .btn-ghost, .btn-ghost-red"
        )
      ) {
        fireSparkBurst(e.clientX, e.clientY);
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

// ── App ────────────────────────────────────────────────────
function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
        <SparkListener />
        <div className="flex flex-col min-h-screen bg-bcm-dark">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/"        element={<Home />} />
              <Route path="/about"   element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;
