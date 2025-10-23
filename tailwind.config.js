/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Suas cores base
        leandraOrange: '#FF6F47', 
        leandraPurple: '#8E3EFA', 
        leandraPink: '#F472B6', 

        // Cores do Fundo Tech (Escuras, mas FORTES)
        leandraDark: '#1A1A1A', // O "preto" de base
        leandraDarker: '#0D0D0D',
        leandraPurpleDark: '#4c2882', // Roxo (escuro e forte)
        leandraOrangeDark: '#873d20', // Laranja (escuro e forte)
        leandraPinkDark: '#82285b', // Rosa (escuro e forte)
        
        // Cores de UI
        leandraGray: '#333333',
        leandraLight: '#F5F5F5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        heading: ['Archivo Black', 'sans-serif']
      },
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(100vh)', opacity: 0 },
          '10%, 90%': { opacity: 0.7 },
          '100%': { transform: 'translateY(-20vh)', opacity: 0 }
        },
        pulseLight: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255, 255, 255, 0.2), 0 0 15px rgba(255, 111, 71, 0.3)' },
          '50%': { boxShadow: '0 0 10px rgba(255, 255, 255, 0.4), 0 0 25px rgba(142, 62, 250, 0.5)' },
        },
        backgroundPan: {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
        },
        shine: {
          '0%': { left: '-200%', opacity: 0, },
          '20%': { left: '-10%', opacity: 0.6, }, 
          '80%': { left: '110%', opacity: 0, },
          '100%': { left: '200%', opacity: 0, }
        },
      },
      animation: {
        floatUp: 'floatUp 15s linear infinite backwards',
        pulseLight: 'pulseLight 3s infinite alternate',
        backgroundPan: 'backgroundPan 25s ease infinite',
        shine: 'shine 1.5s ease-out',
      },
    },
  },
  plugins: [],
}