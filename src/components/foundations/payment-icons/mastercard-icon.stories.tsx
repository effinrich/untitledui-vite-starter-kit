import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import MastercardIcon from './mastercard-icon'

const meta: Meta<typeof MastercardIcon> = {
  title: 'Components/MastercardIcon',
  component: MastercardIcon,
  tags: [],
}

export default meta

type Story = StoryObj<typeof MastercardIcon>

/**
 * Default MastercardIcon
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
