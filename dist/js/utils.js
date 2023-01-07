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
