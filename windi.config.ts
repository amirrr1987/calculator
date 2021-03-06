import { defineConfig } from "windicss/helpers";

export default defineConfig({
  attributify: true,

  extract: {
    include: ["src/**/*.{vue,html,jsx,tsx}"],
    exclude: ["node_modules", ".git"],
  },
});
