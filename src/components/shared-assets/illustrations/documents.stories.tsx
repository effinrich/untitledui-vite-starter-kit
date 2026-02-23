import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Documents } from './documents'

const meta: Meta<typeof Documents> = {
  title: 'Components/Documents',
  component: Documents,
  tags: [],
}

export default meta

type Story = StoryObj<typeof Documents>

/**
 * Default Documents
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
