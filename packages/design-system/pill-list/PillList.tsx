import { FlatList } from '@xi/design-system.flat-list'
import { spacing } from '@xi/design-system.theme'
import * as React from 'react'
import { View, StyleSheet, ListRenderItem } from 'react-native'

import { Pill } from './Pill'

type Item = { id: number; name: string }

export interface PillListProps<T extends Item> {
  data: T[]
  /***
   * Selection behavior is disabled by default.
   *
   * `multi` allows user to select multiple items at the same time.
   *
   * `single` restricts user to select only one item at a time.
   */
  selectionMode?: 'multi' | 'single'

  onSelectedItemsChanged?: (selectedItems: T[]) => void
}

export function PillList<T extends Item>({
  data,
  selectionMode,
  onSelectedItemsChanged,
}: PillListProps<T>) {
  const [selectedItems, setSelectedItems] = React.useState<Record<number, T>>({})

  const onPillPressed = (item: T) => {
    if (!selectionMode) return

    return setSelectedItems(currSelectedItems => {
      // Remove the element if it's already selected
      if (currSelectedItems[item.id]) {
        delete currSelectedItems[item.id]
        onSelectedItemsChanged?.(Object.values(currSelectedItems))
        return { ...currSelectedItems }
      }

      const updatedSelectedItems = {
        // We shouldn't spread `currSelectedItems` if selectionMode is `single`
        ...(selectionMode === 'single' ? {} : currSelectedItems),
        [item.id]: item,
      }
      onSelectedItemsChanged?.(Object.values(updatedSelectedItems))

      return updatedSelectedItems
    })
  }

  const renderItem: ListRenderItem<T> = ({ item }) => {
    return (
      <Pill
        name={item.name}
        onPress={() => onPillPressed(item)}
        selected={selectedItems[item.id] !== undefined}
      />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        itemSpacing={spacing.s8}
        inset={spacing.s16}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={data}
        extraData={selectedItems}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', paddingVertical: spacing.s8 },
})
