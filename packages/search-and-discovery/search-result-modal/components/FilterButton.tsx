import { Button } from '@xi/design-system.button'
import { Icon } from '@xi/design-system.icon'
import { spacing } from '@xi/design-system.theme'
import { StyleSheet } from 'react-native'

export function FilterButton() {
  return (
    <Button style={styles.button}>
      <Icon name="filter" size={18} />
    </Button>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: spacing.s16,
    paddingVertical: spacing.s8,
  },
})
