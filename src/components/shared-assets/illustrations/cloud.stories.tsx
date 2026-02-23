import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Cloud } from './cloud'

const meta: Meta<typeof Cloud> = {
  title: 'Components/Cloud',
  component: Cloud,
  tags: [],
}

export default meta

type Story = StoryObj<typeof Cloud>

/**
 * Default Cloud
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
