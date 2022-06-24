import { useNavigation } from '@react-navigation/native'
import { Button } from '@xi/design-system.button'
import { Text } from '@xi/design-system.text'
import { Icon } from '@xi/design-system.icon'
import { color, spacing, useColor } from '@xi/design-system.theme'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'

import { FilterButton } from './FilterButton'
import { SearchInput } from './SearchInput'
import { PillList } from '@xi/design-system.pill-list'

export function SearchArea() {
  const navigation = useNavigation()

  const onCancelPress = () => navigation.goBack()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <FilterButton />
        <SearchInput />
        <Button style={styles.cancelBtn} onPress={onCancelPress}>
          <Text>Cancel</Text>
        </Button>
      </View>

      {/* <View>
        <PillList
          selectionMode="single"
          onSelectedItemsChanged={items => console.log('Selected Items:', items)}
          data={[
            { id: 1, name: 'Top' },
            { id: 2, name: 'Artists' },
            { id: 3, name: 'Playlists' },
            { id: 4, name: 'Podcasts & Shows' },
            { id: 5, name: 'Songs' },
            { id: 6, name: 'Albums' },
          ]}
        />
        <PillList
          selectionMode="multi"
          data={[
            { id: 1, name: '2020s' },
            { id: 2, name: '2010s' },
            { id: 3, name: '2000s' },
            { id: 4, name: '90s' },
            { id: 6, name: '80s' },
            { id: 7, name: '70s' },
            { id: 8, name: '60s' },
          ]}
        />
      </View> */}
    </SafeAreaView>
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
    alignItems: 'center',
  },
})
