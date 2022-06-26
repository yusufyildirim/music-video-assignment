import { useContentQuery } from '@xi/browsing-experience.content'
import { ContentResponse, GenreContentCollection } from '@xi/browsing-experience.content/types'
import _ from 'lodash'

const transformData = ({ genres }: ContentResponse): GenreContentCollection[] => {
  const yourTopGenres = _.chain(genres).sampleSize(4).value()

  return [
    {
      __typename: 'GenreCollection',
      collection: yourTopGenres,
      name: 'Your top genres',
    },
    {
      __typename: 'GenreCollection',
      collection: genres,
      name: 'Browse all',
    },
  ]
}

export function useSearchContentQuery() {
  return useContentQuery(transformData)
}
