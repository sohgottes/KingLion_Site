/* ==========================================================
   KINGLION - JAVASCRIPT GLOBAL

   Este arquivo controla:
   1. menu mobile
   2. mudança visual do cabeçalho no scroll
   3. esconder / mostrar header
   4. animações de entrada
   5. contador dos números
   6. ano automático do rodapé
========================================================== */

const siteHeader = document.getElementById("siteHeader");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

/* =========================
   MENU MOBILE
========================= */
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      document.body.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* =========================
   CABEÇALHO DURANTE SCROLL
========================= */
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (siteHeader) {
    /* Adiciona fundo escuro depois dos primeiros pixels */
    siteHeader.classList.toggle("scrolled", currentScrollY > 40);

    /*
      Esconde o menu quando o usuário desce
      e mostra quando volta a subir.
      Se não quiser este efeito, APAGUE apenas este bloco.
    */
    if (currentScrollY > lastScrollY && currentScrollY > 250) {
      siteHeader.classList.add("hidden");
    } else {
      siteHeader.classList.remove("hidden");
    }
  }

  lastScrollY = currentScrollY;
}, { passive: true });

/* =========================
   ANIMAÇÕES AO ROLAR
========================= */
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

/* =========================
   CONTADORES
========================= */
const counters = document.querySelectorAll("[data-count]");

if ("IntersectionObserver" in window) {
  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target;
        const target = Number(element.dataset.count);
        const suffix = element.dataset.suffix || "";

        /* Valores acima de 1000 recebem animação um pouco mais curta */
        const duration = 1200;
        const startTime = performance.now();

        function updateCounter(now) {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = Math.floor(target * eased);

          element.textContent = `${value.toLocaleString("pt-BR")}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        }

        requestAnimationFrame(updateCounter);
        observer.unobserve(element);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));
}

/* =========================
   ANO AUTOMÁTICO NO RODAPÉ
========================= */
const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
