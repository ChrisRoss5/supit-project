/* https://developers.google.com/speed/docs/insights/v5/get-started#javascript */

import { loader, getGauge, updateGauge, resetGauges } from "./gauge.js";
import projects from "./projects.js";

const APIkey = "AIzaSyCuC1VTP2JRefN98l8e1jA6Ga8OIPXq2LE";
const devices = ["mobile", "desktop"];
const categories = ["Performance", "Accessibility", "Best Practices"];

const html = projects.map(getProject).join("");
document.querySelector("#projects").insertAdjacentHTML("beforeend", html);
document.querySelector("#selector").oninput = onSelectorInput;
document.querySelector("#selector button").onclick = onSelectorClick;
let path = "/";

function onSelectorInput(e) {
  path = e.target.value;
  document.querySelectorAll(".project").forEach((project) => {
    const newLink = `https://${project.id}.supit.k1k1.dev${path}`;
    const newTitle = `${project.id}.supit.k1k1.dev${path == "/" ? "" : path}`;
    project.querySelector(".project-link").href = newLink;
    project.querySelector(".project-title").textContent = newTitle;
    project.querySelectorAll("a").forEach((el) => {
      const re = /(?<=k1k1\.dev).*(?=&form_factor)/;
      el.href = el.href.replace(re, encodeURIComponent(path));
    });
  });
}

async function onSelectorClick() {
  this.disabled = true;
  resetGauges();
  const loaderContainers = document.querySelectorAll(".loader-container");
  loaderContainers.forEach((el) => (el.style.opacity = 1));
  const projects = [...document.querySelectorAll(".project")];
  await Promise.all(projects.map(({ id }, i) => updateReports(id, i)));
  this.disabled = false;
}

function getProject({ name, type, tech }, i) {
  const style = `animation: reset 1s ${i * 150}ms forwards`;
  return /* html */ `
    <div id="${name}" class="project" style="${style}">
      <a
        class="project-link"
        href="https://${name}.supit.k1k1.dev/"
        target="_blank"
      >
        <h2>
          <img src="/icons/${name.replace("-full", "")}.svg" alt="icon" />
          <span class="project-title">${name}.supit.k1k1.dev</span>
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
        <div class="loader-container">${loader}</div>
        ${categories.map(getGauge).join("")}
      </div>
      <div>Open ${device} report</div>
    </a>`;
}

async function updateReports(name, i) {
  const audits = devices.map((device) => runPagespeedAPI(name, device));
  (await Promise.all(audits)).forEach((percentages, j) => {
    const scoresEl = document.querySelector(`[data-${i}] [data-${j}]`);
    scoresEl.firstElementChild.style.opacity = 0; // loader
    setTimeout(() => {
      percentages.forEach((p, k) => {
        const u = () => updateGauge(scoresEl.children[k + 1], p);
        setTimeout(u, (j * percentages.length + k) * 150);
      });
    }, 300);
  });
  return audits;
}

async function runPagespeedAPI(name, device) {
  const api = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
  const params = {
    url: `https://${name}.supit.k1k1.dev${path}`,
    strategy: device.toUpperCase(),
    key: APIkey,
  };
  const wtfGoogle = (c) => "category=" + c.replaceAll(" ", "_").toUpperCase();
  const url = new URL(api);
  url.search = new URLSearchParams(params).toString();
  url.search += "&" + categories.map(wtfGoogle).join("&");
  const json = await fetch(url).then((response) => response.json());
  console.log(`FULL REPORT FOR ${name}, ${device}:`, json);
  if (!json.lighthouseResult) return Array(categories.length).fill(-1);
  const _categories = json.lighthouseResult.categories;
  return categories.map(
    (c) => _categories[c.replaceAll(" ", "-").toLowerCase()].score * 100
  );
}
