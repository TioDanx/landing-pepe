module.exports = {
    theme: {
      extend: {
        keyframes: {
          pulseOnce: {
            '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.1)' },
          }
        },
        animation: {
          pulseSlow: 'pulseOnce 2s ease-in-out infinite',
        }
      }
    }
  }