import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import X from './x'

const meta: Meta<typeof X> = {
  title: 'Components/X',
  component: X,
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

type Story = StoryObj<typeof X>

/**
 * Default X
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
