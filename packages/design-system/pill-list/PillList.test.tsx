import { fireEvent, render } from '@testing-library/react-native'

import { PillList } from './PillList'

const data = [
  { id: 1, name: 'Top' },
  { id: 2, name: 'Artists' },
  { id: 3, name: 'Playlists' },
  { id: 4, name: 'Podcasts & Shows' },
  { id: 5, name: 'Songs' },
  { id: 6, name: 'Albums' },
]

describe('PillList', () => {
  it('should render pill items', () => {
    const { getByText } = render(<PillList data={data} />)

    const elements = data.map(({ name }) => getByText(name))

    expect(elements).toHaveLength(data.length)
  })

  describe('Selection', () => {
    it('should let user select an item', () => {
      const onSelectedItemsChanged = jest.fn()
      const itemToBeSelected = data[3]

      const { getByText } = render(
        <PillList
          onSelectedItemsChanged={onSelectedItemsChanged}
          selectionMode="single"
          data={data}
        />,
      )

      fireEvent.press(getByText(itemToBeSelected.name))

      expect(onSelectedItemsChanged).toBeCalledWith([itemToBeSelected])
    })

    it('should let user deselect an item', () => {
      const onSelectedItemsChanged = jest.fn()
      const itemToBeSelected = data[2]

      const { getByText } = render(
        <PillList
          onSelectedItemsChanged={onSelectedItemsChanged}
          selectionMode="single"
          data={data}
        />,
      )

      // Should fire the event with selected item if item's not selected yet
      fireEvent.press(getByText(itemToBeSelected.name))
      expect(onSelectedItemsChanged).toBeCalledWith([itemToBeSelected])

      // Should mark item as deselected and trigger the event without it
      fireEvent.press(getByText(itemToBeSelected.name))
      expect(onSelectedItemsChanged).toBeCalledWith([])
    })

    it('should let user select multiple items', () => {
      const onSelectedItemsChanged = jest.fn()
      const firstItem = data[1]
      const secondItem = data[2]
      const thirdItem = data[3]

      const { getByText } = render(
        <PillList
          onSelectedItemsChanged={onSelectedItemsChanged}
          selectionMode="multi"
          data={data}
        />,
      )

      fireEvent.press(getByText(firstItem.name))
      expect(onSelectedItemsChanged).toBeCalledWith([firstItem])

      fireEvent.press(getByText(secondItem.name))
      expect(onSelectedItemsChanged).toBeCalledWith([firstItem, secondItem])

      fireEvent.press(getByText(thirdItem.name))
      expect(onSelectedItemsChanged).toBeCalledWith([firstItem, secondItem, thirdItem])
    })

    it('should let user deselect an item in `multi` mode', () => {
      const onSelectedItemsChanged = jest.fn()
      const firstItem = data[1]
      const secondItem = data[2]
      const thirdItem = data[3]

      const { getByText } = render(
        <PillList
          onSelectedItemsChanged={onSelectedItemsChanged}
          selectionMode="multi"
          data={data}
        />,
      )

      fireEvent.press(getByText(firstItem.name))
      fireEvent.press(getByText(secondItem.name))
      fireEvent.press(getByText(thirdItem.name))
      expect(onSelectedItemsChanged).toBeCalledWith([firstItem, secondItem, thirdItem])

      // Press to the `secondItem` again to deselect it
      fireEvent.press(getByText(secondItem.name))
      expect(onSelectedItemsChanged).toBeCalledWith([firstItem, thirdItem])
    })
  })
})
