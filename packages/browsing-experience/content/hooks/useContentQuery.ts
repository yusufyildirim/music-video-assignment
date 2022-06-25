import { randomGenreColors } from '@xi/design-system.theme'
import { get } from '@xi/platform.http'
import _ from 'lodash'
import { useQuery } from 'react-query'

import { APIContenResult, ContentResponse, Genre, MusicVideo } from '../types'

const CONTENT_QUERY_KEY = 'content'

const fetchContent = async (): Promise<ContentResponse> => {
  const data = await get<APIContenResult>('/data/dataset.json')

  const videos = data.videos.map<MusicVideo>(video => ({
    id: video.id,
    artist: video.artist,
    genreId: video.genre_id,
    image: video.image_url,
    title: video.title,
    viewCount: Math.floor(Math.random() * 1_000_000),
  }))

  const videosByGenre = _.groupBy(videos, 'genreId')

  const genres = data.genres.map<Genre>(genre => ({
    id: genre.id,
    name: genre.name,
    image: _.sample(videosByGenre[genre.id])?.image,
    // Pick a random color for the genre background
    color: randomGenreColors[Math.floor(Math.random() * randomGenreColors.length)],
  }))

  return { videos, genres }
}

/**
 * Fetches and caches the content service response.
 *
 * Allows you to transform the response by providing a `select` function.
 *
 * @param select - (data: APIContenResult) => T
 * @returns The return value of `select` function.
 */
export function useContentQuery<S>(select: (data: ContentResponse) => S) {
  return useQuery(CONTENT_QUERY_KEY, fetchContent, {
    select,
    cacheTime: 1000 * 60 * 60,

    // Since we know our data is pretty much a static JSON, we can cache it indefinitely
    // for demoing purposes.
    staleTime: Infinity,
  })
}
