import { useColor, font, fontSize } from '@xi/design-system.theme'
import type { TextColor, FontWeight, FontSize } from '@xi/design-system.theme'
import { Text as RNText, TextProps as RNTextProps, TextStyle } from 'react-native'

const DEFAULT_FONT_SIZE = fontSize.body2

interface TextProps extends RNTextProps {
  color?: TextColor
  fontWeight?: FontWeight
  fontSize?: FontSize
}

export const Text: React.FC<TextProps> = ({
  children,
  color = 'default',
  fontWeight = 'bold',
  fontSize = DEFAULT_FONT_SIZE,
  ...props
}) => {
  const colors = useColor()
  const style: TextStyle = {
    color: colors.text[color],
    fontFamily: font[fontWeight],
    fontSize,
  }

  return (
    <RNText {...props} style={[style, props.style]}>
      {children}
    </RNText>
  )
}
