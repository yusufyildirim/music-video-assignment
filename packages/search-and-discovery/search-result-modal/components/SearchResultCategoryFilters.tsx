import { Genre } from '@xi/browsing-experience.content'
import { PillList } from '@xi/design-system.pill-list'
import Animated, { FadeInLeft } from 'react-native-reanimated'

import { useSearchFilters } from '../context'
import { useSearchFilterCategories } from '../hooks'
import { Decade } from '../hooks/useSearchFilterCategories'

export function SearchResultCategoryFilters() {
  const { data: categories } = useSearchFilterCategories()
  const { filters, setFilters } = useSearchFilters()
  const onSelectedGenresChange = (selectedGenres: Genre[]) => {
    const genreIds = selectedGenres.map(genre => genre.id)
    setFilters({ ...filters, genreIds })
  }

  const onSelectedDecadeChange = ([decade]: Decade[]) => {
    setFilters({ ...filters, decade: decade && decade.value })
  }

  if (!categories) return null
  const { decades, genres } = categories

  return (
    <Animated.View entering={FadeInLeft.delay(100)}>
      <PillList
        selectionMode="multi"
        onSelectedItemsChanged={onSelectedGenresChange}
        data={genres}
      />
      <PillList
        selectionMode="single"
        data={decades}
        onSelectedItemsChanged={onSelectedDecadeChange}
      />
    </Animated.View>
  )
}
