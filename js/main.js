for (const c of ["header", "footer", "contact"])
  $(c).replaceWith(await $.get(`/html/components/${c}.html`));

const { changeRoute } = await import("./router.js");

changeRoute();

$(window).on("popstate", changeRoute);

window.isSignedIn = () => localStorage.username && localStorage.token;

if (window.isSignedIn()) (await import("./auth.js")).signIn(localStorage);
