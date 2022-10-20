for (const c of ["header", "footer", "contact"])
  $(c).replaceWith(await $.get(`/html/components/${c}.html`));
const { changeRoute } = await import("./router.js");

changeRoute();
$(window).on("popstate", changeRoute);
$("form").on("submit", (e) => {
  $(window).one("blur", () => {
    e.target.reset();
    $("form .btn-danger").click();
  });
});
