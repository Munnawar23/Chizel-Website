import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          gsap: ['gsap', '@gsap/react', 'gsap/ScrollTrigger'],
          icons: ['react-icons'],
          utils: ['clsx', 'react-use'],
          smooth: ['lenis'],
        },
        // Optimize for international distribution
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
      // Tree shaking optimization
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false,
      },
    },
    chunkSizeWarningLimit: 1000,
    // Better source maps for production debugging
    sourcemap: false,
    // Optimize CSS
    cssCodeSplit: true,
    // Optimize assets
    assetsInlineLimit: 4096,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'gsap', '@gsap/react', 'gsap/ScrollTrigger'],
    exclude: ['@gsap/react'],
  },
  server: {
    host: true,
    port: 3000,
    // Optimize for development
    hmr: {
      overlay: false,
    },
  },
  preview: {
    host: true,
    port: 4173,
  },
  // Performance optimizations
  esbuild: {
    drop: ['console', 'debugger'],
    pure: ['console.log', 'console.info', 'console.debug', 'console.warn'],
  },
  // CSS optimization
  css: {
    devSourcemap: false,
  },
})
