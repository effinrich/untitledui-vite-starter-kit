import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { SidebarSlim } from './sidebar-slim'

const meta: Meta<typeof SidebarSlim> = {
  title: 'Components/SidebarSlim',
  component: SidebarSlim,
  tags: [],
}

export default meta

type Story = StoryObj<typeof SidebarSlim>

/**
 * Default SidebarSlim
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
