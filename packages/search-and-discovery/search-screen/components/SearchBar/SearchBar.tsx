import { Button } from '@xi/design-system.button'
import { Icon } from '@xi/design-system.icon'
import { Text } from '@xi/design-system.text'
import { spacing, useColor } from '@xi/design-system.theme'
import { StyleSheet, View } from 'react-native'

interface SearchBarProps {
  onPress?: () => void
}

export function SearchBar({ onPress }: SearchBarProps) {
  const colors = useColor()

  return (
    <Button onPress={onPress}>
      <View style={[styles.container, { backgroundColor: colors.background.contrast }]}>
        <Icon name="search" size={24} color="contrast" />
        <Text color="contrast" fontWeight="medium" style={styles.text} numberOfLines={1}>
          Songs or genres
        </Text>
      </View>
    </Button>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    flexDirection: 'row',
    padding: spacing.s8,
    alignItems: 'center',
  },
  text: {
    paddingHorizontal: spacing.s8,
  },
})
