import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import Apple from './apple'

const meta: Meta<typeof Apple> = {
  title: 'Components/Apple',
  component: Apple,
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

type Story = StoryObj<typeof Apple>

/**
 * Default Apple
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
