import { ComponentMeta } from '@storybook/react'
import React from 'react'

import { GenreTile } from './GenreTile'
import type { GenreTileProps } from './GenreTile'

export default {
  title: 'Browsing Experience/GenreTile',
  component: GenreTile,
  args: {
    name: 'Made for you',
    image:
      'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/503130/images/app/w522_h292.jpg',
  } as GenreTileProps,
} as ComponentMeta<typeof GenreTile>

const Template = (props: GenreTileProps) => <GenreTile {...props} />

export const Basic = Template.bind({})
