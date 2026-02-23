import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import PaypalIcon from './paypal-icon'

const meta: Meta<typeof PaypalIcon> = {
  title: 'Components/PaypalIcon',
  component: PaypalIcon,
  tags: [],
}

export default meta

type Story = StoryObj<typeof PaypalIcon>

/**
 * Default PaypalIcon
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
