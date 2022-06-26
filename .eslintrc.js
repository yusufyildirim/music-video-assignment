module.exports = {
  extends: ['universe/native', 'plugin:storybook/recommended'],
  plugins: ['react-native'],
  rules: {
    'react-hooks/exhaustive-deps': 'error',
    'react-native/no-color-literals': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-single-element-style-arrays': 'error',
    'react-native/no-unused-styles': 'error',
    'react-native/sort-styles': ['error', 'asc', {
      ignoreClassNames: false,
      ignoreStyleProperties: true
    }]
  }
};