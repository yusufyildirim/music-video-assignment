import { Text } from '@xi/design-system.text'
import { fontSize, spacing } from '@xi/design-system.theme'
import * as React from 'react'
import { View, Image, StyleSheet } from 'react-native'

import { Genre } from '../../types'

export interface GenreTileProps {
  name: string
  image: string
}

// Color would come from backend in an ideal worls
// We're just mimicing it
const randomColors = [
  '#B36A5E',
  '#0B4F6C',
  '#535657',
  '#509DDD',
  '#6E2365',
  '#3B3355',
  '#ADBBCE',
  '#9B7E46',
  '#AFD0BF',
  '#394032',
  '#808F87',
]

export const GenreTile = ({ name, image }: GenreTileProps) => {
  const backgroundColor = randomColors[Math.floor(Math.random() * randomColors.length)]
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.name} fontSize={fontSize.body1}>
        {name}
      </Text>
      <Image
        source={{
          uri: image,
          width: 50,
        }}
        style={styles.cover}
        resizeMode="cover"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: spacing.s12,
    flexDirection: 'row',
    overflow: 'hidden',
    borderRadius: 4,
  },
  cover: {
    height: 60,
    width: 60,
    transform: [{ rotate: '30deg' }, { translateX: 25 }],
  },
  name: { paddingTop: spacing.s8, paddingBottom: spacing.s4, flex: 1 },
})
