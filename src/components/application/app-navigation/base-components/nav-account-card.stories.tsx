import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { NavAccountCard } from './nav-account-card'

const meta: Meta<typeof NavAccountCard> = {
  title: 'Components/NavAccountCard',
  component: NavAccountCard,
  tags: [],
}

export default meta

type Story = StoryObj<typeof NavAccountCard>

/**
 * Default NavAccountCard
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
