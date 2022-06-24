import { palette, PaletteColor } from './palette'
import type { ColorScheme, ThemedColor } from './types'

/***
 * Returns the color object for the given theme.
 */
function getByColorScheme<T extends string>(
  colorType: Record<T, ThemedColor>,
  theme: ColorScheme,
): Record<T, PaletteColor> {
  return Object.keys(colorType).reduce((acc, curr) => {
    const key = curr as T
    const value = colorType[key][theme] as PaletteColor
    return {
      ...acc,
      [key]: value,
    }
  }, {} as Record<T, PaletteColor>)
}

/*** BACKGROUND COLORS ***/
export type BackgroundColor = 'default' | 'contrast' | 'brand'
const background: Record<BackgroundColor, ThemedColor> = {
  default: { dark: palette.gray900, light: palette.white },
  contrast: { dark: palette.white, light: palette.gray900 },
  brand: { dark: palette.orange900, light: palette.orange900 },
}

/*** TEXT COLORS ***/
export type TextColor = 'default' | 'contrast' | 'suppressed'
const text: Record<TextColor, ThemedColor> = {
  default: { dark: palette.white, light: palette.black },
  contrast: { dark: palette.black, light: palette.white },
  suppressed: { dark: palette.gray500, light: palette.gray700 },
} as const

/*** TEXT COLORS ***/
export type IconColor = 'default' | 'contrast' | 'pale' | 'info' | 'success' | 'warning' | 'error'
const icon: Record<IconColor, ThemedColor> = {
  default: { dark: palette.white, light: palette.black },
  contrast: { dark: palette.black, light: palette.white },
  pale: { dark: palette.gray500, light: palette.gray700 },
  info: { dark: palette.blue500, light: palette.blue500 },
  success: { dark: palette.green500, light: palette.green500 },
  warning: { dark: palette.yellow500, light: palette.yellow500 },
  error: { dark: palette.red500, light: palette.red500 },
} as const

type SemanticColor = typeof defaultTheme

export const semantic = {
  text,
  background,
  icon,
}

/// a.k.a dark theme
const defaultTheme = {
  text: getByColorScheme(text, 'dark'),
  background: getByColorScheme(background, 'dark'),
  icon: getByColorScheme(icon, 'dark'),
}

const lightTheme: SemanticColor = {
  text: getByColorScheme(text, 'light'),
  background: getByColorScheme(background, 'light'),
  icon: getByColorScheme(icon, 'light'),
}

export const semanticByColorScheme: Record<ColorScheme, SemanticColor> = {
  dark: defaultTheme,
  light: lightTheme,
}
