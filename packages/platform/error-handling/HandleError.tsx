import { Button } from '@xi/design-system.button'
import { Text } from '@xi/design-system.text'
import { color, fontSize, spacing } from '@xi/design-system.theme'
import * as React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface HandleErrorProps {
  errorMessage: string
  reset: () => void
}

export const HandleError = ({ errorMessage, reset }: HandleErrorProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text fontSize={fontSize.title3} style={styles.text}>
        Something went wrong :(
      </Text>
      <Text fontSize={fontSize.body2} style={styles.text}>
        Error: {errorMessage}
      </Text>
      <Button onPress={reset} style={styles.button}>
        <Text>Try again</Text>
      </Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.palette.gray700,
    borderRadius: 6,
    padding: spacing.s12,
    marginTop: spacing.s8,
  },
  container: {
    backgroundColor: color.palette.gray900,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    paddingVertical: spacing.s8,
    textAlign: 'center',
  },
})
