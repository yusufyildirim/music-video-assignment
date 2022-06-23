import 'expo-dev-client'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '@xi/browsing-experience.home-screen'
import { useLoadFonts } from '@xi/design-system.font'
import { color } from '@xi/design-system.theme'
import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { MiniPlayer } from './packages/listening-experience/mini-player'

// Enable this to use Storybook in native app
// export { default } from './.storybook/.ondevice/Storybook'

const Tab = createBottomTabNavigator()

const Stack = createNativeStackNavigator()

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
)

const queryClient = new QueryClient()

export default function App() {
  const fontsLoaded = useLoadFonts()
  if (!fontsLoaded) return null

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer
        theme={{
          dark: true,
          colors: {
            ...DefaultTheme.colors,
            background: color.semantic.background.default.dark,
            primary: color.semantic.background.default.dark,
            card: color.semantic.background.default.dark,
          },
        }}>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: color.semantic.text.suppressed.dark,
          }}>
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              headerShown: false,
              tabBarIcon: tab => <Ionicons name="home" size={24} color={tab.color} />,
            }}
          />
        </Tab.Navigator>

        <MiniPlayer />
      </NavigationContainer>
    </QueryClientProvider>
  )
}
