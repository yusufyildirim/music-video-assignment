import {
  ContentCollection,
  useContentQuery,
  ContentResponse,
} from '@xi/browsing-experience.content'
import Fuse from 'fuse.js'
import * as React from 'react'

import { SearchFilters } from '../context/SearchFiltersProvider'

export function useSearchResultContentQuery({ text, genreIds, decade }: SearchFilters) {
  /**
   * We wan't our `transform` function to be reinvoked if any of the filters change.
   * `ReactQuery` does that for us as long as we break its referential identity.
   * `useCallback` and the dependency array makes that happen.
   */
  const transform = React.useCallback(
    ({ videos }: ContentResponse): ContentCollection[] => {
      const filteredVideos =
        decade || genreIds?.length
          ? videos.filter(video => {
              if (decade && video.decade !== decade) return false
              if (genreIds && genreIds.length > 0 && !genreIds.includes(video.genreId)) return false

              return video
            })
          : videos

      const videosFuse = new Fuse(filteredVideos, { keys: ['title', 'artist'], threshold: 0.3 })

      const musicVideoResults = text
        ? videosFuse.search(text).map(({ item }) => item)
        : filteredVideos

      const content = []

      if (musicVideoResults.length) {
        content.push({
          __typename: 'MusicVideoCollection' as const,
          collection: musicVideoResults,
          name: 'Songs',
          vertical: true,
        })
      }

      return content
    },
    [decade, genreIds, text],
  )

  return useContentQuery(transform)
}
