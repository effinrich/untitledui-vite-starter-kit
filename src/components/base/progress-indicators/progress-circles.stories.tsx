import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { ProgressCircles } from './progress-circles'

const meta: Meta<typeof ProgressCircles> = {
  title: 'Components/ProgressCircles',
  component: ProgressCircles,
  tags: [],
}

export default meta

type Story = StoryObj<typeof ProgressCircles>

/**
 * Default ProgressCircles
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
