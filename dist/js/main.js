// Building
const getComponent = (c) =>
  $.get(`/html/components/${c}.html`, (html) => $(c).replaceWith(html));
await Promise.all(["header", "footer", "contact"].map(getComponent));

// Routing
const { pushRoute, replaceView } = await import("./router.js");
$(window).on("popstate", pushRoute);
replaceView(location.pathname);

// Authenticating
window.isSignedIn = () => localStorage.username && localStorage.token;
if (window.isSignedIn()) (await import("./auth.js")).signIn(localStorage);
