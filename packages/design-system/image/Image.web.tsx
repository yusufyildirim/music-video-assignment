import { Image as RNImage } from 'react-native'

import type { ImageProps } from './Image'

export function Image({ uri, ...props }: ImageProps) {
  return <RNImage source={{ uri }} {...props} />
}
