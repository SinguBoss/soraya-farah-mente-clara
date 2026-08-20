"use client";

import { useEffect } from "react";

export default function SiteClient() {
  useEffect(() => {
    const body = document.body;
    const header = document.querySelector<HTMLElement>("[data-header]");
    const menuToggle = document.querySelector<HTMLButtonElement>(".menu-toggle");
    const nav = document.querySelector<HTMLElement>(".main-nav");
    const progress = document.querySelector<HTMLElement>(".scroll-progress span");

    const closeMenu = () => {
      body.classList.remove("menu-open");
      menuToggle?.setAttribute("aria-expanded", "false");
    };

    const toggleMenu = () => {
      const open = body.classList.toggle("menu-open");
      menuToggle?.setAttribute("aria-expanded", String(open));
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    const onScroll = () => {
      const top = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      header?.classList.toggle("scrolled", top > 24);
      if (progress) {
        progress.style.width = `${max > 0 ? (top / max) * 100 : 0}%`;
      }
    };

    const onResize = () => {
      if (window.innerWidth > 1080) closeMenu();
    };

    menuToggle?.addEventListener("click", toggleMenu);
    const navLinks = Array.from(nav?.querySelectorAll<HTMLAnchorElement>("a") ?? []);
    navLinks.forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    onScroll();

    let revealObserver: IntersectionObserver | undefined;
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if ("IntersectionObserver" in window) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              revealObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6%" },
      );

      revealElements.forEach((element, index) => {
        element.style.transitionDelay = `${Math.min(index % 3, 2) * 70}ms`;
        revealObserver?.observe(element);
      });
    } else {
      revealElements.forEach((element) => element.classList.add("visible"));
    }

    let sectionObserver: IntersectionObserver | undefined;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    const sectionLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('.main-nav a[href^="#"]'),
    );
    if ("IntersectionObserver" in window) {
      sectionObserver = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (!visible) return;
          sectionLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${visible.target.id}`,
            );
          });
        },
        { rootMargin: "-25% 0px -65%", threshold: [0, 0.15, 0.4] },
      );
      sections.forEach((section) => sectionObserver?.observe(section));
    }

    const galleryViewport = document.querySelector<HTMLElement>("[data-product-gallery]");
    const galleryHint = document.querySelector<HTMLElement>(".product-gallery-hint");
    const galleryFirstSequence = galleryViewport?.querySelector<HTMLElement>(
      ".product-gallery-sequence",
    );
    const galleryMobileQuery = window.matchMedia("(max-width: 800px)");
    const galleryReducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let galleryAnimationFrame: number | undefined;
    let galleryResumeTimer: number | undefined;
    let galleryLastTime = 0;
    let galleryLoopWidth = 0;
    let galleryInteracting = false;

    const stopGalleryAnimation = () => {
      if (galleryAnimationFrame !== undefined) {
        window.cancelAnimationFrame(galleryAnimationFrame);
        galleryAnimationFrame = undefined;
      }
      galleryLastTime = 0;
    };

    const clearGalleryResumeTimer = () => {
      if (galleryResumeTimer !== undefined) {
        window.clearTimeout(galleryResumeTimer);
        galleryResumeTimer = undefined;
      }
    };

    const updateGalleryLoopWidth = () => {
      galleryLoopWidth = galleryFirstSequence?.getBoundingClientRect().width ?? 0;
    };

    const canAutoMoveGallery = () =>
      Boolean(
        galleryViewport &&
          galleryFirstSequence &&
          galleryMobileQuery.matches &&
          !galleryReducedMotionQuery.matches &&
          !galleryInteracting &&
          !galleryViewport.matches(":focus-visible"),
      );

    const moveGallery = (time: number) => {
      galleryAnimationFrame = undefined;
      if (!galleryViewport || !canAutoMoveGallery()) return;

      if (galleryLastTime === 0) galleryLastTime = time;
      const elapsed = Math.min(time - galleryLastTime, 50);
      galleryLastTime = time;
      galleryViewport.scrollLeft = Math.max(0, galleryViewport.scrollLeft + elapsed * 0.035);

      if (galleryLoopWidth > 0 && galleryViewport.scrollLeft >= galleryLoopWidth) {
        galleryViewport.scrollLeft -= galleryLoopWidth;
      }

      galleryAnimationFrame = window.requestAnimationFrame(moveGallery);
    };

    const startGalleryAnimation = () => {
      if (!canAutoMoveGallery() || galleryAnimationFrame !== undefined) return;
      updateGalleryLoopWidth();
      galleryLastTime = 0;
      galleryAnimationFrame = window.requestAnimationFrame(moveGallery);
    };

    const syncGalleryMode = () => {
      stopGalleryAnimation();
      clearGalleryResumeTimer();
      if (!galleryViewport) return;

      updateGalleryLoopWidth();
      if (!galleryMobileQuery.matches) {
        galleryInteracting = false;
        galleryViewport.classList.remove("is-interacting");
        galleryViewport.scrollLeft = 0;
        galleryHint?.classList.remove("is-hidden");
        return;
      }

      if (galleryReducedMotionQuery.matches) {
        galleryViewport.classList.add("is-interacting");
        return;
      }

      galleryViewport.classList.remove("is-interacting");
      startGalleryAnimation();
    };

    const pauseGalleryForInteraction = () => {
      if (!galleryViewport || !galleryMobileQuery.matches) return;
      galleryInteracting = true;
      stopGalleryAnimation();
      clearGalleryResumeTimer();
      galleryViewport.classList.add("is-interacting");
      if (!galleryReducedMotionQuery.matches) galleryHint?.classList.add("is-hidden");
    };

    const resumeGalleryAfterInteraction = () => {
      if (!galleryViewport || !galleryMobileQuery.matches) return;
      clearGalleryResumeTimer();

      if (galleryReducedMotionQuery.matches) {
        galleryInteracting = false;
        return;
      }

      galleryResumeTimer = window.setTimeout(() => {
        galleryInteracting = false;
        galleryViewport.classList.remove("is-interacting");
        startGalleryAnimation();
      }, 2600);
    };

    const onGalleryKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      pauseGalleryForInteraction();
      resumeGalleryAfterInteraction();
    };

    const onGalleryFocus = () => {
      if (galleryViewport?.matches(":focus-visible")) stopGalleryAnimation();
    };

    const onGalleryBlur = () => {
      if (!galleryInteracting) startGalleryAnimation();
    };

    galleryViewport?.addEventListener("pointerdown", pauseGalleryForInteraction, {
      passive: true,
    });
    galleryViewport?.addEventListener("pointerup", resumeGalleryAfterInteraction, {
      passive: true,
    });
    galleryViewport?.addEventListener("pointercancel", resumeGalleryAfterInteraction, {
      passive: true,
    });
    galleryViewport?.addEventListener("keydown", onGalleryKeyDown);
    galleryViewport?.addEventListener("focus", onGalleryFocus);
    galleryViewport?.addEventListener("blur", onGalleryBlur);
    galleryMobileQuery.addEventListener("change", syncGalleryMode);
    galleryReducedMotionQuery.addEventListener("change", syncGalleryMode);
    window.addEventListener("resize", updateGalleryLoopWidth, { passive: true });
    syncGalleryMode();

    const countdown = document.querySelector<HTMLElement>("[data-countdown]");
    let countdownTimer: number | undefined;
    if (countdown?.dataset.countdown) {
      const target = new Date(countdown.dataset.countdown).getTime();
      const dayElement = countdown.querySelector<HTMLElement>("[data-days]");
      const hourElement = countdown.querySelector<HTMLElement>("[data-hours]");
      const minuteElement = countdown.querySelector<HTMLElement>("[data-minutes]");

      const updateCountdown = () => {
        const distance = Math.max(0, target - Date.now());
        const days = Math.floor(distance / 86_400_000);
        const hours = Math.floor((distance % 86_400_000) / 3_600_000);
        const minutes = Math.floor((distance % 3_600_000) / 60_000);

        if (dayElement) dayElement.textContent = String(days).padStart(2, "0");
        if (hourElement) hourElement.textContent = String(hours).padStart(2, "0");
        if (minuteElement) minuteElement.textContent = String(minutes).padStart(2, "0");

        if (distance === 0) {
          countdown.setAttribute("aria-label", "O evento já começou");
        }
      };

      updateCountdown();
      countdownTimer = window.setInterval(updateCountdown, 60_000);
    }

    const year = document.querySelector<HTMLElement>("[data-year]");
    if (year) year.textContent = String(new Date().getFullYear());

    return () => {
      menuToggle?.removeEventListener("click", toggleMenu);
      navLinks.forEach((link) => link.removeEventListener("click", closeMenu));
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      revealObserver?.disconnect();
      sectionObserver?.disconnect();
      stopGalleryAnimation();
      clearGalleryResumeTimer();
      galleryViewport?.removeEventListener("pointerdown", pauseGalleryForInteraction);
      galleryViewport?.removeEventListener("pointerup", resumeGalleryAfterInteraction);
      galleryViewport?.removeEventListener("pointercancel", resumeGalleryAfterInteraction);
      galleryViewport?.removeEventListener("keydown", onGalleryKeyDown);
      galleryViewport?.removeEventListener("focus", onGalleryFocus);
      galleryViewport?.removeEventListener("blur", onGalleryBlur);
      galleryMobileQuery.removeEventListener("change", syncGalleryMode);
      galleryReducedMotionQuery.removeEventListener("change", syncGalleryMode);
      window.removeEventListener("resize", updateGalleryLoopWidth);
      if (countdownTimer !== undefined) window.clearInterval(countdownTimer);
      body.classList.remove("menu-open");
    };
  }, []);

  return null;
}
