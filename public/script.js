const body = document.body;
const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const progress = document.querySelector(".scroll-progress span");

const closeMenu = () => {
  body.classList.remove("menu-open");
  menuToggle?.setAttribute("aria-expanded", "false");
};

menuToggle?.addEventListener("click", () => {
  const open = body.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const onScroll = () => {
  const top = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  header?.classList.toggle("scrolled", top > 24);
  if (progress) progress.style.width = `${max > 0 ? (top / max) * 100 : 0}%`;
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -6%" },
);

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 3, 2) * 70}ms`;
  revealObserver.observe(element);
});

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll('.main-nav a[href^="#"]')];

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  { rootMargin: "-25% 0px -65%", threshold: [0, 0.15, 0.4] },
);

sections.forEach((section) => sectionObserver.observe(section));

const countdown = document.querySelector("[data-countdown]");

if (countdown) {
  const target = new Date(countdown.dataset.countdown).getTime();
  const dayEl = countdown.querySelector("[data-days]");
  const hourEl = countdown.querySelector("[data-hours]");
  const minuteEl = countdown.querySelector("[data-minutes]");

  const updateCountdown = () => {
    const distance = Math.max(0, target - Date.now());
    const days = Math.floor(distance / 86_400_000);
    const hours = Math.floor((distance % 86_400_000) / 3_600_000);
    const minutes = Math.floor((distance % 3_600_000) / 60_000);

    dayEl.textContent = String(days).padStart(2, "0");
    hourEl.textContent = String(hours).padStart(2, "0");
    minuteEl.textContent = String(minutes).padStart(2, "0");

    if (distance === 0) {
      countdown.setAttribute("aria-label", "O evento já começou");
    }
  };

  updateCountdown();
  window.setInterval(updateCountdown, 60_000);
}

const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();

