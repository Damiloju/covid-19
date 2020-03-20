/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand_purple: '#4A0D83',
        brand_orange: '#f35915'
      },
      width: {
        '189': '11.813rem',
        '553': '34.563rem',
        '198': '12.375rem',
        '68': '4.25rem'
      },
      height: {
        '300': '18.75rem',
        '236': '14.75rem'
      },
      fontSize: {
        '33': '2.063rem'
      },
      fontFamily: {
        montserrat: ['Montserrat'],
        poppins: ['Poppins']
      },
      inset: {
        '181': '11.313rem',
        '292': '18.25rem',
        '141': '8.813rem',
        '207': '12.938rem'
      },
      margin: {
        '500': '31.25rem',
        '141': '8.813rem'
      }
    }
  },
  variants: {},
  plugins: []
}
