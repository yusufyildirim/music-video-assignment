import { color } from '@xi/design-system.theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: color.semantic.background.default.dark,
      },
      {
        name: 'light',
        value: color.semantic.background.default.light,
      },
    ],
  },
}
