export const font = {
  black: 'CircularStd-Black',
  bold: 'CircularStd-Bold',
  book: 'CircularStd-Book',
  medium: 'CircularStd-Medium',
  light: 'CircularStd-Light',
} as const

export type FontWeight = keyof typeof font
export type FontName = typeof font[FontWeight]

export const fontSize = {
  title1: 38,
  title2: 36,
  title3: 24,

  body1: 18,
  body2: 14,
  body3: 12,
} as const
