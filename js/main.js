import { changeRoute } from "./router.js";

const bsCarousel = new bootstrap.Carousel("#carousel-controls");
const sectionsObserver = new IntersectionObserver((entries) => {
  entries.forEach(({ target, isIntersecting }) => {
    target.classList[isIntersecting ? "add" : "remove"]("section-visible");
  });
});

// GENERAL
changeRoute();
$(window).on("popstate", changeRoute);
$("[router-link]").on("click", changeRoute);

// O NAMA
$("#o-nama > section").each((i, el) => sectionsObserver.observe(el));

// NOVOSTI
$("[id^='novost-'] [role='button']").on("click", (e) => {
  bsCarousel.to(e.target.dataset.n);
});

// KONTAKT
$("form").on("submit", (e) => {
  $(window).one("blur", () => {
    $("form .btn-danger").click();
    e.target.reset();
  });
});
