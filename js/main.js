$(() => {
  const router = (e) => {
    let path = location.pathname;

    // event
    if (e && e.type == "click") {
      e.preventDefault();
      const href = e.target.getAttribute("href");
      if (href == path) return;
      history.pushState(null, null, href);
      if (href[0] == "#") return;
      path = href;
    }

    // <main>
    $(".main-active").removeClass("main-active");
    let $activeMain = $("#" + (path.slice(1) || "pocetna"));
    if (!$activeMain.length) $activeMain = $("#pocetna");
    const activeId = $activeMain.addClass("main-active").attr("id");

    // <nav> links
    $(".nav-link.active").removeClass("active");
    if (activeId == "pocetna") {
      $(".nav-link[href='/']").addClass("active");
      typewriter.run();
    } else $(`.nav-link[href='/${activeId}']`).addClass("active");

    // <nav> sections
    if (activeId == "o-nama") {
      $("#navbar-sections").removeClass("navbar-sections-inactive");
      const instance = bootstrap.ScrollSpy.getInstance($("#o-nama")[0]);
      if (instance) instance.refresh();
    } else $("#navbar-sections").addClass("navbar-sections-inactive");
  };

  const typewriter = {
    $tw1: $("#tw-line-1"),
    $tw2: $("#tw-line-2"),
    $twDot: $("#tw-dot"),
    msg: "Budi izvrstan u onom što vidiš!$$$$$$$######voliš!$$$$$$$$$+Z$A$I$S$K$R$I$",
    intervalId: 0,
    reset() {
      this.$twDot.css("display", "none");
      this.swapAttrs(this.$twDot, this.$tw1).empty();
      this.$tw2.removeAttr("blinking").empty();
      clearInterval(this.intervalId);
    },
    swapAttrs($el1, $el2) {
      $el1.removeAttr("blinking");
      return $el2.attr("blinking", "");
    },
    run() {
      this.reset();
      let $el = this.$tw1;
      let i = 0;
      this.intervalId = setInterval(() => {
        if (i == this.msg.length) {
          this.swapAttrs($el, this.$twDot).css("display", "inline");
          return clearInterval(this.intervalId);
        }
        const char = this.msg[i++];
        if (char == "+") $el = this.swapAttrs($el, this.$tw2);
        else if (char != "$")
          $el.text(char == "#" ? $el.text().slice(0, -1) : $el.text() + char);
      }, 100);
    },
  };

  $("[router-link]").on("click", router);
  $(window).on("popstate", router);
  router();
});
