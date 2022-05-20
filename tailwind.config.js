module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      borderRadius: {
        '5': '5px',
      },
      colors: {
        "blue": "#377dff",
      },
      boxShadow: {
        'msd': '0 0.75rem 1rem rgb(189 197 209 / 30%)',
      }
    },
  },
  plugins: [],
}
