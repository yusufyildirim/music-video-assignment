import { createCtx } from '@xi/platform.utils'
import React from 'react'

export interface SearchFilters {
  text?: string
  genreIds?: number[]
  decade?: number
}

interface SearchFiltersContextValue {
  filters: SearchFilters
  setFilters: (filters: SearchFilters) => void
}

const [useSearchFilters, SearchFiltersContextProvider] =
  createCtx<SearchFiltersContextValue>('SearchFilters')

export { useSearchFilters }

/**
 * A simple context provider that holds current search state.
 */
export const SearchFiltersProvider: React.FC = ({ children }) => {
  const [filters, setFilters] = React.useState<SearchFilters>({})

  const value = React.useMemo<SearchFiltersContextValue>(
    () => ({
      filters,
      setFilters,
    }),
    [filters],
  )

  return <SearchFiltersContextProvider value={value}>{children}</SearchFiltersContextProvider>
}
