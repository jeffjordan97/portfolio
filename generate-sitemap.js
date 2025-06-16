// generate-sitemap.js
const fs = require("fs");
const path = require("path");
const base = "https://jeffreyjordan.dev";
const routes = [
  "hero",
  "about",
  "skills",
  "experience",
  "work",
  "reviews",
  "contact",
];
const dist = path.join(__dirname, "dist/browser");

const xml =
  `<?xml version="1.0"?>\n<urlset xmlns="...">\n` +
  routes
    .map((r) => {
      const loc = `${base}/${r}`;
      const lastmod = new Date().toISOString().split("T")[0];
      const pr = r === "" ? "1.0" : "0.8";
      return `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><priority>${pr}</priority></url>`;
    })
    .join("\n") +
  `\n</urlset>`;

fs.writeFileSync(path.join(dist, "sitemap.xml"), xml);
console.log("✅ sitemap.xml generated");
