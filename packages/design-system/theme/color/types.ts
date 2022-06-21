import type { PaletteColor } from './palette'

export type ColorScheme = 'dark' | 'light'
export type ThemedColor = Record<ColorScheme, PaletteColor>
