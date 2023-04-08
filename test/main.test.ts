import { asserts } from "../deps.ts"
import { Sitemap } from "../mod.ts"

const { assertEquals } = asserts;

Deno.test("one",()=>{
  const sitemap = new Sitemap("https://example.com/");
  sitemap.add("about")
  sitemap.add("marisa")
  //assertEquals(sitemap.sitemap,``)
})