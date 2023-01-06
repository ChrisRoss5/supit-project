const msg = "Budi izvrstan u onom što vidiš!$$$######voliš!$$$$+ZAISKRI$$";

export default () => {
  const $tw1 = $("#tw-line-1");
  const $tw2 = $("#tw-line-2");
  const $twDot = $("#tw-dot");
  let $tw = $tw1;
  let i = 0;
  const intervalId = setInterval(() => {
    if (i == msg.length) {
      $tw.removeAttr("blinking");
      $twDot.attr("blinking", "").css("display", "inline");
      return clearInterval(intervalId);
    }
    const char = msg[i++];
    if (char == "+") {
      $tw.removeAttr("blinking");
      $tw = $tw2.attr("blinking", "");
    } else if (char != "$") {
      $tw.text(char == "#" ? $tw.text().slice(0, -1) : $tw.text() + char);
    }
  }, 150);
};
