/* https://developers.google.com/speed/docs/insights/v5/get-started#javascript */

const useAPI = true;
const APIkey = "AIzaSyCuC1VTP2JRefN98l8e1jA6Ga8OIPXq2LE";
const devices = ["mobile", "desktop"];
const categories = ["Performance", "Accessibility", "Best Practices"];

const jqueryTech =
  "JavaScript modules, jQuery + jQuery UI, Bootstrap + Bootstrap Icons";
const svelteTech =
  "Vite, TypeScript, PostCSS, Tailwind, Google Material Icons, Svelte + SvelteKit";
const vueTech =
  "Vite, TypeScript, PostCSS, Tailwind + HeadlessUI, Google Material Icons,<br>" +
  "Vue + Vue Router + Pinia";
const reactTech =
  "Vite, TypeScript, PostCSS, Tailwind + HeadlessUI, Google Material Icons,<br>" +
  "React + React Router + React Redux + React Transition Group";
const projects = [
  {
    name: "jquery",
    tech: jqueryTech,
    type: "Lazy Loaded · Resource Bytes: 169 KiB (418 KiB with jQueryUI), 5 files",
  },
  {
    name: "svelte",
    tech: svelteTech,
    type: "Lazy Loaded on hover · Resource Bytes: 72 KiB, 15 chunks",
  },
  {
    name: "vue",
    tech: vueTech,
    type: "Lazy Loaded · Resource Bytes: 171 KiB, 1 chunk",
  },
  {
    name: "vue-full",
    tech: vueTech,
    type: "Fully Client Side Rendered · Resource Bytes: 243 KiB, 1 chunk",
  },
  {
    name: "react",
    tech: reactTech,
    type: "Lazy Loaded · Resource Bytes: 233 KiB, 3 chunks",
  },
  {
    name: "react-full",
    tech: reactTech,
    type: "Fully Client Side Rendered · Resource Bytes: 312 KiB, 1 chunk",
  },
];

const content = projects.map(getProject).join("");
document.body.insertAdjacentHTML("beforeend", content);

function getProject({ name, type, tech }, i) {
  if (useAPI) {
    /* const audits = [
      [50, 100, 100],
      [100, 100, 100],
    ]; */
    const audits = devices.map((device) => runPagespeedAPI(name, device));
    Promise.all(audits).then((scores) => {
      scores.forEach((percentages, j) => {
        const scoresEl = document.querySelector(`[data-${i}] [data-${j}]`);
        scoresEl.firstElementChild.style.opacity = 0; // loader
        setTimeout(() => {
          percentages.forEach((p, k) => {
            setTimeout(() => {
              updateGauge(scoresEl.children[k + 1], p);
            }, (j * percentages.length + k) * 150);
          });
        }, 300);
      });
    });
  }

  return /* html */ `
    <div class="project" style="animation: reset 1s ${i * 150}ms forwards">
      <a
        class="main-link"
        href="https://${name}.supit.k1k1.dev/"
        target="_blank"
      >
        <h2>
          <img src="/icons/${name.replace("-full", "")}.svg" alt="icon" />
          ${name}.supit.k1k1.dev
        </h2>
        <p>${tech}</p>
        ${type}
      </a>
      <div class="reports" data-${i}>
        ${devices.map(getReport.bind({ name })).join("")}
      </div>
    </div>`;
}

function getReport(device, j) {
  const href =
    "https://pagespeed.web.dev/report?url=https%3A%2F%2F" +
    `${this.name}.supit.k1k1.dev%2F&form_factor=${device}`;

  return /* html */ `
    <a href="${href}" target="_blank">
      <div class="scores" data-${j}>
        <div class="loader-container">
          <img src="/icons/loader.svg" alt="loader" />
        </div>
        ${categories.map(getGauge).join("")}
      </div>
      <div>Open ${device} report</div>
    </a>`;
}

function getGauge(category) {
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

function updateGauge(gaugeWrapper, percentage) {
  const c = percentage >= 90 ? ["#0c6", "#0E8F0F"] : ["#fa3", "#CC5023"];
  const dash = (percentage / 100) * (percentage == 100 ? 350 : 346);
  const style = `--gauge-color-1: ${c[0]}; --gauge-color-2: ${c[1]}; transform: none;`;
  gaugeWrapper.querySelector(".gauge-svg-wrapper").setAttribute("style", style);
  gaugeWrapper.querySelector(".gauge-arc").style.strokeDasharray = dash;
  gaugeWrapper.querySelector(".gauge-percentage").textContent = percentage;
  gaugeWrapper.style.opacity = 1;
}

async function runPagespeedAPI(name, device) {
  const api = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
  const params = {
    url: `https://${name}.supit.k1k1.dev/`,
    strategy: device.toUpperCase(),
    key: APIkey,
  };
  const wtfGoogle = (c) => "category=" + c.replaceAll(" ", "_").toUpperCase();
  const url = new URL(api);
  url.search = new URLSearchParams(params).toString();
  url.search += "&" + categories.map(wtfGoogle).join("&");
  const json = await fetch(url).then((response) => response.json());
  console.log(`FULL REPORT FOR ${name}, ${device}:`, json);
  const _categories = json.lighthouseResult.categories;
  return categories.map(
    (c) => _categories[c.replaceAll(" ", "-").toLowerCase()].score * 100
  );
}
