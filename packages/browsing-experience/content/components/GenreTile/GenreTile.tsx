import { Image } from '@xi/design-system.image'
import { Text } from '@xi/design-system.text'
import { fontSize, spacing } from '@xi/design-system.theme'
import * as React from 'react'
import { View, StyleSheet } from 'react-native'

export interface GenreTileProps {
  name: string
  image: string
  color: string
}

export const GenreTile = ({ name, image, color: backgroundColor }: GenreTileProps) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.name} fontSize={fontSize.body1}>
        {name}
      </Text>
      <Image uri={image} style={styles.cover} resizeMode="cover" />
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
