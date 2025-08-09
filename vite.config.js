import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// @ts-ignore
import eslint from "vite-plugin-eslint";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        proxy: {
            "/api": "https://ecommerce-api-psi-seven.vercel.app",
        },
    },
});
