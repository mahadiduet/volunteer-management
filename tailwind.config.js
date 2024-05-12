/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-green-red': 'linear-gradient(to right, #ABEBC6, #FADBD8)',
        'clouds-gradient': 'linear-gradient(to bottom, #c9e4fd, #e3fdf5, #fee3f0, #ffe3c3)',
        'dew-gradient': 'linear-gradient(to top right, #f6f9fc, #e0f7fa, #f1f5f9, #b2dfdb)',
        'watercolor-gradient': 'linear-gradient(to bottom right, #fbc2eb, #a6c1ee, #fddb92)',
      },
    },
  },
  plugins: [require('daisyui')],
}

