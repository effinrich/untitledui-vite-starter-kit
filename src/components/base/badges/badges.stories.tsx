import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Badges } from './badges'

const meta: Meta<typeof Badges> = {
  title: 'Components/Badges',
  component: Badges,
  tags: [],
}

export default meta

type Story = StoryObj<typeof Badges>

/**
 * Default Badges
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
