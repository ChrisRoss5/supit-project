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

Simply the best, 10/10. **The only difference** between branches `vue` and `vue-full` is that the former uses lazy routing and async components (Contact.vue).

### React

Overcomplicated with too much boilerplate. As with **Vue**, **the only difference** between branches `react` and `react-full` is that the former uses lazy routing and async components (Contact.tsx).

### Svelte

Unlike **Vue** and **React**, there's no support for `HeadlessUI`
so I had to bring functionality to `modal` and `autocomplete` components myself.
Apart from that, all **Vue**, **React** & **Svelte** functionality and design should look 100% identical from a user's perspective.
Overall, it's almost as good as **Vue** in terms of developer experience.

## Performance

todo: add path comparisons to supit.k1k1.dev

---

## Todo

- Angular version with Vite or Webpack
- [Make SvelteKit bundle all chunks into a single bundle](https://www.reddit.com/r/sveltejs/comments/rqo5o2/make_sveltekit_bundle_all_ts_files_into_a_single/) (no solution yet)

## Good to know

- [Rendering Glossary](https://kit.svelte.dev/docs/glossary) by SvelteKit
- [Bundler Glossary](https://webpack.js.org/glossary/) by Webpack
- [State of JS 2022](https://2022.stateofjs.com/)
- [State of CSS 2022](https://2022.stateofcss.com/)
