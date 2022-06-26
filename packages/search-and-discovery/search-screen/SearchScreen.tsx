import { ContentPainter } from '@xi/browsing-experience.content'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { SearchScreenHeader } from './components'
import { useSearchContentQuery } from './hooks'

export function SearchScreen() {
  const { isLoading, data } = useSearchContentQuery()

  return (
    <SafeAreaView mode="padding">
      <ContentPainter
        loading={isLoading}
        ListHeaderComponent={<SearchScreenHeader />}
        stickyHeaderIndices={[0]}
        collections={data || []}
      />
    </SafeAreaView>
  )
}
