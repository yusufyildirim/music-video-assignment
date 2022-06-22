import { MusicVideoCollection } from '@xi/browsing-experience.content'
import { useColor } from '@xi/design-system.theme'
import * as React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'

const collection = [
  {
    id: 1,
    genreId: 99,
    artist: 'ODESZA',
    title: 'Behind The Sun Vay Amk bayagi uzun diyelim ki',
    viewCount: 1454563,
    image:
      'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/503037/images/app/w522_h292.jpg',
  },
  {
    id: 2,
    genreId: 76,
    artist: 'Olly Murs ft. Travie McCoy',
    title: 'Wrapped Up',
    viewCount: 1454563,
    image:
      'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/503130/images/app/w522_h292.jpg',
  },
  {
    id: 3,
    genreId: 11,
    artist: 'Joaquin Sabina Joaquin Sabina Joaquin Sabina Joaquin Sabina Joaquin Sabina',
    title: 'Dieguitos y Mafaldas',
    viewCount: 42114,
    image:
      'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/504752/images/app/w522_h292.jpg',
  },
]

export function HomeScreen() {
  const color = useColor()

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: color.background.default }]}>
      <ScrollView>
        <MusicVideoCollection title="Episodes for you" collection={collection} />
        <MusicVideoCollection
          title="Based on your recent listening"
          collection={[...collection].reverse()}
        />
        <MusicVideoCollection
          title="Hip Hop"
          collection={[collection[1], collection[0], collection[2]]}
        />
        <MusicVideoCollection title="Günlük müzik" collection={[...collection].reverse()} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
