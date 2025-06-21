// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#2E86DE',   // tech blue
        secondary: '#1dd1a1', // route green
        accent: '#feca57',    // highlight
        dark: '#0f172a',      // almost black
        light: '#f1f5f9',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      },
      animation: {
        'slide-in': 'slideIn 0.4s ease-out'
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: 0, transform: 'translateX(100%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        }
      }
    },
  },
  plugins: [],
};
