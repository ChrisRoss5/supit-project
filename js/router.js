const sectionsObserver = new IntersectionObserver((entries) => {
  entries.forEach(({ target, isIntersecting }) => {
    target.classList[isIntersecting ? "add" : "remove"]("section-visible");
  });
});
const bsNavbarCollapse = new bootstrap.Collapse("#navbar-collapse", {
  toggle: false,
});
const bsScrollConfig = { target: "#navbar-sections", smoothScroll: true };

const changeRoute = (e) => {
  let path = location.pathname;
  if (e && e.type == "click") {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    if (href == path) return;
    history.pushState(null, null, href);
    if (href[0] == "#") return;
    path = href;
  }
  path = path.slice(1) || "pocetna";
  if (!$("#" + path).length) changeView(path);
};
const changeView = async (path) => {
  const html = await $.get(`/views/${path}.html`);
  if (html.startsWith("<!")) return changeView("pocetna");
  $("main").replaceWith(html);

  bsNavbarCollapse.hide(); // for mobile users
  $(".nav-link.active").removeClass("active");
  $("[router-link]").off("click").on("click", changeRoute);
  $("body").css("opacity", "1");
  $(window).scrollTop(0);

  switch (path) {
    case "pocetna":
      $(".nav-link[href='/']").addClass("active");
      (await import("./typewriter.js")).default();
      break;
    case "o-nama":
      $("#o-nama > section").each((i, el) => sectionsObserver.observe(el));
      $("#navbar-sections").removeClass("sections-off");
      new bootstrap.ScrollSpy("#o-nama", bsScrollConfig);
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
  if (path != "o-nama") $("#navbar-sections").addClass("sections-off");
};

export { changeRoute };
