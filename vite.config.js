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
//     '@detail': '/src/Components/Pages/WorkoutPages'
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
  plugins: [reactRefresh()],
   resolve: { alias: { 
     '@': '/src',
     '@detail': '/src/Components/Pages/WorkoutPages'
   }},
})
