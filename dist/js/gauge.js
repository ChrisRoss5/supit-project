export const loader /* loader.svg */ = /* html */ `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <path fill="#ffaa33"
      d="M15.35898384862245 70 A40 40 0 0 1 70 15.358983848622458 L58.75 34.84455543377233 A17.5 17.5 0 0 0 34.84455543377232 58.75 Z"
      stroke="#ffaa33" stroke-width="2"></path>
    <path fill="#00cc66"
      d="M84.64101615137756 70 A40 40 0 0 0 70 15.358983848622458 L58.75 34.84455543377233 A17.5 17.5 0 0 1 65.15544456622767 58.75 Z"
      stroke="#00cc66" stroke-width="2"></path>
    <circle cx="50" cy="50" r="10" fill="#cc5023"></circle>
    <line x1="50" y1="50" x2="15" y2="50" stroke-linecap="round" stroke="#cc5023" stroke-width="5">
      <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s"
        keyTimes="0;0.10;0.25;0.5;0.60;0.75;1" begin="indefinite"
        values="40 50 50; 50 50 50; 40 50 50; 140 50 50; 130 50 50; 140 50 50; 40 50 50"></animateTransform>
    </line>
  </svg>`;

export function getGauge(category) {
  return /* html */ `
    <div class="gauge-wrapper">
      <div class="gauge-svg-wrapper">
        <svg class="gauge" viewBox="0 0 120 120">
          <circle class="gauge-base" r="56" cx="60" cy="60" stroke-width="8"></circle>
          <circle class="gauge-arc" r="56" cx="60" cy="60" stroke-width="8"></circle>
        </svg>
        <div class="gauge-percentage"></div>
      </div>
      <div class="gauge-label">${category}</div>
    </div>`;
}

export function updateGauge(gaugeWrapper, percentage) {
  const c = percentage >= 90 ? ["#0c6", "#0E8F0F"] : ["#fa3", "#CC5023"];
  const dash = (percentage / 100) * (percentage == 100 ? 350 : 346);
  const style = `--gauge-color-1: ${c[0]}; --gauge-color-2: ${c[1]}; transform: none;`;
  gaugeWrapper.querySelector(".gauge-svg-wrapper").setAttribute("style", style);
  gaugeWrapper.querySelector(".gauge-arc").style.strokeDasharray = dash;
  gaugeWrapper.querySelector(".gauge-percentage").textContent = percentage;
  gaugeWrapper.style.opacity = 1;
}

export function resetGauges() {
  const gaugeWrappers = document.querySelectorAll(".gauge-wrapper");
  gaugeWrappers.forEach((el) => (el.style.opacity = 0));
  const gaugeSvgWrappers = document.querySelectorAll(".gauge-svg-wrapper");
  gaugeSvgWrappers.forEach((el) => (el.style.transform = "scale(0.5)"));
  const gaugeArcs = document.querySelectorAll(".gauge-arc");
  gaugeArcs.forEach((el) => (el.style.strokeDasharray = "0 350"));
  const animateTransform = document.querySelectorAll("animateTransform");
  animateTransform.forEach((el) => el.beginElement());
}
