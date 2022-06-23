export interface Genre {
  id: number
  name: string
  image?: string
  videos: MusicVideo[]
}

export interface MusicVideo {
  id: number
  artist: string
  title: string
  genreId: number
  image: string
  viewCount: number
}

export interface ContentCollectionBase<T> {
  __typename: string
  name: string
  collection: T[]
}

export interface MusicVideoContentCollection extends ContentCollectionBase<MusicVideo> {
  __typename: 'MusicVideoCollection'
}

export interface GenreContentCollection extends ContentCollectionBase<Genre> {
  __typename: 'GenreCollection'
}

export type ContentCollection = MusicVideoContentCollection | GenreContentCollection
