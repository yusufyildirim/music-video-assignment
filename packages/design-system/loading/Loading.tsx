import { color } from '@xi/design-system.theme'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export function Loading() {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" color={color.palette.orange900} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
