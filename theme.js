
const borderWidths = {
  px: '1px',
  '0': '0',
  '2': '2px',
  '4': '4px',
  '8': '8px',
}

const breakpoints = ['640px', '768px', '1024px', '1280px', '1440px']

const baseColors = {
  transparent: 'transparent',
  black: '#000',
  white: '#fff',

  gray: {
    100: '#f7fafc',
    200: '#edf2f7',
    300: '#e2e8f0',
    400: '#cbd5e0',
    500: '#a0aec0',
    600: '#718096',
    700: '#4a5568',
    800: '#2d3748',
    900: '#1a202c',
  },
  red: {
    100: '#fff5f5',
    200: '#fed7d7',
    300: '#feb2b2',
    400: '#fc8181',
    500: '#f56565',
    600: '#e53e3e',
    700: '#c53030',
    800: '#9b2c2c',
    900: '#742a2a',
  },
  orange: {
    100: '#fffaf0',
    200: '#feebc8',
    300: '#fbd38d',
    400: '#f6ad55',
    500: '#ed8936',
    600: '#dd6b20',
    700: '#c05621',
    800: '#9c4221',
    900: '#7b341e',
  },
  yellow: {
    100: '#fffff0',
    200: '#fefcbf',
    300: '#faf089',
    400: '#f6e05e',
    500: '#ecc94b',
    600: '#d69e2e',
    700: '#b7791f',
    800: '#975a16',
    900: '#744210',
  },
  green: {
    100: '#f0fff4',
    200: '#c6f6d5',
    300: '#9ae6b4',
    400: '#68d391',
    500: '#48bb78',
    600: '#38a169',
    700: '#2f855a',
    800: '#276749',
    900: '#22543d',
  },
  teal: {
    100: '#e6fffa',
    200: '#b2f5ea',
    300: '#81e6d9',
    400: '#4fd1c5',
    500: '#38b2ac',
    600: '#319795',
    700: '#2c7a7b',
    800: '#285e61',
    900: '#234e52',
  },
  blue: {
    100: '#ebf8ff',
    200: '#bee3f8',
    300: '#90cdf4',
    400: '#63b3ed',
    500: '#4299e1',
    600: '#3182ce',
    700: '#2b6cb0',
    800: '#2c5282',
    900: '#2a4365',
  },
  indigo: {
    100: '#ebf4ff',
    200: '#c3dafe',
    300: '#a3bffa',
    400: '#7f9cf5',
    500: '#667eea',
    600: '#5a67d8',
    700: '#4c51bf',
    800: '#434190',
    900: '#3c366b',
  },
  purple: {
    100: '#faf5ff',
    200: '#e9d8fd',
    300: '#d6bcfa',
    400: '#b794f4',
    500: '#9f7aea',
    600: '#805ad5',
    700: '#6b46c1',
    800: '#553c9a',
    900: '#44337a',
  },
  pink: {
    100: '#fff5f7',
    200: '#fed7e2',
    300: '#fbb6ce',
    400: '#f687b3',
    500: '#ed64a6',
    600: '#d53f8c',
    700: '#b83280',
    800: '#97266d',
    900: '#702459',
  },
}

const commonButtonStyles = {
  py: 2,
  px: 3,
  cursor: `pointer`,
  fontSize: `100%`,
  lineHeight: `inherit`,
}

const buttons = {
  simple: {
    ...commonButtonStyles,
    backgroundColor: `primary`,
    border: `none`,
    color: `white`,
    fontWeight: `bold`,
    borderRadius: `default`,
    '&:hover': {
      backgroundColor: `primaryHover`,
    },
  },
  pill: {
    ...commonButtonStyles,
    backgroundColor: `primary`,
    border: `none`,
    color: `white`,
    fontWeight: `bold`,
    borderRadius: `full`,
    '&:hover': {
      backgroundColor: `primaryHover`,
    },
  },
  outline: {
    ...commonButtonStyles,
    backgroundColor: `transparent`,
    borderWidth: `1px`,
    borderStyle: `solid`,
    borderColor: `primary`,
    color: `primary`,
    fontWeight: `semibold`,
    borderRadius: `default`,
    '&:hover': {
      backgroundColor: `primary`,
      color: `white`,
      borderColor: `transparent`,
    },
  },
  bordered: {
    ...commonButtonStyles,
    backgroundColor: `primary`,
    borderWidth: `1px`,
    borderStyle: `solid`,
    borderColor: `primaryHover`,
    color: `white`,
    fontWeight: `bold`,
    borderRadius: `default`,
    '&:hover': {
      backgroundColor: `primaryHover`,
    },
  },
  disabled: {
    ...commonButtonStyles,
    backgroundColor: `primary`,
    border: `none`,
    opacity: 0.5,
    cursor: `not-allowed`,
    color: `white`,
    fontWeight: `bold`,
    borderRadius: `default`,
  },
  '3D': {
    ...commonButtonStyles,
    backgroundColor: `primary`,
    border: `none`,
    borderBottomWidth: `4px`,
    borderBottomStyle: `solid`,
    borderBottomColor: `primaryHover`,
    color: `white`,
    fontWeight: `bold`,
    borderRadius: `default`,
    transition: `transform 0.3s ease-in-out`,
    '&:hover': {
      transform: `translateY(-1px)`,
    },
  },
  elevated: {
    ...commonButtonStyles,
    backgroundColor: `white`,
    borderWidth: `1px`,
    borderStyle: `solid`,
    borderColor: `gray.4`,
    color: `text`,
    fontWeight: `bold`,
    borderRadius: `default`,
    boxShadow: `default`,
    '&:hover': {
      backgroundColor: `gray.1`,
    },
  },
}

const colors = {
  ...baseColors,
  dark: '#999999',
  darker: '#666666',
  darkest: '#1E1E27',
  primary: '#644B78',
  secondary: '#AF1F45',
  info: '#288DC1',
  infoHover: '#006E9F',
  warning: '#FF9E18',
  danger: baseColors.red[3],
  light: '#f9f9f9',
  lightDark: '#f1f1f1',
  textMuted: baseColors.gray[6],
  muted: baseColors.gray[3],
  success: baseColors.green[3],
  primaryHover: baseColors.blue[8],
  text: baseColors.gray[8],
  background: baseColors.white,
}

const baseFonts = {
  sans:
    '-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  serif: '"Signika", Georgia, Cambria, "Times New Roman", Times, serif',
  mono: 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  alternative: "'Poppins', sans-serif",
  blog: "'Josefin Sans', sans-serif"
}

const fonts = {
  ...baseFonts,
  body: baseFonts.sans,
  heading: baseFonts.serif,
  monospace: baseFonts.mono,
  alternative: baseFonts.alternative,
}

const fontSizes = {
  'xs': '.75rem',
  'sm': '.875rem',
  'tiny': '.875rem',
  'base': '1rem',
  'lg': '1.125rem',
  'xl': '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '4rem',
  '7xl': '5rem',
}

const baseFontWeights = {
  hairline: '100',
  thin: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
}

const fontWeights = {
  ...baseFontWeights,
  body: baseFontWeights.normal,
  heading: baseFontWeights.bold,
}

const commonInputStyles = {
  py: 2,
  px: 3,
  fontSize: `100%`,
  borderRadius: `default`,
  appearance: `none`,
  lineHeight: `tight`,
}

const inputs = {
  shadow: {
    ...commonInputStyles,
    border: `none`,
    color: `gray.7`,
    boxShadow: `default`,
    '&:focus': {
      outline: `none`,
      boxShadow: `outline`,
    },
  },
  inline: {
    ...commonInputStyles,
    backgroundColor: `gray.2`,
    borderWidth: `2px`,
    borderStyle: `solid`,
    borderColor: `gray.2`,
    color: `gray.7`,
    '&:focus': {
      outline: `none`,
      borderColor: `primary`,
      backgroundColor: `white`,
    },
  },
  underline: {
    ...commonInputStyles,
    backgroundColor: `transparent`,
    border: `none`,
    borderBottomWidth: `2px`,
    borderBottomStyle: `solid`,
    borderBottomColor: `primary`,
    borderRadius: `0px`,
    color: `gray.7`,
    '&:focus': {
      outline: `none`,
      borderColor: `primary`,
      backgroundColor: `white`,
    },
  },
}

const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
}

const baseLineHeights = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
}

const lineHeights = {
  ...baseLineHeights,
  body: baseLineHeights.relaxed,
  heading: baseLineHeights.tight,
}

const radii = {
  none: '0',
  sm: '0.125rem',
  default: '0.25rem',
  lg: '0.5rem',
  full: '9999px',
}

const spacing = {
  px: '1px',
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '32': '8rem',
  '40': '10rem',
  '48': '12rem',
  '56': '14rem',
  '64': '16rem',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
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
  screenHeight: '100vh',
  screenWidth: '100vw',
  'sm-hero': '440px',
  'title-hero': '500px',
  'hero': '80vh',
  '11': '24rem',
  '13': '32rem',
  '14': '36rem',
}
const height = {
  '0': '0',
  '1': '1rem',
  '2': '2rem',
  '3': '3rem',
  '4': '4rem',
  '5': '5rem',
  '6': '6rem',
  '8': '8rem',
  '10': '10rem',
  '11': '14rem',
  '12': '18rem',
  '13': '22rem',
  '14': '26rem',
  'sm-hero': '44px',
  'title-hero': '500px',
  'hero': '80vh',
};
const shadows = {
  default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl:
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
  none: 'none',
}

const space = [
  0,
  '0.25rem',
  '0.5rem',
  '1rem',
  '2rem',
  '4rem',
  '8rem',
  '16rem',
  '32rem',
]

const zIndices = {
  auto: 'auto',
  '0': '0',
  '10': '10',
  '20': '20',
  '30': '30',
  '40': '40',
  '50': '50',
}

const heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  m: 0,
  mb: 1,
}

const styles = {
  root: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body',
  },
  a: {
    color: 'primary',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },
  h1: {
    ...heading,
    fontSize: 6,
    mt: 2,
  },
  h2: {
    ...heading,
    fontSize: 5,
    mt: 2,
  },
  h3: {
    ...heading,
    fontSize: 4,
    mt: 3,
  },
  h4: {
    ...heading,
    fontSize: 3,
  },
  h5: {
    ...heading,
    fontSize: 2,
  },
  h6: {
    ...heading,
    fontSize: 1,
    mb: 2,
  },
  code: {},
  pre: {},
  hr: {
    bg: 'muted',
    border: 0,
    height: '1px',
    m: 3,
  },
}
const variants = {
  borderWidth: ['responsive', 'first', 'hover', 'focus'],
  backgroundColor: ['responsive', 'hover', 'focus'],
};

const tailwind = {
  borderWidths,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  spacing,
  shadows,
  space,
  radii,
  zIndices,
  styles,
  buttons,
  inputs,
  variants,
  height,
}

module.exports = tailwind;