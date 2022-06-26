import { Text } from '@xi/design-system.text'
import { fontSize, spacing } from '@xi/design-system.theme'
import { StyleSheet, View } from 'react-native'

import { useSearchFilters } from '../context'

export function NoSearchResult() {
  const { filters } = useSearchFilters()

  return (
    <View style={styles.container}>
      <Text fontSize={fontSize.body1} style={styles.text}>
        Couldn't find any result
      </Text>
      {filters.text && <Text style={styles.text}>for "{filters.text}"</Text>}
      <Text style={styles.text} color="suppressed">
        Try searching again with different keyword and/or filter combination
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    paddingVertical: spacing.s4,
  },
})
