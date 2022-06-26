import { ContentPainter } from '@xi/browsing-experience.content'

import { useSearchFilters } from '../context'
import { useSearchResultContentQuery } from '../hooks'

export function SearchResultsContentPainter() {
  const { filters } = useSearchFilters()

  const { isLoading, data } = useSearchResultContentQuery(filters)

  if (isLoading) return null

  return <ContentPainter collections={data || []} />
}
