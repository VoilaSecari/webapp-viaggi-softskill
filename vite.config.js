import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // utile se usi 127.0.0.1
    port: 5176,
    strictPort: true,
    watch: {
      usePolling: true, // <-- questa riga è spesso NECESSARIA su macOS
    },
  },
});
