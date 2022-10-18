import typewriter from "./typewriter.js";
import courses from "./courses.js";

const bsNavbarCollapse = new bootstrap.Collapse("#navbar-collapse", {
  toggle: false,
});
let bsScrollSpyInstance;
window.onload = () =>
  (bsScrollSpyInstance = bootstrap.ScrollSpy.getInstance($("#o-nama")[0]));

export const changeRoute = (e) => {
  let path = location.pathname;

  // event
  if (e && e.type == "click") {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    if (href == path) return;
    history.pushState(null, null, href);
    if (href[0] == "#") return;
    path = href;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });

  // <main>
  $(".main-active").removeClass("main-active");
  let $activeMain = $("#" + (path.slice(1) || "pocetna"));
  if (!$activeMain.length) $activeMain = $("#pocetna");
  const activeId = $activeMain.addClass("main-active").attr("id");

  // <nav-link>
  bsNavbarCollapse.hide();
  $(".nav-link.active").removeClass("active");
  if (activeId == "pocetna") {
    $(".nav-link[href='/']").addClass("active");
    typewriter.run();
  } else {
    $(`.nav-link[href='/${activeId}']`).addClass("active");
    typewriter.reset();
  }

  // O NAMA
  if (activeId == "o-nama") {
    $("#navbar-sections").removeClass("navbar-sections-inactive");
    if (bsScrollSpyInstance) bsScrollSpyInstance.refresh();
  } else $("#navbar-sections").addClass("navbar-sections-inactive");

  // NASTAVNI PLAN
  if (activeId == "nastavni-plan") courses.init();
};
