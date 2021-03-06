// Types that starts with `API` represents expected shape of the data that'll fetched from the backend
export interface APIContenResult {
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

export interface Genre {
  id: number
  name: string
  image?: string
  color: string
}

export interface MusicVideo {
  id: number
  artist: string
  title: string
  genreId: number
  image: string
  viewCount: number
  decade: number
}

export type ContentResponse = { videos: MusicVideo[]; genres: Genre[] }

export interface ContentCollectionBase<T> {
  __typename: string
  name: string
  collection: T[]
}

export interface MusicVideoContentCollection extends ContentCollectionBase<MusicVideo> {
  __typename: 'MusicVideoCollection'
  vertical?: boolean
}

export interface GenreContentCollection extends ContentCollectionBase<Genre> {
  __typename: 'GenreCollection'
}

export type ContentCollection = MusicVideoContentCollection | GenreContentCollection
