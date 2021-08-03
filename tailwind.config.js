/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */

module.exports = {
  purge: ['.src/pages/**/*.{js,ts,jsx,tsx}', '.src/components/**/*.{js,ts,jsx,tsx}'], // ←意味はわかっていない
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        24: '6rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
