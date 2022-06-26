import { ContentPainter } from '@xi/browsing-experience.content'
import React from 'react'

import { useSearchFilters } from '../context'
import { useSearchResultContentQuery } from '../hooks'
import { NoSearchResult } from './NoSearchResult'

export function SearchResultsContentPainter() {
  const { filters } = useSearchFilters()

  const { isLoading, data } = useSearchResultContentQuery(filters)

  if (isLoading) return null

  // Means that there's no match
  if (data?.length === 0) return <NoSearchResult />

  return <ContentPainter collections={data || []} keyboardDismissMode="on-drag" />
}
