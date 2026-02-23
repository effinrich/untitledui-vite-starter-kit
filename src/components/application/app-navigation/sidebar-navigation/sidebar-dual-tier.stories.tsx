import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { SidebarDualTier } from './sidebar-dual-tier'

const meta: Meta<typeof SidebarDualTier> = {
  title: 'Components/SidebarDualTier',
  component: SidebarDualTier,
  tags: [],
}

export default meta

type Story = StoryObj<typeof SidebarDualTier>

/**
 * Default SidebarDualTier
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
