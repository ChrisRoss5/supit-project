$(() => {return
  const router = (e) => {
    let location = window.location.pathname.slice(1);
    if (e && e.type == "click") {
      location = e.target.getAttribute("href").slice(1);
      history.pushState(null, null, e.target.href);
      e.preventDefault();
    }
    const $activeMain = $(".main-active");
    if ($activeMain.length) $activeMain.removeClass("main-active");
    let $activeMainNew = $("#" + (location || "pocetna"));
    if (!$activeMainNew.length) $activeMainNew = $("#pocetna");
    if ($activeMainNew.attr("id") == "pocetna") typewriter.run();
    $activeMainNew.addClass("main-active");
  };

  const typewriter = {
    $tw1: $("#tw-line-1"),
    $tw2: $("#tw-line-2"),
    $twDot: $("#tw-dot"),
    msg: "Budi izvrstan u onom što vidiš!$$$$$$$######voliš!$$$$$$$$$+Z$A$I$S$K$R$I$",
    intervalId: 0,
    reset() {
      this.$tw1.empty();
      this.$tw2.empty();
      this.$twDot.css("display", "none");
      this.swapAttrs(this.$twDot, this.$tw1);
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
