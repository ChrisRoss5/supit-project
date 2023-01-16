const sectionsObserver = new IntersectionObserver((entries) => {
  entries.forEach(({ target, isIntersecting }) => {
    target.classList[isIntersecting ? "add" : "remove"]("section-visible");
  });
});
const bsNavbarCollapse = new bootstrap.Collapse("#navbar-collapse", {
  toggle: false,
});
const bsScrollConfig = { target: "#navbar-sections", smoothScroll: true };
const toggleNavbarSections = (show = false) =>
  $("#navbar-sections")
    [show ? "removeClass" : "addClass"]("sections-hidden")
    .find("a")
    .attr("tabindex", show ? "0" : "-1");

export const pushRoute = (e) => {
  let path = location.pathname;
  if (e && e.type == "click") {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    if (href == path) return;
    history.pushState(null, null, href);
    if (href[0] == "#") return;
    path = href;
  }
  replaceView(path.slice(1) || "pocetna");
};

export const replaceRoute = (path) => {
  if (path == location.pathname) return;
  history.replaceState(null, null, path);
  replaceView(path.slice(1) || "pocetna");
};

export const replaceView = async (path) => {
  let html = await $.get(`/html/views/${path}.html`);
  if (html.startsWith("<!"))
    html = /* html */ `
    <main class="flex-grow-1 d-flex justify-content-center align-items-center fs-5">
      404 — Stranica ne postoji
    </main>`;
  $("main").replaceWith(html);

  bsNavbarCollapse.hide(); // for mobile users
  $(".nav-link.active").removeClass("active");
  $("[router-link]").off("click").on("click", pushRoute);
  $(window).scrollTop(0);

  switch (path) {
    case "prijava":
    case "registracija":
      (await import("./auth.js")).default();
      break;
    case "pocetna":
      $(".nav-link[href='/']").addClass("active");
      (await import("./typewriter.js")).default();
      break;
    case "o-nama":
      $("#o-nama > section").each((i, el) => sectionsObserver.observe(el));
      toggleNavbarSections(true);
      new bootstrap.ScrollSpy("#o-nama", bsScrollConfig); // nosonar
      if (location.hash) $(location.hash)[0].scrollIntoView();
      break;
    case "novost-1":
      const bsCarousel = new bootstrap.Carousel("#carousel-controls");
      $("#novost-1 [role='button']").on("click", (e) => {
        bsCarousel.to(e.target.dataset.n);
      });
      break;
    case "nastavni-plan":
      (await import("./courses.js")).default();
      break;
  }

  if (path != "pocetna") $(`.nav-link[href='/${path}']`).addClass("active");
  if (path != "o-nama") toggleNavbarSections(false);
};
