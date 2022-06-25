import { palette } from './palette'
import { semantic } from './semantic'

export const color = { palette, semantic }
export type { BackgroundColor, TextColor, IconColor } from './semantic'

// These colors would come from backend directly attached to the genre in an ideal world
// but, let's just pretend
export const randomGenreColors = [
  '#B36A5E',
  '#0B4F6C',
  '#535657',
  '#509DDD',
  '#6E2365',
  '#3B3355',
  '#ADBBCE',
  '#9B7E46',
  '#AFD0BF',
  '#394032',
  '#808F87',
]
