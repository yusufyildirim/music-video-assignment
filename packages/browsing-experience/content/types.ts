export interface Genre {
  id: number
  name: string
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
