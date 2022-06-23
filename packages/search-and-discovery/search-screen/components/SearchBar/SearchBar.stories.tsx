import { ComponentMeta } from '@storybook/react'
import React from 'react'

import { SearchBar } from './SearchBar'

export default {
  title: 'Search and Discovery/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>

const Template = () => <SearchBar />

export const Basic = Template.bind({})
