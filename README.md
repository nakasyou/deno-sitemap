# deno-sitemap
Sitemap genelater for deno
## example
```ts
import { Sitemap } from "https://deno.land/x/deno_sitemap/mod.ts";

const sitemap: Sitemap = new Sitemap("https://example.com");
sitemap.add("info");
sitemap.add("news",{
  lastmod: "2023-04-08",
  priority: 0.9,
  changefreq: "daily",
});
console.log(sitemap.sitemap);
```
