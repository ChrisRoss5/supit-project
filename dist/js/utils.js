export const enableButton = (button) => {
  button
    .attr("disabled", false)
    .removeClass("btn-outline-dark")
    .addClass("btn-dark");
};

export const disableButton = (button) => {
  button
    .attr("disabled", true)
    .removeClass("btn-dark")
    .addClass("btn-outline-dark");
};

export const loadStylesheet = (href) => {
  if (document.querySelector(`link[href="${href}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
};

export const loadScript = async (attrs) => {
  return new Promise((resolve) => {
    if (document.querySelector(`script[src="${attrs.src}"]`))
      return resolve(true);
    const script = document.createElement("script");
    for (const key in attrs) script.setAttribute(key, attrs[key]);
    script.onload = resolve;
    document.head.appendChild(script);
  });
};
