import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { cloudflare } from "@cloudflare/vite-plugin";
// import { base } from 'motion/react-client'

export default defineConfig({
  //  base: process.env.NODE_ENV === 'production' ? '/mu-portfolio-2/' : '/',
  plugins: [// The React and Tailwind plugins are both required for Make, even if
  // Tailwind is not being actively used – do not remove them
  react(), tailwindcss(), cloudflare()],
    // base: '/mu-portfolio-2/',
    base: "/",
  resolve: {
    alias: {
      // Alias @ to the src directory
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})