// Building
const getComponent = (c) =>
  $.get(`/html/components/${c}.html`, (html) => $(c).replaceWith(html));
await Promise.all(["header", "footer", "contact"].map(getComponent));

// Routing
const { changeRoute } = await import("./router.js");
$(window).on("popstate", changeRoute);
changeRoute();

// Authenticating
window.isSignedIn = () => localStorage.username && localStorage.token;
if (window.isSignedIn()) (await import("./auth.js")).signIn(localStorage);
