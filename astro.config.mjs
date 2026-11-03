// import { defineConfig } from 'astro/config';

// import icon from 'astro-icon';

// import react from '@astrojs/react';

// // https://astro.build/config
// export default defineConfig({
//   integrations: [icon(), react()]
// });

import { defineConfig } from "astro/config";
import icon from "astro-icon";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // Production URL: used for canonical, Open Graph and sitemap URLs.
  site: "https://cozylounge.in",
  integrations: [icon(), react()],
});
