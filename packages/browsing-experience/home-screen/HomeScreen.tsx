import { ContentPainter, useContentQuery } from '@xi/browsing-experience.content'
import * as React from 'react'

export function HomeScreen() {
  const { isLoading, data } = useContentQuery()
  if (isLoading) return null

  return <ContentPainter collections={data || []} />
}
