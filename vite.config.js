// import { defineConfig } from 'vite'
// import reactRefresh from '@vitejs/plugin-react-refresh'
// import { resolve } from 'path'
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [reactRefresh()],
//   base: './',
//   publicDir: 'public',
//   resolve: { alias: { 
//     '@': '/src',
//     '@detail': '/src/Pages/WorkoutPages'
//   }},
//   build: {
//     rollupOptions: {
//       input: {
//         main: resolve(__dirname, 'index.html'),
//         nested: resolve(__dirname, './nested/index.html')
//       }
//     }
//   }
// })
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  css: { postcss: { plugins: [ {
    postcssPlugin: 'internal:charset-removal',
    AtRule: {
      charset: (atRule) => {
        if (atRule.name === 'charset') {
          atRule.remove();
        }
      }
    }
  }]}},
  plugins: [reactRefresh()],
    resolve: { alias: { 
      '@':              '/src',
      '@generalPage':   '/src/Pages/GeneralPages',
      '@userPage':      '/src/Pages/UserPages',
      '@workoutPage':   '/src/Pages/WorkoutPages',
      '@PageComponent': '/src/Components/PageComponents/', 
      '@PageSection':   '/src/Components/PageSections',
      '@Wrapper':       '/src/Components/Wrappers',
      '@Navigation':    '/src/Components/Navigation'
   }},
})
