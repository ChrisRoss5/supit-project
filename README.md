## Visit [supit.k1k1.dev](https://supit.k1k1.dev/) to explore all versions!

Hosted on Cloudflare with automatic `build` per branch on `push` or `merge`.

This branch (supit.k1k1.dev) is built with vanilla JS & custom CSS.

It's using [PageSpeed Insights API](https://developers.google.com/speed/docs/insights/v5/about) to provide the most consistent scores from [Lighthouse](https://developer.chrome.com/docs/lighthouse/) audits.

## Installation

Don't forget to `npm i` before you `npm run dev` after switching to a branch with `package.json`.

All versions are configured to `npm run build` in `/dist` folder.

---

## Comparisons: UX/DX

### jQuery

Has more functionality at `/o-nama` and `/novost/1`

- because it utilizes `bootstrap.ScrollSpy`, which highlights navbar links based on the most visible section.
- because it utilizes `bootstrap.Carousel`, which supports swiping on touch devices.

Unlike other versions, this one does not use a `Bundler`, `TypeScript`, `PostCSS`, `Tailwind`, or `Google Material Icons`.
Instead, it uses `jQuery` and `jQueryUI`, along with `Bootstrap` and `Bootstrap Icons`.
Hopefully, I won't have to use those ever again.

### Vue

Simply the best, 10/10. The only difference between branches `vue` and `vue-full` is that the former uses lazy routing and async components (Contact.vue).
[Click to compare](https://github.com/ChrisRoss5/supit-projekt/compare/vue-full...vue).

### React

Overcomplicated with too much boilerplate. As with **Vue**, the only difference between branches `react` and `react-full` is that the former uses lazy routing and async components (Contact.tsx). [Click to compare](https://github.com/ChrisRoss5/supit-projekt/compare/react-full...react).

### Svelte

Unlike **Vue** and **React**, there's no support for `HeadlessUI`
so I had to bring functionality to `modal` and `autocomplete` components myself.
Apart from that, all **Vue**, **React** & **Svelte** functionality and design should look 100% identical from a user's perspective.
Overall, it's almost as good as **Vue** in terms of developer experience.

## Performance

Visit [supit.k1k1.dev](https://supit.k1k1.dev/) to run mobile & desktop Lighthouse tests for all projects and URLs.

These scores turn out to be the most common for **landing pages**:

<table>
  <tr>
    <th rowspan=2>Version</th>
    <th colspan=3>Mobile</th>
    <th colspan=3>Desktop</th>
  </tr>
  <tr>
    <th>Performance</th>
    <th>Accessibility</th>
    <th>Best Practices</th>
    <th>Performance</th>
    <th>Accessibility</th>
    <th>Best Practices</th>
  </tr>
  <tr>
    <td>jQuery</td>
    <td style="text-align: center">95</td>
    <td style="text-align: center">100</td>
    <td style="text-align: center">100</td>
    <td style="text-align: center">99</td>
    <td style="text-align: center">100</td>
    <td style="text-align: center">100</td>
  </tr>
  <tr>
    <td>Vue, Vue Full</td>
    <td style="text-align: center">87</td>
    <td style="text-align: center">100</td>
    <td style="text-align: center">100</td>
    <td style="text-align: center">99</td>
    <td style="text-align: center">100</td>
    <td style="text-align: center">100</td>
  </tr>
  <tr>
    <td>React, React Full</td>
    <td style="text-align: center">87</td>
    <td style="text-align: center">100</td>
    <td style="text-align: center">100</td>
    <td style="text-align: center">99</td>
    <td style="text-align: center">100</td>
    <td style="text-align: center">100</td>
  </tr>
  <tr>
    <td>Svelte</td>
    <td style="text-align: center">89</td>
    <td style="text-align: center">100</td>
    <td style="text-align: center">100</td>
    <td style="text-align: center">99</td>
    <td style="text-align: center">100</td>
    <td style="text-align: center">100</td>
  </tr>
</table>

Unfortunately, lazy loaded versions of **Vue** and **React** have the same scores as their fully loaded counterparts. However, they save a significant amount of bytes (~30%) on first load.
Because the website isn't that large, user experience is in all likelihood better with fully loaded versions. To find `Bytes Usage` from served files, open a report and press the `View Treemap` button below the metrics.

---

## Todo

- Angular version with Vite or Webpack
- [Make SvelteKit bundle all chunks into a single bundle](https://www.reddit.com/r/sveltejs/comments/rqo5o2/make_sveltekit_bundle_all_ts_files_into_a_single/) (no solution yet)

## Good to know

- [Rendering Glossary](https://kit.svelte.dev/docs/glossary) by SvelteKit
- [Bundler Glossary](https://webpack.js.org/glossary/) by Webpack
- [State of JS 2022](https://2022.stateofjs.com/)
- [State of CSS 2022](https://2022.stateofcss.com/)
