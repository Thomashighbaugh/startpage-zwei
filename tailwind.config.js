const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: [
      './pages/**/*.js',
      './components/**/*.js',
      './layouts/**/*.js',
      './lib/**/*.js'
    ],
    options: {
      safelist: ['type']
    }
  },
  darkMode: 'class',
  theme: {
    extend: {
      height: {
        auto: 'auto',
        px: '1px',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
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
        64: '16rem',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',

        full: '100%',
        screen: '100vh'
      },
      width: {
        auto: 'auto',
        px: '1px',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
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
        64: '16rem',
        full: '100%',
        screen: '100vh'
      },
      rotate: {
        '-180': '-180deg',
        '-90': '-90deg',
        '-45': '-45deg',
        '-30': '-30deg',
        '-22': '-22.5deg',
        '-15': '-15deg',
        '-10': '-10deg',
        '-9': '-9deg',
        '-8': '-8deg',
        '-7': '-7deg',
        '-6': '-6deg',
        '-5': '-5deg',
        '-4': '-4deg',
        '-3': '-3deg',
        '-2': '-2deg',
        '-1': '-1deg',
        0: '0',
        1: '1deg',
        2: '2deg',
        3: '3deg',
        4: '4deg',
        5: '5deg',
        6: '6deg',
        7: '7deg',
        8: '8deg',
        9: '9deg',
        10: '10deg',
        15: '15deg',
        22: '22.5deg',
        30: '30deg',
        45: '45deg',
        90: '90deg',
        180: '180deg'
      },
      spacing: {
        px: '1px',
        0: '0',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        22: '5.5rem',
        24: '6rem',
        26: '6.5rem',
        28: '7rem',
        30: '7.5rem',
        32: '8rem',
        34: '8.5rem',
        36: '9rem',
        38: '9.5rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        68: '17rem',
        72: '18rem',
        76: '19rem',
        80: '20rem',
        88: '22rem',
        96: '24rem',
        104: '26rem',
        110: '28rem',
        118: '30rem',
        126: '32rem',
        132: '34rem',
        140: '36rem',
        half: '65%'
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        blue: {
          DEFAULT: '#00CAFF',
          50: '#8AE7FF',
          100: '#7AE3FF',
          200: '#5CDDFF',
          300: '#3DD7FF',
          400: '#1FD0FF',
          500: '#00CAFF',
          600: '#00BEF0',
          700: '#00B2E0',
          800: '#00A6D1',
          900: '#009AC2'
        },
        gray: {
          DEFAULT: '#555E70',
          50: '#f4f4f7',
          100: '#E9e9ff',
          200: '#BEC3CE',
          300: '#98A1B1',
          400: '#737E95',
          500: '#555E70',
          600: '#4A5262',
          700: '#3F4653',
          800: '#343945',
          900: '#22262d'
        },
        links: '#737e95',

        code: {
          green: '#b5f4a5',
          yellow: '#ffe484',
          purple: '#d9a9ff',
          red: '#ff8383',
          blue: '#93ddfd'
        }
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.gray.700'),
              '&:hover': {
                color: theme('colors.blue.600')
              },
              code: { color: theme('colors.blue.400') }
            },
            h1: {
              fontWeight: '900',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.700')
            },
            h2: {
              fontWeight: '900',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.700')
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.600')
            },
            'h4,h5,h6': {
              color: theme('colors.gray.600')
            },
            code: {
              color: theme('colors.pink.500'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem'
            },
            'code:before': {
              content: 'none'
            },
            'code:after': {
              content: 'none'
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.500')
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.500')
            },
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200')
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.100'),
            a: {
              color: theme('colors.gray.100'),
              '&:hover': {
                color: theme('colors.gray.50')
              },
              code: { color: theme('colors.blue.400') }
            },
            h1: {
              fontWeight: '900',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.200')
            },
            h2: {
              fontWeight: '900',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100')
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.100')
            },
            'h4,h5,h6': {
              color: theme('colors.gray.100')
            },
            code: {
              backgroundColor: theme('colors.gray.700')
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.200')
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.400')
            },
            strong: { color: theme('colors.gray.50') },
            thead: {
              color: theme('colors.gray.100')
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700')
              }
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700')
            }
          }
        }
      })
    }
  },
  variants: {
    typography: ['dark'],
    rotate: ['responsive', 'hover', 'focus', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
    animation: ['hover', 'focus']
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwind-heropatterns')({
      // as per tailwind docs you can pass variants
      variants: ['dark'],

      // the list of patterns you want to generate a class for
      // the names must be in kebab-case
      // an empty array will generate all 87 patterns
      patterns: [],

      // The foreground colors of the pattern
      colors: {
        default: '#3c3f4c',
        dark: '#98A1B1',
        blue: '#0badff',
        darker: '#555e70'
      },

      // The foreground opacity
      opacity: {
        default: '1.0',
        100: '1.0'
      }
    })
  ]
}
