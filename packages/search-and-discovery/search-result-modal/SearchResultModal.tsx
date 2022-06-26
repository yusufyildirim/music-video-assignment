import React from 'react'
import { View } from 'react-native'

import { SearchArea, SearchResultsContentPainter } from './components'
import { SearchFiltersProvider } from './context'

export function SearchResultModal() {
  return (
    <SearchFiltersProvider>
      <View>
        <SearchArea />
        <SearchResultsContentPainter />
      </View>
    </SearchFiltersProvider>
  )
}
