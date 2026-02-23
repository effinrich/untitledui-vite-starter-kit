import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { InputPayment } from './input-payment'

const meta: Meta<typeof InputPayment> = {
  title: 'Components/InputPayment',
  component: InputPayment,
  tags: [],
}

export default meta

type Story = StoryObj<typeof InputPayment>

/**
 * Default InputPayment
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
