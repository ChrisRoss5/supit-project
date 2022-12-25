const { changeView } = await import("./router.js");

const init = () => {
  $("form#auth").submit(async (e) => {
    e.preventDefault();
    const response = await $.post({
      url: e.target.action,
      data: JSON.stringify(Object.fromEntries(new FormData(e.target))),
      processData: false,
      contentType: "application/json",
    });
    if (!response.isSuccess) {
      $("#error").show().html(response.errorMessages.join("<br>"));
      return;
    }
    if (!response.data) {
      changeView("prijava");
      return;
    }
    $("#error").hide();
    $("#success").show();
    signIn(response.data);
    setTimeout(() => changeView("pocetna"), 3000);
  });
};

const signIn = ({ username, token }) => {
  localStorage.setItem("username", username);
  localStorage.setItem("token", token);
  $(".nav-link[href='/prijava']").hide();
  $(".nav-link[href='/odjava']").show();
  $("#header-username").text(username);
  $.ajaxSetup({ headers: { Authorization: "Bearer " + token } });
};

const signOut = (e) => {
  e.preventDefault();
  localStorage.clear();
  $(".nav-link[href='/prijava']").show();
  $(".nav-link[href='/odjava']").hide();
  $("#header-username").empty();
  $.ajaxSetup({ headers: { Authorization: "" } });
  changeView("pocetna");
};

$(".nav-link[href='/odjava']").on("click", signOut);

export { init as default, signIn, signOut };
