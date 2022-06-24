import { Button } from '@xi/design-system.button'
import { Text } from '@xi/design-system.text'
import { color, fontSize, spacing, useColor } from '@xi/design-system.theme'
import { StyleSheet } from 'react-native'

export interface PillProps {
  name: string
  selected?: boolean
  onPress?: () => void
}

export function Pill({ name, selected, onPress }: PillProps) {
  const colors = useColor()

  const selectedStyle = {
    backgroundColor: colors.background.brand,
  }

  return (
    <Button style={[styles.container, selected && selectedStyle]} onPress={onPress}>
      <Text fontSize={fontSize.body3} fontWeight="medium">
        {name}
      </Text>
    </Button>
  )
}

const styles = StyleSheet.create({
  container: {
    minWidth: 25,
    paddingHorizontal: spacing.s12,
    paddingVertical: spacing.s6,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: color.palette.white,
  },
})
