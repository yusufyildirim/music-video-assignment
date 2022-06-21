import { FontName } from '@xi/design-system.theme'
import { useFonts, FontDisplay } from 'expo-font'
import * as React from 'react'

interface FontResource {
  display: FontDisplay
  uri: string
}

const fonts: Record<FontName, FontResource> = {
  'CircularStd-Black': {
    display: FontDisplay.SWAP,
    uri: require('./assets/CircularStd-Black.otf'),
  },
  'CircularStd-Bold': {
    display: FontDisplay.SWAP,
    uri: require('./assets/CircularStd-Bold.otf'),
  },
  'CircularStd-Book': {
    display: FontDisplay.SWAP,
    uri: require('./assets/CircularStd-Book.otf'),
  },
  'CircularStd-Medium': {
    display: FontDisplay.SWAP,
    uri: require('./assets/CircularStd-Medium.otf'),
  },
  'CircularStd-Light': {
    display: FontDisplay.SWAP,
    uri: require('./assets/CircularStd-Light.otf'),
  },
}

export const useLoadFonts = (): boolean => {
  const [loaded, error] = useFonts(fonts)

  React.useEffect(() => {
    if (error) {
      console.log('useLoadFonts', `Unable to load fonts: ${error.message}`)
    }
  }, [error])

  return loaded || !!error
}
