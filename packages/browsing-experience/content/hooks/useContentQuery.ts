import { get } from '@xi/platform.http'
import { useQuery } from 'react-query'
import { Genre, MusicVideo } from '../types'

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

//#region DATA MAPPERS

/**
 * It takes an array of videos and returns an object where the keys are genre IDs and the values are
 * arrays of videos
 * @param {Video[]} videos - Video[]
 * @returns An object with genreIds as keys and an array of videos as values.
 */
const groupVideosByGenre = (videos: APIMusicVideo[]) => {
  return videos.reduce((acc, video) => {
    const { id, artist, genre_id: genreId, image_url: image, title } = video
    if (acc[genreId] === undefined) acc[genreId] = []

    acc[genreId].push({
      id,
      artist,
      genreId,
      image,
      title,
      // Generate a fake view count
      viewCount: Math.floor(Math.random() * 1_000_000),
    })
    return acc
  }, {} as Record<number, MusicVideo[]>)
}

/**
 * Given a list of videos and a list of genres, return a list of genres with the videos for each
 * genre.
 *
 * @returns An array of objects with the genre id and videos
 */
const mapVideosToGenres = ({ videos, genres }: APIContenResult): Genre[] => {
  const videosByGenre = groupVideosByGenre(videos)
  return genres.map(genre => ({
    ...genre,
    videos: videosByGenre[genre.id] || [],
  }))
}

/**
 * "Return an array of random videos from the given array of videos."
 *
 * The function takes two arguments:
 *
 * videos: An array of MusicVideo objects
 * count: The number of random videos to return
 * The function returns an array of MusicVideo objects
 * @param {MusicVideo[]} videos - MusicVideo[] - The array of videos to pick from
 * @param {number} count - number - The number of videos to pick
 * @returns An array of random videos
 */
function pickRandomVideos(videos: MusicVideo[], count: number) {
  // Meaning, there's not enough video in the array to randomize
  if (count > videos.length) return videos

  return Array(count)
    .fill(undefined)
    .map(() => videos[Math.floor(Math.random() * videos.length)])
}

/***
 * Returns 10 randomly selected genres with 10 (max) randomly selected videos in them
 */
function pickRandomGenresWithRandomVideos(genres: Genre[]) {
  // We filter genres that has at least 3 music videos to make sure it'll
  // have enough material to show on the ui when displayed.
  const filteredGenres = genres.filter(genre => genre.videos.length > 3)

  // Here we create an array with 10 elements and fill that with randomly picked genres
  return Array(10)
    .fill(undefined)
    .map(() => {
      const genre = filteredGenres[Math.floor(Math.random() * filteredGenres.length)]

      return {
        ...genre,
        videos: pickRandomVideos(genre.videos, 10),
      }
    })
}

//#endregion

/***
 * Fetchs content data from the service and maps that the data shape we need.
 */
const fetchContent = async () => {
  const data: APIContenResult = await get('/data/dataset.json')
  const genresWithVideos = mapVideosToGenres(data)

  const genres = pickRandomGenresWithRandomVideos(genresWithVideos)
  return genres
}

/**
 * Returns the content service response
 */
export function useContentQuery() {
  return useQuery(CONTENT_QUERY_KEY, fetchContent)
}
