import { Image } from '@xi/design-system.image'
import { Text } from '@xi/design-system.text'
import { spacing } from '@xi/design-system.theme'
import * as React from 'react'
import { View, StyleSheet } from 'react-native'

import { MusicVideo } from '../../types'

const IMAGE_WIDTH = 50

export interface MusicVideoItemProps extends Omit<MusicVideo, 'viewCount'> {}

export const MusicVideoItem = ({ artist, image, title }: MusicVideoItemProps) => {
  return (
    <View style={styles.container}>
      <Image uri={image} style={styles.cover} resizeMode="cover" />
      <View style={styles.infoContainer}>
        <Text style={styles.song} numberOfLines={1}>
          {title}
        </Text>
        <Text fontWeight="medium" color="suppressed" numberOfLines={1} style={styles.artist}>
          {artist}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  artist: { flexShrink: 1 },
  container: {
    flexDirection: 'row',
  },
  cover: { height: IMAGE_WIDTH, width: IMAGE_WIDTH },
  infoContainer: {
    paddingLeft: spacing.s12,
  },
  song: { paddingTop: spacing.s8, paddingBottom: spacing.s4 },
})
