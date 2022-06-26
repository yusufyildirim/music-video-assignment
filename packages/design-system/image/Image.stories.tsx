import { ComponentMeta } from '@storybook/react'
import React from 'react'

import { Image } from './Image'
import type { ImageProps } from './Image'

export default {
  title: 'Design System/Image',
  component: Image,
  args: {
    uri: 'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/503130/images/app/w522_h292.jpg',
    style: { width: 200, height: 200 },
  } as ImageProps,
} as ComponentMeta<typeof Image>

const Template = (props: ImageProps) => <Image {...props} />

export const Basic = Template.bind({})
