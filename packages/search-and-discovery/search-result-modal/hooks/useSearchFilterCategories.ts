import { useContentQuery } from '@xi/browsing-experience.content'
import { ContentResponse, Genre } from '@xi/browsing-experience.content/types'
import _ from 'lodash'

export type Decade = { id: number; name: string; value: number }

interface Categories {
  genres: Genre[]
  decades: Decade[]
}

const transform = ({ genres, videos }: ContentResponse): Categories => {
  const decades = _.chain(videos)
    .uniqBy('decade')
    .map(({ decade }) => ({ id: decade, name: `${decade}s`, value: decade }))
    .sort()
    .value()

  return {
    genres,
    decades,
  }
}

export function useSearchFilterCategories() {
  return useContentQuery(transform)
}
