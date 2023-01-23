# Visit [supit.k1k1.dev](https://supit.k1k1.dev/) to explore all versions!
Hosted on Cloudflare with automatic `build` per branch on `push` or `merge`.

This branch (supit.k1k1.dev) is built with vanilla JS & custom CSS.

## Installation
Don't forget to `npm i` before you `npm run dev` after switching to a branch with `package.json`.

## Comparisons (ordered by completion).

### jQuery
Has more functionality at `/o-nama` and `/novost/1`
- because it utilizes `bootstrap.ScrollSpy`, which highlights navbar links based on the most visible section.
- because it utilizes `bootstrap.Carousel`, which supports swiping on touch devices.

Note that there's no `build` process.

DX: Will not use **jQuery** NOR **Bootstrap** ever again.

### Vue
DX: Simply _the best_.

### React
DX: Overcomplicated with too much boilerplate.

### Svelte
DX: Almost as good as **Vue**, but the lack of build configs & lighthouse performance is disappointing.

There's a reason why the performance is not as ideal, mentioned in [SvelteKit Docs](https://kit.svelte.dev/docs/adapter-static#spa-mode).

Unlike **Vue** and **React**, there's no support for `HeadlessUI`
so I had to bring functionality to `modal` and `autocomplete` components myself.
Apart from that, all **Vue**, **React** & **Svelte** functionality and design should look 100% identical from a user's perspective.

## Todo

[Make SvelteKit bundle all chunks into a single bundle](https://www.reddit.com/r/sveltejs/comments/rqo5o2/make_sveltekit_bundle_all_ts_files_into_a_single/) (no fix yet)

## Good to know

[Rendering Glossary](https://kit.svelte.dev/docs/glossary) by SvelteKit