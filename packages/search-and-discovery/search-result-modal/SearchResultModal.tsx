import { ErrorBoundary } from '@xi/platform.error-handling'
import React from 'react'

import { SearchArea, SearchResultsContentPainter } from './components'
import { SearchFiltersProvider } from './context'

/**
 * The actual `Search` screen that use can apply filters and search.
 */
export function SearchResultModal() {
  return (
    <SearchFiltersProvider>
      <SearchArea />
      <ErrorBoundary>
        <SearchResultsContentPainter />
      </ErrorBoundary>
    </SearchFiltersProvider>
  )
}
