/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this path if needed
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          customBlue: '#1E40AF',
        },
        spacing: {
          customPadding: '302px',
        },
      },
    },
  },
  plugins: [],
};

