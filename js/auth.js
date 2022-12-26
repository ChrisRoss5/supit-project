const { changeView } = await import("./router.js");

const enableButton = (button) => {
  button
    .attr("disabled", false)
    .removeClass("btn-outline-dark")
    .addClass("btn-dark");
};

const disableButton = (button) => {
  button
    .attr("disabled", true)
    .removeClass("btn-dark")
    .addClass("btn-outline-dark");
};

const init = () => {
  const $submitBtn = $("form#auth button[type='submit']");
  $("form#auth").submit(async (e) => {
    e.preventDefault();
    disableButton($submitBtn);
    const response = await $.post({
      url: e.target.action,
      data: JSON.stringify(Object.fromEntries(new FormData(e.target))),
      processData: false,
      contentType: "application/json",
    });
    if (!response.isSuccess) {
      $("#error").show().html(response.errorMessages.join("<br>"));
      enableButton($submitBtn);
      return;
    }
    if (!response.data) {
      changeView("prijava");
      return;
    }
    $("#success").show().next().hide();
    signIn(response.data);
    setTimeout(() => {
      if (location.pathname == "/prijava") changeView("pocetna");
    }, 3000);
  });
};

const signIn = ({ username, token }) => {
  $(".nav-link[href='/prijava']").hide();
  $(".nav-link[href='/odjava']").show();
  $("#header-username").text(username);
  $.ajaxSetup({ headers: { Authorization: "Bearer " + token } });
  localStorage.setItem("username", username);
  localStorage.setItem("token", token);
};

const signOut = (e) => {
  if (e) {
    e.preventDefault();
    changeView("pocetna");
  }
  $(".nav-link[href='/prijava']").show();
  $(".nav-link[href='/odjava']").hide();
  $("#header-username").empty();
  $.ajaxSetup({ headers: { Authorization: "" } });
  localStorage.clear();
};

$(".nav-link[href='/odjava']").on("click", signOut);

export { init as default, signIn, signOut };
