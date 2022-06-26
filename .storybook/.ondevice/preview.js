import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'
import { color } from '@xi/design-system.theme'

export const decorators = [withBackgrounds]

export const parameters = {
  backgrounds: [
    {
      name: 'dark',
      value: color.semantic.background.default.dark,
      default: true,
    },
    {
      name: 'light',
      value: color.semantic.background.default.light,
    },
  ],
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
