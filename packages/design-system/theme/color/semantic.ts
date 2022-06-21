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
export type BackgroundColor = 'default'
const background: Record<BackgroundColor, ThemedColor> = {
  default: { dark: palette.gray900, light: palette.white },
}

/*** TEXT COLORS ***/
export type TextColor = 'default' | 'suppressed'
const text: Record<TextColor, ThemedColor> = {
  default: { dark: palette.white, light: palette.black },
  suppressed: { dark: palette.gray500, light: palette.gray700 },
} as const

type SemanticColor = typeof defaultTheme

export const semantic = {
  text,
  background,
}

/// a.k.a dark theme
const defaultTheme = {
  text: getByColorScheme(text, 'dark'),
  background: getByColorScheme(background, 'dark'),
}

const lightTheme: SemanticColor = {
  text: getByColorScheme(text, 'light'),
  background: getByColorScheme(background, 'light'),
}

export const semanticByColorScheme: Record<ColorScheme, SemanticColor> = {
  dark: defaultTheme,
  light: lightTheme,
}
