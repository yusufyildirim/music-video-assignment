import { ContentCollection, useContentQuery } from '@xi/browsing-experience.content'
import { ContentResponse } from '@xi/browsing-experience.content/types'
import Fuse from 'fuse.js'
import * as React from 'react'

type FilterParams = { text: string; year: number; genreIds: number[] }

export function useSearchQuery({ text, genreIds, year }: FilterParams) {
  const transform = React.useCallback(
    ({ genres, videos }: ContentResponse): ContentCollection[] => {
      const videosFuse = new Fuse(videos, { keys: ['title', 'artist'], threshold: 0.3 })
      const genreFuse = new Fuse(genres, { keys: ['name'], threshold: 0.3 })

      const musicVideoResults = videosFuse.search(text).map(({ item }) => item)
      const genreResults = genreFuse.search(text).map(({ item }) => item)

      /***
       * We map the search results to a `ContentCollection[]` that containts
       * `Genres` and `Songs` collections so the `ContentPainter` can render them.
       */
      return [
        {
          __typename: 'GenreCollection' as const,
          collection: genreResults,
          name: 'Genres',
        },
        {
          __typename: 'MusicVideoCollection' as const,
          collection: musicVideoResults,
          name: 'Songs',
          vertical: true,
        },
      ]
    },
    [text],
  )

  return useContentQuery(transform)
}
