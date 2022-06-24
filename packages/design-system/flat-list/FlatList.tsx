import type { Spacing } from '@xi/design-system.theme'
import React from 'react'
import { FlatList as RNFlatList, ListRenderItem, View } from 'react-native'
import type { FlatListProps as RNFlatListProps } from 'react-native'

import { flatListTestIDs } from './testIDs'
export type { ListRenderItem } from 'react-native'

export interface FlatListProps<T> extends Omit<RNFlatListProps<T>, 'renderItem'> {
  /***
   * Acts like the combination of `contentInset` and `contentOffset`.
   * Insets the content by the given amount and sets scroll to the correct position.
   */
  inset?: Spacing

  /***
   * Adds `spacer` between the rendered items.
   */
  itemSpacing?: Spacing

  // `renderItem` prop is nullable on the original impl, we make it required
  renderItem: ListRenderItem<T>
}

/***
 * Optimized and enhanced version of the good old FlatList
 */
export function FlatList<T>({ itemSpacing = 0, inset, ...props }: FlatListProps<T>) {
  const ItemSeparatorComponent = React.useCallback(() => {
    return (
      <View testID={flatListTestIDs.spacer} style={{ width: itemSpacing, height: itemSpacing }} />
    )
  }, [itemSpacing])

  const renderItem = React.useCallback<ListRenderItem<T>>(
    info => {
      const Component = props.renderItem(info)

      // FlatList doesn't support column spacing.
      // We mimic that functionality right here.
      if (
        props.numColumns &&
        itemSpacing &&
        // If the remainder of the `mod` operation isn't `0`,
        // it means that the element isn't on the first col,
        // so, spacer should be added.
        info.index % props.numColumns
      ) {
        return (
          <>
            <ItemSeparatorComponent />
            {Component}
          </>
        )
      }

      return Component
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.numColumns, props.renderItem, itemSpacing, ItemSeparatorComponent],
  )

  const contentInset = React.useMemo(() => {
    if (!inset) return undefined
    if (props.horizontal) return { left: inset, right: inset }

    return { top: inset, bottom: inset }
  }, [inset, props.horizontal])

  const contentOffset = React.useMemo(() => {
    if (!inset || !props.horizontal) return undefined

    return { x: -inset, y: 0 }
  }, [inset, props.horizontal])

  return (
    <RNFlatList
      directionalLockEnabled
      contentInset={contentInset}
      contentOffset={contentOffset}
      ItemSeparatorComponent={itemSpacing > 0 ? ItemSeparatorComponent : undefined}
      // All the props above are overridable
      // Override them by passing `props` only if you know what you're doing
      {...props}
      renderItem={renderItem}
    />
  )
}
