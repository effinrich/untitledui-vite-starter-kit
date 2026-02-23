import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import StripeIcon from './stripe-icon'

const meta: Meta<typeof StripeIcon> = {
  title: 'Components/StripeIcon',
  component: StripeIcon,
  tags: [],
}

export default meta

type Story = StoryObj<typeof StripeIcon>

/**
 * Default StripeIcon
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
