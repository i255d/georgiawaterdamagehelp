import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://georgiawaterdamagehelp.com",
  // One URL per page, no trailing slash (/buford, not /buford/). Internal links,
  // canonical tags and the sitemap all use this form.
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [sitemap({ filter: (page) => !page.includes("/thanks") })],
});
