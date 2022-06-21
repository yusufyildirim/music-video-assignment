import { render } from '@testing-library/react-native'
import { color, font, fontSize } from '@xi/design-system.theme'

import { Text } from './Text'

describe('Text', () => {
  it('should render the provided text', () => {
    const { getByText } = render(<Text>Test</Text>)
    expect(getByText('Test')).toBeTruthy()
  })

  it('should set the `color`', () => {
    const { getByText } = render(<Text color="suppressed">Test</Text>)
    expect(getByText('Test')).toHaveStyle({ color: color.semantic.text.suppressed.dark })
  })

  it('should set the `fontSize`', () => {
    const { getByText } = render(<Text fontSize={fontSize.title1}>Test</Text>)
    expect(getByText('Test')).toHaveStyle({ fontSize: fontSize.title1 })
  })

  it('should set the `fontWeight`', () => {
    const { getByText } = render(<Text fontWeight="light">Test</Text>)
    expect(getByText('Test')).toHaveStyle({ fontFamily: font['light'] })
  })
})
