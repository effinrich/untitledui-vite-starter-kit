import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import PaymentIcons from './'

const meta: Meta<typeof PaymentIcons> = {
  title: 'Components/PaymentIcons',
  component: PaymentIcons,
  tags: [],
}

export default meta

type Story = StoryObj<typeof PaymentIcons>

/**
 * Default PaymentIcons
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
