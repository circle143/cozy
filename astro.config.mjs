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
  integrations: [icon(), react()],
  output: "server", // API routes enable karne ke liye

  // Optional: Agar specific adapters chahiye to
  // adapter: netlify() // Netlify ke liye
  // adapter: vercel() // Vercel ke liye
});
