const { defineConfig } = require('vite');
const reactRefresh = require('@vitejs/plugin-react-refresh');

// https://vitejs.dev/config/
module.exports = defineConfig({
  base: './',
  publicDir: 'public',
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove();
              }
            }
          }
        }
      ]
    }
  },
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@': '/src',
      '@generalPage': '/src/Pages/GeneralPages',
      '@userPage': '/src/Pages/UserPages',
      '@workoutPage': '/src/Pages/WorkoutPages',
      '@PageComponent': '/src/Components/PageComponents/',
      '@PageSection': '/src/Components/PageSections',
      '@Wrapper': '/src/Components/Wrappers',
      '@Navigation': '/src/Components/Navigation'
    }
  }
});