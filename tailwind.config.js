module.exports = {
  mode: 'jit',
  purge: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        purple: '#492CBA',
        blue: '#B7FBED',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
