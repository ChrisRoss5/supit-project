export default {
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
