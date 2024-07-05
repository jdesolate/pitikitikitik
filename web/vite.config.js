import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // vite config
    define: {
      "import.meta.env.VITE_MAPBOX_ACCESS_TOKEN": JSON.stringify(
        process.env.VITE_MAPBOX_ACCESS_TOKEN
      ),
    },
    plugins: [react()],
  };
});
