import { StyleProp, ImageStyle as RNImageStyle } from 'react-native'
import FastImage, { ImageStyle, ResizeMode } from 'react-native-fast-image'

export interface ImageProps {
  uri?: string
  resizeMode?: ResizeMode
  // We *AND (&)* the styles to eliminate
  // incompatibilities between web and mobile implementations
  style?: StyleProp<ImageStyle & RNImageStyle>
}

export function Image({ uri, style, ...props }: ImageProps) {
  return <FastImage style={style} source={{ uri }} {...props} />
}
