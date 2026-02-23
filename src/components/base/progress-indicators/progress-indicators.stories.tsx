import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { ProgressIndicators } from './progress-indicators'

const meta: Meta<typeof ProgressIndicators> = {
  title: 'Components/ProgressIndicators',
  component: ProgressIndicators,
  tags: [],
}

export default meta

type Story = StoryObj<typeof ProgressIndicators>

/**
 * Default ProgressIndicators
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
