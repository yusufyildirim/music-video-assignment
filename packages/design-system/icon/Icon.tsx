import { Ionicons } from '@expo/vector-icons'
import { IconColor, useColor } from '@xi/design-system.theme'

export type IconName = 'play' | 'home' | 'search' | 'filter'

export interface IconProps {
  name: IconName
  size: number
  color?: IconColor
}

export function Icon({ name, size, color = 'default' }: IconProps) {
  const colors = useColor()

  return <Ionicons name={name} size={size} color={colors.icon[color]} />
}
