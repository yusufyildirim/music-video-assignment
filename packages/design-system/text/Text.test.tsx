import { render } from '@testing-library/react-native'

import { Text } from './Text'

describe('Text', () => {
  it('should render', () => {
    const { getByText } = render(<Text>Test</Text>)
    expect(getByText('Test')).toBeTruthy()
  })
})
