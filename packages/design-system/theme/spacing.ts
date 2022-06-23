export const spacing = {
  s0: 0,
  s2: 2,
  s4: 4,
  s6: 6,
  s8: 8,
  s12: 12,
  s16: 16,
  s18: 18,
  s24: 24,
  s32: 32,
  s48: 48,
  s56: 56,
  s64: 64,
  s72: 72,
} as const

export type SpacingName = keyof typeof spacing
export type Spacing = typeof spacing[SpacingName]
