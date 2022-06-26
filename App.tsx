import 'expo-dev-client'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '@xi/browsing-experience.home-screen'
import { useLoadFonts } from '@xi/design-system.font'
import { Icon } from '@xi/design-system.icon'
import { color } from '@xi/design-system.theme'
import { ErrorBoundary } from '@xi/platform.error-handling'
import { ScreenHOC } from '@xi/platform.screen'
import { SearchResultModal } from '@xi/search-and-discovery.search-result-modal'
import { SearchScreen } from '@xi/search-and-discovery.search-screen'
import * as React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { QueryClient, QueryClientProvider } from 'react-query'

import { HomeStackParamList, SearchStackParamList, TabParamList } from './NavTypes'

// Enable this to use Storybook in native app
// export { default } from './.storybook/.ondevice/Storybook'

const Tab = createBottomTabNavigator<TabParamList>()

const HomeStackNav = createNativeStackNavigator<HomeStackParamList>()
const SearchStackNav = createNativeStackNavigator<SearchStackParamList>()

const Home = ScreenHOC(HomeScreen)

const HomeStack = () => (
  <HomeStackNav.Navigator>
    <HomeStackNav.Screen name="Home" component={Home} options={{ headerShown: false }} />
  </HomeStackNav.Navigator>
)

const Search = ScreenHOC(SearchScreen)
const SearchResult = ScreenHOC(SearchResultModal)

const SearchStack = () => (
  <SearchStackNav.Navigator>
    <SearchStackNav.Screen name="Search" component={Search} options={{ headerShown: false }} />
    <SearchStackNav.Screen
      name="SearchResult"
      component={SearchResult}
      options={{ headerShown: false, presentation: 'containedModal', animation: 'fade' }}
    />
  </SearchStackNav.Navigator>
)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
    },
  },
})

export default function App() {
  const fontsLoaded = useLoadFonts()
  if (!fontsLoaded) return null

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ErrorBoundary>
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
                name="HomeTab"
                component={HomeStack}
                options={{
                  headerShown: false,
                  tabBarLabel: 'Home',
                  tabBarIcon: ({ focused }) => (
                    <Icon name="home" size={24} color={focused ? 'default' : 'pale'} />
                  ),
                }}
              />
              <Tab.Screen
                name="SearchTab"
                component={SearchStack}
                options={{
                  headerShown: false,
                  tabBarLabel: 'Search',
                  tabBarIcon: ({ focused }) => (
                    <Icon name="search" size={24} color={focused ? 'default' : 'pale'} />
                  ),
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </ErrorBoundary>
      </SafeAreaProvider>
    </QueryClientProvider>
  )
}
