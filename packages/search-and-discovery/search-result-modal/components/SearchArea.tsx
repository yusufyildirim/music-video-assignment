import { useNavigation } from '@react-navigation/native'
import { Genre } from '@xi/browsing-experience.content'
import { Button } from '@xi/design-system.button'
import { PillList } from '@xi/design-system.pill-list'
import { Text } from '@xi/design-system.text'
import { color, spacing } from '@xi/design-system.theme'
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useSearchFilters } from '../context'
import { useSearchFilterCategories } from '../hooks'
import { FilterButton } from './FilterButton'
import { SearchInput } from './SearchInput'
import { SearchResultCategoryFilters } from './SearchResultCategoryFilters'

export function SearchArea() {
  const { filters, setFilters } = useSearchFilters()
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()

  const onCancelPress = () => navigation.goBack()
  const onSearchTextChange = (text: string) => setFilters({ ...filters, text })

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.innerContainer}>
        <SearchInput onChangeText={onSearchTextChange} />
        <Button style={styles.cancelBtn} onPress={onCancelPress}>
          <Text>Cancel</Text>
        </Button>
      </View>

      <SearchResultCategoryFilters />
    </View>
  )
}

const styles = StyleSheet.create({
  cancelBtn: {
    paddingHorizontal: spacing.s16,
    paddingVertical: spacing.s8,
  },
  container: {
    backgroundColor: color.palette.gray800,
  },
  innerContainer: {
    flexDirection: 'row',
    paddingVertical: spacing.s12,
    paddingLeft: spacing.s16,
    alignItems: 'center',
  },
})
