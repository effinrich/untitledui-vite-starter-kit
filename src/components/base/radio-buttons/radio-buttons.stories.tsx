import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { RadioButtons } from './radio-buttons'

const meta: Meta<typeof RadioButtons> = {
  title: 'Components/RadioButtons',
  component: RadioButtons,
  tags: [],
}

export default meta

type Story = StoryObj<typeof RadioButtons>

/**
 * Default RadioButtons
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
