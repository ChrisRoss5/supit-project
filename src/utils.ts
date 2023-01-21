export const getImage = (url: string, folder = "img") =>
  new URL(`./assets/${folder}/${url}`, import.meta.url).href;

export const validate = (e: Event) => {
  let el = e.target as HTMLInputElement;
  if (el.value === "") {
    el.setCustomValidity("Ispunite ovo polje!");
  } else if (el.validity.typeMismatch) {
    el.setCustomValidity("Neispravan email!");
  } else {
    el.setCustomValidity("");
  }
};
