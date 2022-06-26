import { Icon } from '@xi/design-system.icon'
import { color, font, spacing, useColor } from '@xi/design-system.theme'
import { StyleSheet, TextInput, View } from 'react-native'

interface SearchInputProps {
  onChangeText?: (text: string) => void
}

export function SearchInput({ onChangeText }: SearchInputProps) {
  const colors = useColor()

  return (
    <View style={styles.container}>
      <Icon name="search" size={16} />
      <TextInput
        autoFocus
        onChangeText={onChangeText}
        style={[styles.input, { color: colors.text.default }]}
        placeholderTextColor={colors.text.default}
        placeholder="Search"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.palette.gray700,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.s8,
  },
  input: {
    fontFamily: font.medium,
    paddingHorizontal: spacing.s8,
    flex: 1,
  },
})
