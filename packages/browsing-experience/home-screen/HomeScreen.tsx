import { ContentPainter, useContentQuery } from '@xi/browsing-experience.content'
import * as React from 'react'
import { SafeAreaView } from 'react-native'

export function HomeScreen() {
  const { isLoading, data } = useContentQuery()
  if (isLoading) return null

  return (
    <SafeAreaView>
      <ContentPainter collections={data || []} />
    </SafeAreaView>
  )
}
