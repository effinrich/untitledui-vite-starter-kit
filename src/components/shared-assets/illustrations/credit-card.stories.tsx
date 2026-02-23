import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { CreditCard } from './credit-card'

const meta: Meta<typeof CreditCard> = {
  title: 'Components/CreditCard',
  component: CreditCard,
  tags: [],
}

export default meta

type Story = StoryObj<typeof CreditCard>

/**
 * Default CreditCard
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
