module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'primary': '#b37dac',
        'secondary': '#77587d'
      },
      spacing: {
        banner: '640px'
      },
      container: {
        padding: '1.25rem',
      }
    },
    fontFamily: {
      'sans': ['Raleway', 'serif', 'system-ui'],
      'play': ['Playfair Display', 'serif', 'system-ui']
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
