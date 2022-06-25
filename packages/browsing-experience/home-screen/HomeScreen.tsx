import { ContentPainter } from '@xi/browsing-experience.content'
import * as React from 'react'
import { SafeAreaView } from 'react-native'

import { useHomeContentQuery } from './hooks'

export function HomeScreen() {
  const { isLoading, data } = useHomeContentQuery()
  if (isLoading) return null

  return (
    <SafeAreaView>
      <ContentPainter collections={data || []} />
    </SafeAreaView>
  )
}
