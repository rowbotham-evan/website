/** @type {import('tailwindcss').Config} */
let colors = require("tailwindcss/colors")

module.exports = {
  content: ['./layouts/**/*.html', './**/*.md', './content/**/*.html', './**/*.toml'],
  theme: {
    extend: {
      colors: {
        // Existing color mappings
        neutral: colors.stone,
        positive: colors.green,
        urge: colors.blue,
        warning: colors.yellow,
        info: colors.blue,
        critical: colors.red,
        customBackground: colors.amber,

        // New custom purple for background and other elements
        sitePurple: '#2c0061',
        darkSitePurple: '#1a0037' // For dark mode
      },
    },
    fontFamily: {
      'sans': ['Inter', 'system-ui', 'sans-serif'],
      'serif': ['Crimson Text', 'serif'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
