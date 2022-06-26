import 'expo-dev-client'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '@xi/browsing-experience.home-screen'
import { useLoadFonts } from '@xi/design-system.font'
import { Icon } from '@xi/design-system.icon'
import { color } from '@xi/design-system.theme'
import { SearchResultModal } from '@xi/search-and-discovery.search-result-modal'
import * as React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { QueryClient, QueryClientProvider } from 'react-query'

import { SearchScreen } from './packages/search-and-discovery/search-screen'

// Enable this to use Storybook in native app
// export { default } from './.storybook/.ondevice/Storybook'

const Tab = createBottomTabNavigator()

const Stack = createNativeStackNavigator()

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
)

const SearchStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
    <Stack.Screen
      name="SearchResultModal"
      component={SearchResultModal}
      options={{ headerShown: false, presentation: 'containedModal', animation: 'fade' }}
    />
  </Stack.Navigator>
)

const queryClient = new QueryClient()

export default function App() {
  const fontsLoaded = useLoadFonts()
  if (!fontsLoaded) return null

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
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
                tabBarIcon: ({ focused }) => (
                  <Icon name="home" size={24} color={focused ? 'default' : 'pale'} />
                ),
              }}
            />
            <Tab.Screen
              name="Search"
              component={SearchStack}
              options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                  <Icon name="search" size={24} color={focused ? 'default' : 'pale'} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  )
}
