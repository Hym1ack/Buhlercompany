module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      gray: '#3A3A44',
      light: '#6C6C6C',
      blue: '#2D3D8A',
    },
    screens: {
      xl: { max: '1200px' },
      lg: { max: '991px' },
      md: { max: '768px' },
      sm: { max: '480px' },
    },
    container: {
      padding: '20px',
      center: true,
    },
    extend: {
      padding: {
        1.75: '0.4rem',
      },
      width: {
        42: '10.5rem',
      },
      fontSize: {
        xs: '0.813rem',
      },
      lineHeight: {
        6.5: '1.625rem',
      },
    },
  },
}