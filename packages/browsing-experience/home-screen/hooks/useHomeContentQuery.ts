import { useContentQuery } from '@xi/browsing-experience.content'
import type {
  APIContenResult,
  ContentCollection,
  Genre,
  MusicVideoContentCollection,
} from '@xi/browsing-experience.content'
import { ContentResponse, GenreContentCollection } from '@xi/browsing-experience.content/types'
import _ from 'lodash'

/**
 *** DISCLAIMER: ***
 *
 * I'M TRYING TO RECREATE A MEANINGFUL, RICH DATA ON THE CLIENT-SIDE SINCE THE ONLY API ENDPOINT I'VE GOT
 * DOESN'T SUPPORT WHAT I'M TRYING TO ACHIEVE.
 *
 * I WAS GOING TO USE MSW (MOCK SERVICE WORKER) TO KEEP THIS LOGIC AWAY
 * BUT I WANTED TO KEEP IT SIMPLE.
 */

/***
 * Fetchs content data from the service and maps that the data shape we need.
 */
const transformData = ({ genres, videos }: ContentResponse) => {
  const videosByGenre = _.groupBy(videos, 'genreId')

  const pickedGenres = _.chain(genres)
    // Filter out genres that has less than 3 music videos to make sure it'll
    // have enough material to show on the ui when displayed.
    .filter(genre => videosByGenre[genre.id]?.length > 3)
    // Pick 10 genres
    .sampleSize(10)
    .value()

  const musicVideoCollectionsByGenre = pickedGenres.map<MusicVideoContentCollection>(genre => ({
    __typename: 'MusicVideoCollection',
    // Pick 10 random music videos of the genre
    collection: _.sampleSize(videosByGenre[genre.id], 10),
    name: genre.name,
  }))

  const genresForYou = _.chain(genres).sampleSize(4).value()

  const genreCollection: GenreContentCollection = {
    __typename: 'GenreCollection',
    collection: genresForYou,
    name: 'Genres for you',
  }

  // Shuffle the content order to make it look more natural
  return _.shuffle([...musicVideoCollectionsByGenre, genreCollection])
}

export function useHomeContentQuery() {
  return useContentQuery(transformData)
}
