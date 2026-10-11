const ICONS = {
  email: '<svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.2-8 5-8-5V6l8 5 8-5z"/></svg>',
  phone: '<svg viewBox="0 0 24 24"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.3 18.3V10H5.7v8.3zM7 8.8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm11.3 9.5v-4.6c0-2.4-1.3-3.6-3-3.6a2.6 2.6 0 0 0-2.4 1.3V10h-2.6v8.3h2.6v-4.4c0-1.1.2-2.2 1.6-2.2s1.4 1.3 1.4 2.3v4.3z"/></svg>',
  github: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 2.9.8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/></svg>',
};

const SERVICE_ICONS = {
  web: '<svg viewBox="0 0 24 24"><path d="M8.7 16.6 4.1 12l4.6-4.6L7.3 6l-6 6 6 6zm6.6 0 4.6-4.6-4.6-4.6L16.7 6l6 6-6 6z"/></svg>',
  erp: '<svg viewBox="0 0 24 24"><path d="M4 4h7v7H4zm9 0h7v7h-7zM4 13h7v7H4zm11 0h2v3h3v2h-3v3h-2v-3h-3v-2h3z"/></svg>',
  ops: '<svg viewBox="0 0 24 24"><path d="M3 20h18v2H3zM5 10h3v8H5zm5.5-5h3v13h-3zM16 13h3v5h-3z"/></svg>',
};

let lang = localStorage.getItem("lang") || "en";
let projectFilter = "all";
let ghData = null;
let theme = localStorage.getItem("theme") || "dark";

const $ = (id) => document.getElementById(id);
const t = (obj) => (obj && typeof obj === "object" && !Array.isArray(obj) ? obj[lang] ?? obj.en : obj ?? "");
const uiText = (path) => t(path.split(".").reduce((o, k) => o?.[k], UI));

function contactLinks() {
  const c = SITE.contact;
  return [
    { key: "email", label: "Email", value: c.email, href: `mailto:${c.email}` },
    { key: "phone", label: lang === "ar" ? "الهاتف" : "Phone", value: c.phone, href: `tel:${c.phone.replace(/\s/g, "")}` },
    { key: "linkedin", label: "LinkedIn", value: c.linkedin.replace(/^https?:\/\/(www\.)?/, ""), href: c.linkedin },
    { key: "github", label: "GitHub", value: c.github.replace(/^https?:\/\/(www\.)?/, ""), href: c.github },
  ].filter((l) => l.value);
}

function render() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $("langToggle").textContent = lang === "ar" ? "EN" : "ع";

  document.querySelectorAll("[data-ui]").forEach((el) => (el.textContent = uiText(el.dataset.ui)));
  document.querySelectorAll("[data-ui-label]").forEach((el) => {
    el.setAttribute("aria-label", uiText(el.dataset.uiLabel));
    el.title = uiText(el.dataset.uiLabel);
  });
  $("status").hidden = !SITE.availableForWork;

  $("heroName").textContent = t(SITE.name);
  $("heroRole").textContent = t(SITE.role);
  $("heroTagline").textContent = t(SITE.tagline);
  $("cvBtn").href = SITE.cvFile;
  $("footerName").textContent = t(SITE.name);
  $("year").textContent = new Date().getFullYear();

  const links = contactLinks();
  $("heroSocials").innerHTML = links
    .map((l) => `<a href="${l.href}" target="_blank" rel="noopener" aria-label="${l.label}">${ICONS[l.key]}</a>`)
    .join("");

  $("servicesGrid").innerHTML = SITE.services
    .map(
      (s) => `<div class="card service">
        <div class="service-icon">${SERVICE_ICONS[s.icon]}</div>
        <h4>${t(s.title)}</h4><p>${t(s.desc)}</p></div>`
    )
    .join("");

  $("aboutText").textContent = t(SITE.about);
  $("stats").innerHTML = SITE.stats
    .map((s) => `<div class="card stat"><strong data-count="${s.value}">${s.value}</strong><span>${t(s.label)}</span></div>`)
    .join("");

  $("skillsGrid").innerHTML = SITE.skills
    .map(
      (g) => `<div class="card"><h4>${t(g.title)}</h4>
        <div class="chips">${t(g.items).map((i) => `<span class="chip">${i}</span>`).join("")}</div></div>`
    )
    .join("");

  $("experienceList").innerHTML = SITE.experience
    .map(
      (e) => `<div class="card">
        <div class="tl-head"><h4>${t(e.role)}</h4><span class="period">${t(e.period)}</span></div>
        <div class="tl-sub">${t(e.company)}</div>
        <ul>${t(e.points).map((p) => `<li>${p}</li>`).join("")}</ul></div>`
    )
    .join("");

  $("filters").innerHTML = Object.keys(UI.filters)
    .filter((k) => k === "all" || SITE.projects.some((p) => p.category === k))
    .map(
      (k) => `<button class="filter-btn${k === projectFilter ? " active" : ""}" data-filter="${k}" role="tab"
        aria-selected="${k === projectFilter}">${uiText(`filters.${k}`)}</button>`
    )
    .join("");

  $("projectsGrid").innerHTML = [...SITE.projects]
    .sort((a, b) => !!b.badge - !!a.badge)
    .map(
      (p) => `<div class="card project${p.badge ? " featured" : ""}" data-category="${p.category}">
        ${p.badge ? `<span class="badge">★ ${t(p.badge)}</span>` : ""}
        <h4>${t(p.title)}</h4>
        <p>${t(p.desc)}</p>
        ${p.points ? `<ul class="project-points">${t(p.points).map((pt) => `<li>${pt}</li>`).join("")}</ul>` : ""}
        <div class="chips">${p.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}</div>
        <div class="project-links">
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener">${uiText("code")} ↗</a>` : ""}
          ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">${uiText("demo")} ↗</a>` : ""}
        </div></div>`
    )
    .join("") +
    `<a class="card project more-card" href="${SITE.contact.github}?tab=repositories" target="_blank" rel="noopener">
      <div class="more-icon">${ICONS.github}</div>
      <h4>${uiText("more.title")}</h4>
      <p id="moreText">${uiText("more.fallback")}</p>
      <span class="more-cta">${uiText("more.cta")} <span class="arrow">→</span></span>
    </a>`;

  $("educationList").innerHTML = SITE.education
    .map(
      (e) => `<div class="card">
        <div class="tl-head"><h4>${t(e.degree)}</h4><span class="period">${t(e.period)}</span></div>
        <div class="tl-sub">${t(e.school)}</div>
        ${e.note ? `<p class="note">${t(e.note)}</p>` : ""}</div>`
    )
    .join("");

  $("certsList").innerHTML = SITE.certifications
    .map((c) => {
      const inner = `<div class="tl-head"><h4>${t(c.title)}</h4><span class="period">${t(c.year)}</span></div>
        <div class="tl-sub">${c.issuer}</div>`;
      return c.link
        ? `<a class="card cert" href="${c.link}" target="_blank" rel="noopener">${inner}</a>`
        : `<div class="card cert">${inner}</div>`;
    })
    .join("");

  $("contactCards").innerHTML = links
    .map(
      (l) => `<a class="card contact-card" href="${l.href}" target="_blank" rel="noopener">
        ${ICONS[l.key]}<div><small>${l.label}</small><strong>${l.value}</strong></div></a>`
    )
    .join("");

  document.querySelectorAll(".section-title").forEach((el) => {
    el.innerHTML = el.textContent
      .split(" ")
      .map((w, i) => `<span class="w" style="--w:${i}">${w}</span>`)
      .join(" ");
  });

  applyFilter();
  renderGitHub();
}

function applyFilter() {
  document.querySelectorAll("#projectsGrid .project:not(.more-card)").forEach((card) => {
    card.classList.toggle("hidden", projectFilter !== "all" && card.dataset.category !== projectFilter);
  });
}

$("filters").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  projectFilter = btn.dataset.filter;
  document.querySelectorAll(".filter-btn").forEach((b) => {
    b.classList.toggle("active", b === btn);
    b.setAttribute("aria-selected", b === btn);
  });
  applyFilter();
});

const GH_CACHE_KEY = "gh-stats";
const GH_TTL = 60 * 60 * 1000;

async function loadGitHub() {
  const cached = JSON.parse(localStorage.getItem(GH_CACHE_KEY) || "null");
  if (cached && cached.user === SITE.githubUser) {
    ghData = cached;
    renderGitHub();
    if (Date.now() - cached.time < GH_TTL) return;
  }
  try {
    const base = `https://api.github.com/users/${SITE.githubUser}`;
    const [userRes, reposRes] = await Promise.all([fetch(base), fetch(`${base}/repos?per_page=100`)]);
    if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API error");
    const user = await userRes.json();
    const repos = await reposRes.json();
    const counts = {};
    repos
      .filter((r) => !r.fork && r.language)
      .forEach((r) => (counts[r.language] = (counts[r.language] || 0) + 1));
    ghData = {
      user: SITE.githubUser,
      time: Date.now(),
      repos: user.public_repos,
      langs: Object.entries(counts).sort((a, b) => b[1] - a[1]),
    };
    localStorage.setItem(GH_CACHE_KEY, JSON.stringify(ghData));
    renderGitHub();
  } catch {
    // Keep the static fallback text on the "more projects" card.
  }
}

function renderGitHub() {
  if (!ghData) return;
  const langNames = ghData.langs.slice(0, 4).map(([name]) => name);
  const joined = lang === "ar" ? langNames.join("، ") : langNames.join(", ");
  $("moreText").textContent = uiText("more.text").replace("{n}", ghData.repos).replace("{langs}", joined);
}

function applyTheme() {
  document.documentElement.dataset.theme = theme;
  $("themeToggle").textContent = theme === "dark" ? "☀" : "☾";
}

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function staggerCards() {
  document.querySelectorAll(".reveal").forEach((section) => {
    section.querySelectorAll(".card").forEach((card, i) => card.style.setProperty("--i", i));
    section.querySelectorAll(".chip").forEach((chip, i) => chip.style.setProperty("--c", i % 24));
  });
}

function countUp(el) {
  const match = el.dataset.count.match(/^(\d+)(.*)$/);
  if (!match || reducedMotion) return;
  const target = +match[1], suffix = match[2], start = performance.now(), dur = 1400;
  const step = (now) => {
    const k = Math.min((now - start) / dur, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3))) + suffix;
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function refresh() {
  render();
  staggerCards();
  requestAnimationFrame(moveNavPill);
  if ($("about").classList.contains("visible")) document.querySelectorAll("[data-count]").forEach(countUp);
}

$("langToggle").addEventListener("click", () => {
  lang = lang === "en" ? "ar" : "en";
  localStorage.setItem("lang", lang);
  refresh();
});

$("themeToggle").addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", theme);
  applyTheme();
});

$("menuToggle").addEventListener("click", () => $("navLinks").classList.toggle("open"));
$("navLinks").addEventListener("click", (e) => {
  if (e.target.tagName === "A") $("navLinks").classList.remove("open");
});

const revealObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((en) => {
      if (!en.isIntersecting || en.target.classList.contains("visible")) return;
      en.target.classList.add("visible");
      en.target.querySelectorAll("[data-count]").forEach(countUp);
    }),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

function moveNavPill() {
  const pill = $("navPill");
  const active = document.querySelector(".nav-links a.active");
  pill.classList.toggle("on", !!active);
  if (!active) return;
  pill.style.left = `${active.offsetLeft}px`;
  pill.style.width = `${active.offsetWidth}px`;
}

const navObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const links = document.querySelectorAll(".nav-links a");
      const hasLink = [...links].some((a) => a.getAttribute("href") === `#${en.target.id}`);
      if (!hasLink && en.target.id !== "home") return;
      links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${en.target.id}`));
      moveNavPill();
    }),
  { rootMargin: "-45% 0px -50% 0px" }
);
addEventListener("resize", moveNavPill);
document.querySelectorAll("main section[id]").forEach((s) => navObserver.observe(s));

window.addEventListener(
  "scroll",
  () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    $("progress").style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    $("toTop").classList.toggle("show", scrollY > 600);
  },
  { passive: true }
);

document.addEventListener("pointermove", (e) => {
  const card = e.target.closest?.(".card");
  if (!card) return;
  const r = card.getBoundingClientRect();
  card.style.setProperty("--mx", `${e.clientX - r.left}px`);
  card.style.setProperty("--my", `${e.clientY - r.top}px`);
});

const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (finePointer && !reducedMotion) {
  const glow = $("cursorGlow");
  let gx = innerWidth / 2, gy = innerHeight / 2, tx = gx, ty = gy;
  addEventListener("pointermove", (e) => {
    tx = e.clientX;
    ty = e.clientY;
    glow.classList.add("on");
  });
  document.addEventListener("pointerleave", () => glow.classList.remove("on"));
  (function follow() {
    gx += (tx - gx) * 0.12;
    gy += (ty - gy) * 0.12;
    glow.style.transform = `translate(${gx}px, ${gy}px)`;
    requestAnimationFrame(follow);
  })();

  document.addEventListener("pointermove", (e) => {
    const card = e.target.closest(".service, .project, .stat, .timeline .card, .cert");
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    const strength = card.classList.contains("featured") || card.closest(".timeline") ? 3 : 7;
    card.classList.add("tilting");
    card.style.setProperty("--rx", `${(-y * strength).toFixed(2)}deg`);
    card.style.setProperty("--ry", `${(x * strength).toFixed(2)}deg`);
  });
  document.addEventListener("pointerout", (e) => {
    const card = e.target.closest?.(".card");
    if (!card || card.contains(e.relatedTarget)) return;
    card.classList.remove("tilting");
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  });

  const magnets = () => document.querySelectorAll(".icon-btn, .to-top, .filter-btn");
  document.addEventListener("pointermove", (e) => {
    magnets().forEach((el) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const near = Math.hypot(dx, dy) < Math.max(r.width, r.height) * 0.9;
      el.classList.add("magnetic");
      el.style.translate = near ? `${dx * 0.25}px ${dy * 0.3}px` : "";
    });
  });

  const hero = $("home");
  hero.addEventListener("pointermove", (e) => {
    const x = (e.clientX / innerWidth - 0.5) * 30;
    const y = (e.clientY / innerHeight - 0.5) * 30;
    document.documentElement.style.setProperty("--px", `${x.toFixed(1)}px`);
    document.documentElement.style.setProperty("--py", `${y.toFixed(1)}px`);
  });
  hero.addEventListener("pointerleave", () => {
    document.documentElement.style.setProperty("--px", "0px");
    document.documentElement.style.setProperty("--py", "0px");
  });
}

function startParticles() {
  const canvas = $("particles");
  if (reducedMotion || !canvas) return;
  const ctx = canvas.getContext("2d");
  let w, h, dpr, points, visible = true, mouse = { x: -999, y: -999 };

  const resize = () => {
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round(Math.min(70, (w * h) / 16000));
    points = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    }));
  };
  resize();
  addEventListener("resize", resize);
  $("home").addEventListener("pointermove", (e) => {
    const r = canvas.getBoundingClientRect();
    mouse = { x: e.clientX - r.left, y: e.clientY - r.top };
  });
  $("home").addEventListener("pointerleave", () => (mouse = { x: -999, y: -999 }));
  new IntersectionObserver(([en]) => (visible = en.isIntersecting)).observe(canvas);

  const draw = () => {
    requestAnimationFrame(draw);
    if (!visible || document.hidden) return;
    const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim() || "#8b7cf6";
    ctx.clearRect(0, 0, w, h);
    for (const p of points) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      const md = Math.hypot(p.x - mouse.x, p.y - mouse.y);
      if (md < 140) {
        p.x += (p.x - mouse.x) / md;
        p.y += (p.y - mouse.y) / md;
      }
    }
    ctx.fillStyle = ctx.strokeStyle = accent;
    for (let i = 0; i < points.length; i++) {
      const a = points[i];
      ctx.globalAlpha = 0.7;
      ctx.beginPath();
      ctx.arc(a.x, a.y, 1.6, 0, Math.PI * 2);
      ctx.fill();
      for (let j = i + 1; j < points.length; j++) {
        const b = points[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 120) {
          ctx.globalAlpha = (1 - d / 120) * 0.35;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
  };
  draw();
}

$("toTop").addEventListener("click", () => scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" }));

function hideLoader() {
  const loader = $("loader");
  if (!loader || loader.classList.contains("done")) return;
  loader.classList.add("done");
  document.body.classList.remove("loading");
  setTimeout(() => loader.remove(), 600);
}

if (reducedMotion || sessionStorage.getItem("seenLoader")) {
  hideLoader();
} else {
  sessionStorage.setItem("seenLoader", "1");
  const minShow = new Promise((r) => setTimeout(r, 900));
  const pageLoaded = new Promise((r) => (document.readyState === "complete" ? r() : addEventListener("load", r)));
  Promise.all([minShow, pageLoaded]).then(hideLoader);
  setTimeout(hideLoader, 2000);
  $("loader").addEventListener("click", hideLoader);
}

applyTheme();
refresh();
loadGitHub();
startParticles();
