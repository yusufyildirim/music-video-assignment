import { useColorScheme } from 'react-native'

import { semanticByColorScheme } from '../color/semantic'

/***
 * Returns the available `colors` based on the active theme.
 */
export function useColor() {
  const currentTheme = useColorScheme()

  // Force `dark` mode for the dev builds
  if (__DEV__) return semanticByColorScheme['dark']
  return semanticByColorScheme[currentTheme || 'dark']
}
