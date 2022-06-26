import { ContentPainter } from '@xi/browsing-experience.content'
import * as React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import { useHomeContentQuery } from './hooks'

export function HomeScreen() {
  const { isLoading, data } = useHomeContentQuery()

  return (
    <SafeAreaView style={styles.container}>
      <ContentPainter loading={isLoading} collections={data || []} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
})
