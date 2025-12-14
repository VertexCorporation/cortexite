document.addEventListener("DOMContentLoaded", () => {
  // =========================================================
  // IMPORTANT: Declare particleEngine BEFORE setTheme() usage
  // =========================================================
  let particleEngine = null;

  // =========================================================
  // THEME LOGIC (Vertex-style)
  // =========================================================
  const root = document.documentElement;
  const themeToggleBtn = document.getElementById("themeToggle");

  const prefersDarkMQ = window.matchMedia("(prefers-color-scheme: dark)");
  const reduceMotionMQ = window.matchMedia("(prefers-reduced-motion: reduce)");
  const isReducedMotion = () => !!reduceMotionMQ.matches;

  function getPreferredTheme() {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return stored;
    return prefersDarkMQ.matches ? "dark" : "light";
  }

  // Init theme (IMPORTANT: do NOT persist on first load if no stored theme)
  const storedTheme = localStorage.getItem("theme");

  function setTheme(theme, persist = true) {
    root.setAttribute("data-theme", theme);
    if (persist) localStorage.setItem("theme", theme);

    // Safe call (now particleEngine is in scope)
    if (particleEngine) particleEngine.syncThemeFromCSS();
  }

  // Init theme
  setTheme(getPreferredTheme(), !!storedTheme);

  // Listen system changes (only if user didn't manually set)
  const onSystemThemeChange = (e) => {
    const stored = localStorage.getItem("theme");
    if (stored) return;
    setTheme(e.matches ? "dark" : "light", false);
  };

  if (prefersDarkMQ.addEventListener) prefersDarkMQ.addEventListener("change", onSystemThemeChange);
  else prefersDarkMQ.addListener(onSystemThemeChange); // Safari fallback

  // Toggle click
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "dark";
      setTheme(current === "dark" ? "light" : "dark", true);
    });
  }

  // =========================================================
  // HERO PARALLAX (subtle)
  // =========================================================
  const hero = document.querySelector(".hero");
  const heroGlow = document.querySelector(".hero-bg-glow");

  if (hero && heroGlow) {
    let raf = 0;
    hero.addEventListener("mousemove", (e) => {
      if (isReducedMotion()) return;
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        heroGlow.style.transform = `translate(-${50 + x * 6}%, -${50 + y * 6}%)`;
      });
    });
  }

  // =========================================================
  // PARTICLE SYSTEM
  // =========================================================
  class ParticleEngine {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d", { alpha: true });

      this.w = 0;
      this.h = 0;
      this.dpr = 1;

      this.particles = [];
      this.running = false;
      this.rafId = 0;

      this.rgb = "255, 255, 255";
      this.baseAlpha = 0.22;

      this.onResize = this.onResize.bind(this);
      window.addEventListener("resize", this.onResize, { passive: true });

      this.onResize();
      this.initParticles();
      this.syncThemeFromCSS();
    }

    cssVar(name) {
      return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    }

    syncThemeFromCSS() {
      const rgb = this.cssVar("--primary-rgb");
      if (rgb) this.rgb = rgb.replace(/\s+/g, " ");
      const theme = document.documentElement.getAttribute("data-theme") || "dark";
      this.baseAlpha = theme === "light" ? 0.18 : 0.22;

      if (isReducedMotion()) {
        this.drawStatic();
      }
    }

    onResize() {
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.w = Math.max(320, window.innerWidth);
      this.h = Math.max(320, window.innerHeight);

      this.canvas.width = Math.floor(this.w * this.dpr);
      this.canvas.height = Math.floor(this.h * this.dpr);
      this.canvas.style.width = this.w + "px";
      this.canvas.style.height = this.h + "px";

      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);

      this.initParticles();
      if (isReducedMotion()) this.drawStatic();
    }

    particleCount() {
      const count = Math.floor(this.w / 10);
      return Math.max(40, Math.min(count, 110));
    }

    initParticles() {
      const count = this.particleCount();
      this.particles = Array.from({ length: count }, () => this.makeParticle());
    }

    rand(min, max) { return min + Math.random() * (max - min); }

    makeParticle() {
      const size = this.rand(0.9, 2.2);
      return {
        x: this.rand(0, this.w),
        y: this.rand(0, this.h),
        r: size,
        vx: this.rand(-0.22, 0.22),
        vy: this.rand(-0.22, 0.22),
        a: this.rand(this.baseAlpha * 0.6, this.baseAlpha * 1.35),
      };
    }

    step() {
      for (const p of this.particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x > this.w + 10) p.x = -10;
        if (p.x < -10) p.x = this.w + 10;
        if (p.y > this.h + 10) p.y = -10;
        if (p.y < -10) p.y = this.h + 10;
      }
    }

    draw() {
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.w, this.h);

      for (const p of this.particles) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(${this.rgb}, ${p.a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    drawStatic() { this.draw(); }

    loop = () => {
      if (!this.running) return;

      if (!isReducedMotion()) {
        this.step();
        this.draw();
        this.rafId = requestAnimationFrame(this.loop);
      } else {
        this.drawStatic();
        this.stop();
      }
    };

    start() {
      if (this.running) return;
      this.running = true;
      this.loop();
    }

    stop() {
      this.running = false;
      cancelAnimationFrame(this.rafId);
      this.rafId = 0;
    }
  }

  // Create engine AFTER theme init (works because particleEngine already declared)
  const canvas = document.getElementById("particle-canvas");
  if (canvas) {
    particleEngine = new ParticleEngine(canvas);
    particleEngine.start();

    // Ensure engine uses current theme immediately
    particleEngine.syncThemeFromCSS();
  }
});