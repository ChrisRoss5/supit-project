$("header").replaceWith(await $.get("/components/header.html"));
$("contact").replaceWith(await $.get("/components/modal-contact.html"));
$("footer").replaceWith(await $.get("/components/footer.html"));
const { changeRoute } = await import("./router.js");

changeRoute();
$(window).on("popstate", changeRoute);
$("form").on("submit", (e) => {
  $(window).one("blur", () => {
    e.target.reset();
    $("form .btn-danger").click();
  });
});
