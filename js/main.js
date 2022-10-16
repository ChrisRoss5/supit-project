$(() => {
  const bsNavbarCollapse = new bootstrap.Collapse(".navbar-collapse", {
    toggle: false,
  });

  const changeRoute = (e) => {
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

    // <nav> links & typewriter
    bsNavbarCollapse.hide();
    $(".nav-link.active").removeClass("active");
    if (activeId == "pocetna") {
      $(".nav-link[href='/']").addClass("active");
      typewriter.run();
    } else {
      $(`.nav-link[href='/${activeId}']`).addClass("active");
      typewriter.reset();
    }

    // <nav> sections
    if (activeId == "o-nama") {
      $("#navbar-sections").removeClass("navbar-sections-inactive");
      const instance = bootstrap.ScrollSpy.getInstance($("#o-nama")[0]);
      if (instance) instance.refresh();
    } else $("#navbar-sections").addClass("navbar-sections-inactive");
  };

  const typewriter = {
    videoEl: $("#pocetna > video")[0],
    $tw1: $("#tw-line-1"),
    $tw2: $("#tw-line-2"),
    $twDot: $("#tw-dot"),
    msg: "Budi izvrstan u onom što vidiš!$$$$$######voliš!$$$$$+Z$A$I$S$K$R$I$",
    intervalId: 0,
    reset() {
      this.videoEl.pause();
      this.videoEl.currentTime = 0;
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
      this.videoEl.play();
      let $t = this.$tw1;
      let i = 0;
      this.intervalId = setInterval(() => {
        if (i == this.msg.length) {
          this.swapAttrs($t, this.$twDot).css("display", "inline");
          return clearInterval(this.intervalId);
        }
        const char = this.msg[i++];
        if (char == "+") $t = this.swapAttrs($t, this.$tw2);
        else if (char != "$")
          $t.text(char == "#" ? $t.text().slice(0, -1) : $t.text() + char);
      }, 140);
    },
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      target.classList[isIntersecting ? "add" : "remove"]("section-visible");
    });
  });

  changeRoute();
  $(window).on("popstate", changeRoute);
  $("[router-link]").on("click", changeRoute);
  $("#o-nama > section").each((i, el) => observer.observe(el));
});
