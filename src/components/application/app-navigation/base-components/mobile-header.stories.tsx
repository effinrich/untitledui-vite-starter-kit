import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { MobileHeader } from './mobile-header'

const meta: Meta<typeof MobileHeader> = {
  title: 'Components/MobileHeader',
  component: MobileHeader,
  tags: [],
}

export default meta

type Story = StoryObj<typeof MobileHeader>

/**
 * Default MobileHeader
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
