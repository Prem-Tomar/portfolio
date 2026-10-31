# Search visibility and approved favicon

The favicon is the user-approved silver PT monogram on charcoal, with a small
violet accent. `public/favicon.svg` is the editable vector source. PNG fallbacks,
an ICO containing 16/32/48px images, and a 180px touch icon use the same geometry.
`public/social-preview.png` is the matching 1200×630 sharing image.

`npm run build` builds the browser assets, renders the same React application to
HTML at build time, and adds JSON-LD profile data. The temporary server build is
under ignored `work/prerender/`; only `dist/` is deployed. No running server or
new runtime service is required on GitHub Pages. The browser hydrates that HTML.

Recruiter topics are rendered as ordinary panels with one visible at a time.
Every panel contains the same information visitors can reveal through its topic
button. This keeps skills, projects and future plans in the initial HTML without
introducing repeated visible sections or different content for crawlers.

Future degrees remain future goals in the visible content and JSON-LD; they are
not represented as completed credentials or current enrolments. The structured
profile omits date of birth and private employment information. `robots.txt` and
the sitemap refer to the single canonical homepage; section fragments are not
submitted as separate pages. Search ranking or rich-result appearance is not
guaranteed by these implementation checks.

Primary references:

- [Google: JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Google: favicon guidelines](https://developers.google.com/search/docs/appearance/favicon-in-search)
- [Google: profile structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page)
- [Vite: pre-rendering and hydration](https://vite.dev/guide/ssr.html)
