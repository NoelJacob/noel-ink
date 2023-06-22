import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";
import { sentrySvelteKit } from "@sentry/sveltekit";

const config: UserConfig = {
  plugins: [sentrySvelteKit(),sveltekit()],
};

export default config;
