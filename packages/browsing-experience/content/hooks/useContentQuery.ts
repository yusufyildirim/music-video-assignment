import { get } from '@xi/platform.http'
import _ from 'lodash'
import { useQuery } from 'react-query'

import { ContentCollection, Genre, MusicVideoContentCollection } from '../types'

const CONTENT_QUERY_KEY = 'content'

// Types that starts with `API` represents expected shape of the data that'll fetched from the backend
interface APIContenResult {
  genres: APIGenre[]
  videos: APIMusicVideo[]
}

interface APIGenre {
  id: number
  name: string
}

interface APIMusicVideo {
  id: number
  artist: string
  title: string
  release_year: number
  genre_id: number
  image_url: string
}

/**
 *** DISCLAIMER: ***
 *
 * THIS PARTS OF THE CODE LOOKS KINDA ALL OVER THE PLACE BECAUSE I'M TRYING TO
 * RECREATE A MEANINGFUL, RICH DATA ON THE CLIENT-SIDE SINCE THE ONLY API ENDPOINT I'VE GOT
 * DOESN'T SUPPORT WHAT I'M TRYING TO ACHIEVE.
 *
 * I WAS GOING TO USE MSW (MOCK SERVICE WORKER) TO KEEP THIS LOGIC AWAY
 * BUT I THOUGHT IT'D BE OVERKILL SINCE THIS IS NOT A REAL APPLICATION.
 */

/***
 * Fetchs content data from the service and maps that the data shape we need.
 */
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

  const suggestedGenresWithVideos: MusicVideoContentCollection[] = _.chain(data.genres)
    // Pick and map 10 random music video related to every genre
    .map(genre => ({ ...genre, videos: _.sampleSize(videosByGenre[genre.id], 10) }))
    // Filter out genres that has less than 3 music videos to make sure it'll
    // have enough material to show on the ui when displayed.
    .filter(genre => genre.videos.length > 3)
    // Pick 10 random genres
    .sampleSize(10)
    .map(g => ({
      __typename: 'MusicVideoCollection' as const,
      collection: g.videos,
      name: g.name,
    }))
    .value()

  const genresForYou = _.chain(data.genres)
    .sampleSize(5)
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
      collection: genresForYou,
      name: 'Genres for you',
    },
    ...suggestedGenresWithVideos,
  ]
  return content
}

/**
 * Returns the content service response
 */
export function useContentQuery() {
  return useQuery(CONTENT_QUERY_KEY, fetchContent)
}
