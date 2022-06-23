import { APIContenResult, ContentCollection, Genre } from '@xi/browsing-experience.content'
import { get } from '@xi/platform.http'
import _ from 'lodash'
import { useQuery } from 'react-query'

const SEARCH_SCREEN_CONTENT_QUERY_KEY = 'search_screen_content'

// Types that starts with `API` represents expected shape of the data that'll fetched from the backend

const fetchContent = async (): Promise<ContentCollection[]> => {
  const data: APIContenResult = await get('/data/dataset.json')

  // Map videos data
  const videosByGenre = _.chain(data.videos)
    .map(video => ({
      id: video.id,
      artist: video.artist,
      genreId: video.genre_id,
      image: video.image_url,
      title: video.title,
      viewCount: Math.floor(Math.random() * 1_000_000),
    }))
    .groupBy('genreId')
    .value()

  const yourTopGenres = _.chain(data.genres)
    .sampleSize(4)
    .map<Genre>(genre => ({
      ...genre,
      videos: [],
      // Pick a random video belong to the genre and use its image as the genre cover
      image: _.sample(videosByGenre[genre.id])?.image,
    }))
    .value()

  const allGenres = _.chain(data.genres)
    .map<Genre>(genre => ({
      ...genre,
      videos: [],
      // Pick a random video belong to the genre and use its image as the genre cover
      image: _.sample(videosByGenre[genre.id])?.image,
    }))
    .value()

  const content = [
    {
      __typename: 'GenreCollection' as const,
      collection: yourTopGenres,
      name: 'Your top genres',
    },
    {
      __typename: 'GenreCollection' as const,
      collection: allGenres,
      name: 'Browse all',
    },
  ]

  return content
}

export function useSearchScreenContentQuery() {
  return useQuery(SEARCH_SCREEN_CONTENT_QUERY_KEY, fetchContent)
}
