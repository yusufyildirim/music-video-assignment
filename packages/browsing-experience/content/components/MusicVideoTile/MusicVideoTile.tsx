import { Text } from '@xi/design-system.text'
import { fontSize, spacing } from '@xi/design-system.theme'
import * as React from 'react'
import { View, Image, StyleSheet } from 'react-native'

import { MusicVideo } from '../../types'

const WIDTH = 250

export interface MusicVideoTileProps extends MusicVideo {}

export const MusicVideoTile = ({ artistName, songName, viewCount, cover }: MusicVideoTileProps) => {
  const humanizedViewCount = viewCount.toLocaleString(undefined, { notation: 'compact' })

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: cover,
          width: WIDTH,
        }}
        style={styles.cover}
        resizeMode="cover"
      />
      <Text style={styles.song} numberOfLines={1}>
        {songName}
      </Text>
      <View style={styles.bottom}>
        <Text fontWeight="medium" color="suppressed" numberOfLines={1} style={styles.artist}>
          {artistName}
        </Text>
        <Text
          fontWeight="medium"
          color="suppressed"
          style={styles.seperatorDot}
          fontSize={fontSize.body3}>
          •
        </Text>
        <Text fontWeight="medium" color="suppressed">
          {humanizedViewCount}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  artist: { flexShrink: 1 },
  bottom: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  container: {
    width: WIDTH,
  },
  cover: { borderRadius: 8, height: 150, width: WIDTH },
  song: { paddingTop: spacing.s8, paddingBottom: spacing.s4 },
  seperatorDot: { paddingHorizontal: spacing.s4 },
})
