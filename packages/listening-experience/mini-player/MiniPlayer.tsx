import { Ionicons } from '@expo/vector-icons'
import { Text } from '@xi/design-system.text'
import { spacing, color } from '@xi/design-system.theme'
import { Image, StyleSheet, View } from 'react-native'

const COVER_SIZE = 36

export function MiniPlayer() {
  const { artist, cover, songName } = {
    artist: 'Friday (feat. Mufasa & Hypeman)',
    cover:
      'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/503130/images/app/w522_h292.jpg',
    songName: 'Dopamine Re-Edit * Riton, Nightcrawlers, Mufasa & Hypeman',
  }
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Image
          source={{
            uri: cover,
            width: COVER_SIZE,
            height: COVER_SIZE,
          }}
        />
        <View style={styles.infoContainer}>
          <Text numberOfLines={1}>{songName}</Text>
          <Text numberOfLines={1} color="suppressed">
            {artist}
          </Text>
        </View>
        <Ionicons name="play" size={24} color="white" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.s8,
    flexDirection: 'row',
    flex: 1,
    borderRadius: 6,
    alignItems: 'center',
    backgroundColor: color.palette.gray800,
    borderWidth: 1,
    borderColor: color.palette.orange900,
  },
  infoContainer: { paddingHorizontal: spacing.s12, flex: 1 },
  outerContainer: {
    position: 'absolute',
    bottom: spacing.s64 + spacing.s16,
    left: 0,
    width: '100%',
    justifyContent: 'center',
    padding: spacing.s12,
  },
})
