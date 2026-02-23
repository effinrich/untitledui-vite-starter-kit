import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { NavMenuItem } from './nav-menu-item'

const meta: Meta<typeof NavMenuItem> = {
  title: 'Components/NavMenuItem',
  component: NavMenuItem,
  tags: [],
}

export default meta

type Story = StoryObj<typeof NavMenuItem>

/**
 * Default NavMenuItem
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
