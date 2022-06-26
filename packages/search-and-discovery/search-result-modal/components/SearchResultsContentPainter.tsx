import { ContentPainter } from '@xi/browsing-experience.content'
import React from 'react'

import { useSearchFilters } from '../context'
import { useSearchResultContentQuery } from '../hooks'
import { NoSearchResult } from './NoSearchResult'

export function SearchResultsContentPainter() {
  const { filters } = useSearchFilters()

  const { isLoading, data } = useSearchResultContentQuery(filters)

  // Means that there's no match
  if (data?.length === 0) return <NoSearchResult />

  return (
    <ContentPainter loading={isLoading} collections={data || []} keyboardDismissMode="on-drag" />
  )
}
