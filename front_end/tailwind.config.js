/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx}',
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora'],
        sansSerif: ['"sans-serif"']
      },
      colors: {
        transparent: 'transparent',
        primaryColor: '#1861c5',
        primaryColor_hover: '#2274f5',
        successColor: '#057a55',
        violetColor: '#886cff',
        dangerColor: {
          default_1: '#de4436',
          default_2: '#F65D4E',
          default_3: '#ce3324',
          hover_2: '#f4402f',

        },
        warningColor: '#ffc021',
        whiteColor: '#ffffff',
        bgWhiteColor: '#f6f6f6',
        grayColor: '#f9fbfd',
        darkColor: '#223143',
        blackColor: '#000',
        footerBgColor: '#282828',
        borderColor: '#E6E6E6',
        lightColor: '#999999',
        ratingColor: '#fa8c17'
      },
      borderRadius: {
        'none': '0',
        'sm': '.125rem',
        DEFAULT: '.25rem',
        'lg': '.5rem',
        'full': '9999px',
      },
      opacity: {
        '0': '0',
        '20': '0.2',
        '40': '0.4',
        '60': '0.6',
        '80': '0.8',
        '100': '1',
      },
      spacing: {
        px: '1px',
        0: '0',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
      },
      fontWeight: {
        hairline: 100,
        'extra-light': 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        'extra-bold': 800,
        black: 900,
      },
      rotate: {
        '360': '360deg',
      }

    },
  },
  plugins: [
    require('flowbite/plugin'),
  ]
}

