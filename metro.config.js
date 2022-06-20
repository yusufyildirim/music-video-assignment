/* eslint-disable no-undef */
const { getDefaultConfig } = require('expo/metro-config')

const defaultConfig = getDefaultConfig(__dirname)

defaultConfig.resolver.resolverMainFields = [
  'sbmodern',
  ...defaultConfig.resolver.resolverMainFields,
]

defaultConfig.watchFolders = [...defaultConfig.watchFolders, './.storybook']

module.exports = defaultConfig
