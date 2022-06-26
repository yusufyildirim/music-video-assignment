import React from 'react'

import { SearchArea, SearchResultsContentPainter } from './components'
import { SearchFiltersProvider } from './context'

export function SearchResultModal() {
  return (
    <SearchFiltersProvider>
      <SearchArea />
      <SearchResultsContentPainter />
    </SearchFiltersProvider>
  )
}
