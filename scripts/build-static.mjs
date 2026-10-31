import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "vite";

await build();
await build({
  publicDir: false,
  build: {
    ssr: "src/entry-server.tsx",
    outDir: "work/prerender",
    emptyOutDir: true,
  },
});

const { render, profileStructuredData } = await import(pathToFileURL(resolve("work/prerender/entry-server.js")).href);
const page = await readFile("dist/index.html", "utf8");
const outlet = '<div id="root"></div>';
if (!page.includes(outlet)) throw new Error("Static HTML outlet is missing");
const schema = JSON.stringify(profileStructuredData).replaceAll("<", "\\u003c");
const html = page
  .replace(outlet, () => `<div id="root">${render()}</div>`)
  .replace("</head>", () => `    <script type="application/ld+json">${schema}</script>\n  </head>`);
await writeFile("dist/index.html", html);
console.log("Pre-rendered profile, skills, projects and future plans into static HTML.");
