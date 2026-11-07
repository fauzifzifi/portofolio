/**
 * main.js
 * 1) Render konten dari portfolioData
 * 2) Interaksi: scroll progress, active nav, mobile menu,
 *    reveal-on-scroll, counter animation, copy email, back-to-top,
 *    dark/light mode toggle, typing animation, cert filter.
 */

(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const data = window.portfolioData;

  if (!data) {
    console.error(
      "portfolioData tidak ditemukan. Pastikan data.js di-load sebelum main.js.",
    );
    return;
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  /* =========================================================
     1. RENDER
     ========================================================= */

  // ---- Hero ----
  $("#hero-name").textContent = data.profile.name;
  $("#hero-summary").textContent = data.profile.summary;
  $("#availability-text").textContent = data.profile.availability;
  $("#btn-download-cv").setAttribute("href", data.profile.cvFile);
  $("#btn-github").setAttribute("href", data.profile.github);
  $("#footer-year").textContent = new Date().getFullYear();
  $("#footer-name").textContent = data.profile.shortName;

  // ---- About ----
  $("#about-text").innerHTML = data.profile.about
    .map((p) => `<p>${p}</p>`)
    .join("");

  // ---- Stats ----
  $("#stats-container").innerHTML = data.profile.stats
    .map(
      (s) => `
      <div class="flex items-baseline justify-between py-4 border-b border-line">
        <span class="font-display text-3xl md:text-4xl font-semibold text-accent tabular-nums"
              data-counter="${s.value}" data-decimals="${s.decimals || 0}"
              data-suffix="${s.suffix || ""}">0</span>
        <span class="text-sm text-dim text-right max-w-[60%]">${s.label}</span>
      </div>`,
    )
    .join("");

  // ---- Experience ----
  $("#experience-list").innerHTML = data.experience
    .map(
      (e, i) => `
      <li class="group grid md:grid-cols-[200px_1fr] gap-4 md:gap-10 py-8 border-t border-line hover:border-line-soft transition-colors" data-reveal style="transition-delay:${i * 40}ms">
        <div class="space-y-1">
          <div class="font-mono text-xs text-dim">${e.period}</div>
          <div class="inline-block font-mono text-[10px] px-2 py-1 rounded-full border border-line text-muted">${e.type}</div>
        </div>
        <div>
          <h3 class="font-display text-xl md:text-2xl font-medium text-content mb-1">${e.role}</h3>
          <p class="text-accent text-sm font-medium mb-4">${e.org}</p>
          <ul class="space-y-2 text-sm text-muted">
            ${e.points.map((p) => `<li class="flex gap-3"><span class="text-dim shrink-0">–</span><span>${p}</span></li>`).join("")}
          </ul>
        </div>
      </li>`,
    )
    .join("");

  // ---- Projects ----
  $("#projects-grid").innerHTML = data.projects
    .map(
      (p, i) => `
      <article class="group relative flex flex-col p-6 md:p-8 rounded-2xl border border-line bg-surface hover:border-accent/40 transition-all duration-300 hover:-translate-y-1" data-reveal style="transition-delay:${i * 60}ms">
        <div class="flex items-center justify-between mb-4 font-mono text-xs">
          <span class="text-accent">${p.role}</span>
          <span class="text-dim">${p.year}</span>
        </div>
        <h3 class="font-display text-2xl font-medium mb-3 group-hover:text-accent transition-colors">${p.title}</h3>
        <p class="text-sm text-muted leading-relaxed mb-5">${p.description}</p>
        <ul class="space-y-2 text-sm text-muted mb-6">
          ${p.points.map((pt) => `<li class="flex gap-3"><span class="text-accent shrink-0 mt-1">→</span><span>${pt}</span></li>`).join("")}
        </ul>
        <div class="mt-auto flex flex-wrap gap-2">
          ${p.tags.map((t) => `<span class="font-mono text-[10px] px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">${t}</span>`).join("")}
        </div>
      </article>`,
    )
    .join("");

  // ---- Skills ----
  const skillGroups = [
    { title: "Development & Data", items: data.skills.technical },
    { title: "Tools & Software", items: data.skills.tools },
    { title: "Soft Skills", items: data.skills.soft },
  ];

  $("#skills-container").innerHTML = skillGroups
    .map(
      (g, i) => `
      <div class="p-6 md:p-8 rounded-2xl border border-line bg-surface" data-reveal style="transition-delay:${i * 60}ms">
        <h3 class="font-display text-lg font-medium mb-5 pb-4 border-b border-line">${g.title}</h3>
        <ul class="space-y-2.5 text-sm text-muted">
          ${g.items.map((item) => `<li class="flex items-start gap-2.5"><span class="text-accent mt-1.5 text-[8px]">●</span><span>${item}</span></li>`).join("")}
        </ul>
      </div>`,
    )
    .join("");

  // ---- Certifications (dengan filter) ----
  renderCertifications("all");

  // ---- Education ----
  $("#education-list").innerHTML = data.education
    .map(
      (e, i) => `
      <div class="p-6 md:p-8 rounded-2xl border border-line bg-surface" data-reveal style="transition-delay:${i * 60}ms">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
          <div>
            <h3 class="font-display text-xl font-medium text-content">${e.degree}</h3>
            <p class="text-accent text-sm font-medium">${e.school}</p>
          </div>
          <div class="text-left md:text-right">
            <div class="font-mono text-xs text-dim">${e.period}</div>
            <div class="font-mono text-xs text-accent mt-1">${e.score}</div>
          </div>
        </div>
        <p class="text-sm text-muted leading-relaxed">${e.details}</p>
      </div>`,
    )
    .join("");

  // ---- Contact ----
  $("#contact-email").textContent = data.profile.email;
  $("#contact-phone").textContent = data.profile.phone;
  $("#contact-location").textContent = data.profile.location;
  $("#contact-linkedin-text").textContent = data.profile.linkedin.includes(
    "USERNAME",
  )
    ? "Belum diisi — update di data.js"
    : data.profile.linkedin
        .replace(/^https?:\/\/(www\.)?/, "")
        .replace(/\/$/, "");
  $("#contact-wa").setAttribute(
    "href",
    `https://wa.me/${data.profile.phoneLink}`,
  );
  $("#contact-linkedin").setAttribute("href", data.profile.linkedin);

  /* =========================================================
     2. CERTIFICATIONS: render + filter
     ========================================================= */

  let activeCertFilter = "all";

  function renderCertifications(filter) {
    const filtered =
      filter === "all"
        ? data.certifications
        : data.certifications.filter((c) => c.year === filter);

    $("#certs-list").innerHTML = filtered.length
      ? filtered
          .map(
            (c) => `
            <li class="grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr_240px] gap-3 md:gap-6 py-4 hover:bg-surface transition-colors px-2 -mx-2 rounded">
              <span class="font-mono text-xs text-dim self-center">${c.year}</span>
              <span class="text-sm md:text-base text-content font-medium self-center">${c.name}</span>
              <span class="col-span-2 md:col-span-1 md:text-right text-xs md:text-sm text-dim self-center">${c.issuer}</span>
            </li>`,
          )
          .join("")
      : `<li class="py-8 text-center text-dim text-sm">Belum ada sertifikasi untuk tahun ini.</li>`;
  }

  function renderCertFilters() {
    const years = [...new Set(data.certifications.map((c) => c.year))].sort(
      (a, b) => b.localeCompare(a),
    );
    const options = ["all", ...years];
    const labels = { all: "Semua" };

    $("#cert-filters").innerHTML = options
      .map(
        (opt) => `
        <button type="button" data-filter="${opt}"
          class="cert-filter font-mono text-xs px-3.5 py-1.5 rounded-full border transition-colors
                 ${
                   opt === activeCertFilter
                     ? "border-accent bg-accent text-accent-fg"
                     : "border-line text-muted hover:border-accent/50 hover:text-accent"
                 }">
          ${labels[opt] || opt}
        </button>`,
      )
      .join("");

    $$(".cert-filter").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCertFilter = btn.dataset.filter;
        renderCertFilters();
        renderCertifications(activeCertFilter);
      });
    });
  }

  renderCertFilters();

  /* =========================================================
     3. THEME TOGGLE
     ========================================================= */

  const themeToggle = $("#theme-toggle");
  const iconSun = $("#icon-sun");
  const iconMoon = $("#icon-moon");

  function syncThemeIcon() {
    const isLight = document.documentElement.classList.contains("light");
    iconSun.classList.toggle("hidden", isLight);
    iconMoon.classList.toggle("hidden", !isLight);
  }

  function toggleTheme() {
    document.documentElement.classList.add("theme-transitioning");
    document.documentElement.classList.toggle("light");
    const isLight = document.documentElement.classList.contains("light");
    try {
      localStorage.setItem("theme", isLight ? "light" : "dark");
    } catch (e) {}
    syncThemeIcon();
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transitioning");
    }, 260);
  }

  syncThemeIcon();
  themeToggle.addEventListener("click", toggleTheme);

  /* =========================================================
     4. TYPING ANIMATION
     ========================================================= */

  (function typeAnimation() {
    const el = $("#hero-typed");
    const phrases = data.profile.taglines || [];
    if (!el || !phrases.length) return;

    // Reduced motion: tampilkan langsung, tanpa animasi
    if (prefersReducedMotion) {
      el.textContent = phrases[0];
      return;
    }

    const typeSpeed = 55;
    const deleteSpeed = 28;
    const pauseAfter = 1800;
    const pauseBefore = 350;

    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function tick() {
      const phrase = phrases[phraseIdx];

      if (!isDeleting) {
        charIdx++;
        el.textContent = phrase.slice(0, charIdx);
        if (charIdx === phrase.length) {
          isDeleting = true;
          return setTimeout(tick, pauseAfter);
        }
        return setTimeout(tick, typeSpeed);
      } else {
        charIdx--;
        el.textContent = phrase.slice(0, charIdx);
        if (charIdx === 0) {
          isDeleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          return setTimeout(tick, pauseBefore);
        }
        return setTimeout(tick, deleteSpeed);
      }
    }

    setTimeout(tick, 500);
  })();

  /* =========================================================
     5. SCROLL PROGRESS + NAVBAR + BACK TO TOP
     ========================================================= */

  const progressBar = $("#scroll-progress");
  const navbar = $("#navbar");
  const backToTop = $("#back-to-top");

  const onScroll = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight || 1;
    progressBar.style.width = `${Math.min(100, (h.scrollTop / max) * 100)}%`;

    if (window.scrollY > 12) {
      navbar.classList.add("bg-theme/80", "backdrop-blur-xl", "border-line");
    } else {
      navbar.classList.remove("bg-theme/80", "backdrop-blur-xl", "border-line");
    }

    if (window.scrollY > 400) {
      backToTop.classList.remove(
        "opacity-0",
        "translate-y-3",
        "pointer-events-none",
      );
    } else {
      backToTop.classList.add(
        "opacity-0",
        "translate-y-3",
        "pointer-events-none",
      );
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );

  /* =========================================================
     6. MOBILE MENU
     ========================================================= */

  const menuToggle = $("#menu-toggle");
  const mobileMenu = $("#mobile-menu");
  const iconMenu = $("#icon-menu");
  const iconClose = $("#icon-close");

  const closeMobileMenu = () => {
    mobileMenu.classList.add("hidden");
    iconMenu.classList.remove("hidden");
    iconClose.classList.add("hidden");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("hidden");
    if (isOpen) return closeMobileMenu();
    mobileMenu.classList.remove("hidden");
    iconMenu.classList.add("hidden");
    iconClose.classList.remove("hidden");
    menuToggle.setAttribute("aria-expanded", "true");
  });

  $$(".mobile-link").forEach((a) =>
    a.addEventListener("click", closeMobileMenu),
  );

  /* =========================================================
     7. ACTIVE NAV (SCROLL SPY)
     ========================================================= */

  const sections = $$("section[id]");
  const navLinks = $$(".nav-link");

  if ("IntersectionObserver" in window) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          navLinks.forEach((link) => {
            const match = link.getAttribute("href") === `#${id}`;
            link.classList.toggle("text-accent", match);
            link.classList.toggle("text-muted", !match);
          });
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => navObserver.observe(s));
  }

  /* =========================================================
     8. REVEAL ON SCROLL
     ========================================================= */

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    $$("[data-reveal]").forEach((el) => revealObserver.observe(el));
  } else {
    $$("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
  }

  /* =========================================================
     9. COUNTER ANIMATION
     ========================================================= */

  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.counter);
    const decimals = parseInt(el.dataset.decimals || "0", 10);
    const suffix = el.dataset.suffix || "";

    if (prefersReducedMotion) {
      el.textContent = target.toFixed(decimals) + suffix;
      return;
    }

    const duration = 1400;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = (target * eased).toFixed(decimals) + suffix;
      if (t < 1) requestAnimationFrame(step);
      else el.textContent = target.toFixed(decimals) + suffix;
    };
    requestAnimationFrame(step);
  };

  if ("IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 },
    );
    $$("[data-counter]").forEach((el) => counterObserver.observe(el));
  } else {
    $$("[data-counter]").forEach((el) => {
      const d = parseInt(el.dataset.decimals || "0", 10);
      el.textContent =
        parseFloat(el.dataset.counter).toFixed(d) + (el.dataset.suffix || "");
    });
  }

  /* =========================================================
     10. COPY EMAIL + TOAST
     ========================================================= */

  const toast = $("#toast");
  let toastTimer;

  const showToast = (msg) => {
    toast.textContent = msg;
    toast.classList.remove("opacity-0", "translate-y-3");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.add("opacity-0", "translate-y-3");
    }, 2200);
  };

  $("#copy-email").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(data.profile.email);
      showToast("Email berhasil disalin ✓");
    } catch {
      showToast("Gagal menyalin — salin manual ya.");
    }
  });
})();
