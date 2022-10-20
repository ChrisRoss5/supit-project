import { changeRoute } from "./router.js";

console.log("PAGE LOADED");

// GENERAL
changeRoute();
$(window).on("popstate", changeRoute);
$("[router-link]").on("click", changeRoute);

// KONTAKT
$("form").on("submit", (e) => {
  $(window).one("blur", () => {
    e.target.reset();
    $("form .btn-danger").click();
  });
});