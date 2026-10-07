import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://georgiawaterdamagehelp.com",
  integrations: [sitemap({ filter: (page) => !page.includes("/thanks") })],
});
