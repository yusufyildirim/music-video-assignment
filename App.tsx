import 'expo-dev-client'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '@xi/browsing-experience.home-screen'
import { useLoadFonts } from '@xi/design-system.font'
import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { MiniPlayer } from './packages/listening-experience/mini-player'

// Enable this to use Storybook in native app
// export { default } from './.storybook/.ondevice/Storybook'

const Stack = createNativeStackNavigator()

const queryClient = new QueryClient()

export default function App() {
  const fontsLoaded = useLoadFonts()
  if (!fontsLoaded) return null

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>

        <MiniPlayer />
      </NavigationContainer>
    </QueryClientProvider>
  )
}
