import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import type { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type TabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList> | undefined
  SearchTab: NavigatorScreenParams<SearchStackParamList> | undefined
}

export type TabScreenProps<Screen extends keyof TabParamList> = NativeStackScreenProps<
  TabParamList,
  Screen
>

export type HomeStackParamList = {
  Home: undefined
}

export type SearchStackParamList = {
  Search: undefined
  SearchResult: undefined
}

export type HomeScreenNavigationProp = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'HomeTab'>,
  NativeStackScreenProps<HomeStackParamList>
>

export type SearchScreenNavigationProp = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'SearchTab'>,
  NativeStackScreenProps<SearchStackParamList>
>
