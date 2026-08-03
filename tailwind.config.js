/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        ink: '#12172B',
        ink2: '#1C2340',
        paper: '#FAF6F0',
        paper2: '#F1EBE0',
        signal: '#2FA88A',
        signallight: '#59CBAE',
        coral: '#E2693F',
        slate: '#5B6478',
        slatelight: '#8A93A8',
        gold: '#D9A441',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
      }
    }
  },
  plugins: [],
}
