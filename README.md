# deno-sitemap
Sitemap genelater for deno
## example
Code: 
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
Output:
```xml
<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://example.com/info</loc></url><url><loc>https://example.com/news</loc><lastmod>0.9</lastmod></url></urlset>
```
