/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'vulcan': {
          '50': '#f5f5fa',
          '100': '#ecebf3',
          '200': '#d3d2e5',
          '300': '#ababce',
          '400': '#7e7eb2',
          '500': '#5e5e99',
          '600': '#4c4a7f',
          '700': '#3f3d67',
          '800': '#363557',
          '900': '#32304a',
          '950': '#15141f',
        },
        'torch-red': {
          '50': '#fef2f2',
          '100': '#fee2e2',
          '200': '#fecaca',
          '300': '#fca5a5',
          '400': '#f87171',
          '500': '#ee3f3f',
          '600': '#db2727',
          '700': '#b91c1c',
          '800': '#991b1b',
          '900': '#7f1d1d',
          '950': '#450a0a',
        },
        'cello': {
          '50': '#eff9ff',
          '100': '#daf2ff',
          '200': '#bee9ff',
          '300': '#91dcff',
          '400': '#5dc7fd',
          '500': '#38aaf9',
          '600': '#218def',
          '700': '#1a75db',
          '800': '#1b5fb2',
          '900': '#1c518c',
          '950': '#1a3b65',
        },
      }
    },
  },
  plugins: [],
}