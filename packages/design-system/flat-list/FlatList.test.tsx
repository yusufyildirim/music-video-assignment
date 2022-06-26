import { render } from '@testing-library/react-native'
import { spacing } from '@xi/design-system.theme'
import { View } from 'react-native'

import { FlatList } from './FlatList'
import { flatListTestIDs } from './testIDs'

const data = [{ id: 1 }, { id: 2 }, { id: 3 }]

describe('FlatList', () => {
  it('should render the items', () => {
    const { getAllByTestId } = render(
      <FlatList
        data={data}
        renderItem={({ item }) => <View testID={`ID-${item.id}`} />}
        itemSpacing={0}
      />,
    )

    expect(getAllByTestId(/ID-\d*/)).toHaveLength(data.length)
  })

  it('should render `spacers` between items', () => {
    const ITEM_SPACING = spacing.s16

    const { getAllByTestId } = render(
      <FlatList
        data={data}
        renderItem={({ item }) => <View testID={`ID-${item.id}`} />}
        itemSpacing={ITEM_SPACING}
      />,
    )

    const elems = getAllByTestId(flatListTestIDs.spacer)

    // Should render spacers *between* the elements, shouldn't render after the last one
    expect(elems).toHaveLength(data.length - 1)
    elems.forEach(elem => {
      expect(elem).toHaveStyle({ width: ITEM_SPACING })
    })
  })

  describe('Inset', () => {
    it('should apply `inset` to the list', () => {
      const TEST_ID = 'Test'
      const INSET = spacing.s16

      const { getByTestId } = render(
        <FlatList
          testID={TEST_ID}
          data={data}
          renderItem={({ item }) => <View testID={`ID-${item.id}`} />}
          itemSpacing={0}
          inset={INSET}
        />,
      )

      // Testing the implementation, not ideal but the easiest way I can think of right now
      expect(getByTestId(TEST_ID)).toHaveProp('contentInset', { top: INSET, bottom: INSET })
    })

    it("shouldn't apply `inset` to the list", () => {
      const TEST_ID = 'Test'
      const INSET = spacing.s16

      const { getByTestId } = render(
        <FlatList
          testID={TEST_ID}
          data={data}
          renderItem={({ item }) => <View testID={`ID-${item.id}`} />}
          itemSpacing={0}
          inset={INSET}
        />,
      )

      expect(getByTestId(TEST_ID)).toHaveProp('contentInset', undefined)
      expect(getByTestId(TEST_ID)).toHaveProp('contentOffset', undefined)
    })
  })
})
