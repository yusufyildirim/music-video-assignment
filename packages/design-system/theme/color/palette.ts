export const palette = {
  /*** Core Colors ***/
  // To Be Determined, should be used where color is not determined yet
  TBD: '#AAFFFF',
  black: '#000000',
  white: '#FFFFFF',

  gray900: '#101010',
  gray800: '#303030',
  gray700: '#4e4e4e',
  gray500: '#888888',
  gray300: '#cecece',

  /*** Status Colors ***/
  green500: '#30AA4C',
  yellow500: '#F8CB45',
  red500: '#FF5A54',
  blue500: '#00A4FF',

  /*** OTHER COLORS ***/
  orange900: '#ff8000',
  orange800: '#ffab15',
  orange700: '#ffc41f',
  orange600: '#ffdd28',
} as const

export type PaletteColorKey = keyof typeof palette
export type PaletteColor = typeof palette[PaletteColorKey]
