import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";

const config: UserConfig = {
  server: {
    https: {
      cert: "/home/john/Projects/Libs/localhost.pem",
      key: "/home/john/Projects/Libs/localhost-key.pem"
    }
  },
  plugins: [
    sveltekit()
  ],
};

export default config;
