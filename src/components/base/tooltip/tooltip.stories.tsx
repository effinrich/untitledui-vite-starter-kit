import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Tooltip } from './tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: [],
  argTypes: {
    arrow: {
        control: "boolean"
    },
    delay: {
        control: "number"
    }
},
  args: {
    arrow: false,
    delay: 300
},
}

export default meta

type Story = StoryObj<typeof Tooltip>

/**
 * Default Tooltip
 */
export const Default: Story = {
  args: {
    arrow: false,
    delay: 300
},
}

/**
 * Interactive test
 */
export const Interactive: Story = {
  play: async ({ canvasElement }) => {
    // Verify component renders
    await expect(canvasElement.firstElementChild).toBeInTheDocument()
  },
}
