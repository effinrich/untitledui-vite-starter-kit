import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import Reddit from './reddit'

const meta: Meta<typeof Reddit> = {
  title: 'Components/Reddit',
  component: Reddit,
  tags: [],
  argTypes: {
    size: {
        control: "number"
    }
},
  args: {
    size: 24
},
}

export default meta

type Story = StoryObj<typeof Reddit>

/**
 * Default Reddit
 */
export const Default: Story = {
  args: {
    size: 24
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
