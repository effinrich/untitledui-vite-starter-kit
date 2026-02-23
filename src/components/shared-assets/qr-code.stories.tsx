import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { QrCode } from './qr-code'

const meta: Meta<typeof QrCode> = {
  title: 'Components/QrCode',
  component: QrCode,
  tags: [],
}

export default meta

type Story = StoryObj<typeof QrCode>

/**
 * Default QrCode
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
