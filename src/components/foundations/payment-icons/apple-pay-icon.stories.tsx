import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import ApplePayIcon from './apple-pay-icon'

const meta: Meta<typeof ApplePayIcon> = {
  title: 'Components/ApplePayIcon',
  component: ApplePayIcon,
  tags: [],
}

export default meta

type Story = StoryObj<typeof ApplePayIcon>

/**
 * Default ApplePayIcon
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
