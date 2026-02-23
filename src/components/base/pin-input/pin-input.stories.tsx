import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { PinInput } from './pin-input'

const meta: Meta<typeof PinInput> = {
  title: 'Components/PinInput',
  component: PinInput,
  tags: [],
}

export default meta

type Story = StoryObj<typeof PinInput>

/**
 * Default PinInput
 */
export const Default: Story = {
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
