import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { BackgroundPatterns } from './'

const meta: Meta<typeof BackgroundPatterns> = {
  title: 'Components/BackgroundPatterns',
  component: BackgroundPatterns,
  tags: [],
}

export default meta

type Story = StoryObj<typeof BackgroundPatterns>

/**
 * Default BackgroundPatterns
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
