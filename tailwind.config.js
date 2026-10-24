export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#f5f5f5',
        primary: {
          DEFAULT: '#10b981',
          dark: '#047857',
        },
        gold: '#fbbf24',
        card: '#1a1a1a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
