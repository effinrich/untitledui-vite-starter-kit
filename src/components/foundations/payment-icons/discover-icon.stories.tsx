import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import DiscoverIcon from './discover-icon'

const meta: Meta<typeof DiscoverIcon> = {
  title: 'Components/DiscoverIcon',
  component: DiscoverIcon,
  tags: [],
}

export default meta

type Story = StoryObj<typeof DiscoverIcon>

/**
 * Default DiscoverIcon
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
