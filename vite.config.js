import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  base: './',
  publicDir: 'public',
  resolve: { alias: { 
    '@': '/src',
    '@detail': '/src/Components/Pages/WorkoutPages'
  }},
})
