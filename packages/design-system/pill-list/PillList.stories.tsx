import { ComponentMeta } from '@storybook/react'
import React from 'react'

import { PillList, PillListProps } from './PillList'

type Item = { id: number; name: string }

const data: Item[] = [
  { id: 1, name: 'Top' },
  { id: 2, name: 'Artists' },
  { id: 3, name: 'Playlists' },
  { id: 4, name: 'Podcasts & Shows' },
  { id: 5, name: 'Songs' },
  { id: 6, name: 'Albums' },
]

export default {
  title: 'Design System/PillList',
  component: PillList,
  args: {
    data,
  } as PillListProps<Item>,
  argTypes: {
    name: { control: 'select' },
  },
} as ComponentMeta<typeof PillList>

const Template = ({ ...args }: PillListProps<Item>) => <PillList {...args} />

export const Basic = Template.bind({})
