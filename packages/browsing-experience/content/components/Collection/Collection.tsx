import { FlatList } from '@xi/design-system.flat-list'
import type { ListRenderItem } from '@xi/design-system.flat-list'
import { Text } from '@xi/design-system.text'
import { fontSize, spacing } from '@xi/design-system.theme'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const HORIZONTAL_SPACING = spacing.s16

export interface CollectionProps<T> {
  title: string
  collection: T[]
  renderItem: ListRenderItem<T>
}

export function Collection<T>({ title, collection, renderItem }: CollectionProps<T>) {
  return (
    <View>
      <Text fontWeight="bold" fontSize={fontSize.title3} style={styles.title}>
        {title}
      </Text>
      <FlatList
        horizontal
        data={collection}
        inset={HORIZONTAL_SPACING}
        itemSpacing={spacing.s16}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    paddingVertical: spacing.s16,
    paddingHorizontal: HORIZONTAL_SPACING,
  },
})
