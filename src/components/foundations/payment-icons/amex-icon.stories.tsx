import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import AmexIcon from './amex-icon'

const meta: Meta<typeof AmexIcon> = {
  title: 'Components/AmexIcon',
  component: AmexIcon,
  tags: [],
}

export default meta

type Story = StoryObj<typeof AmexIcon>

/**
 * Default AmexIcon
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
