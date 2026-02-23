import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { SidebarSimple } from './sidebar-simple'

const meta: Meta<typeof SidebarSimple> = {
  title: 'Components/SidebarSimple',
  component: SidebarSimple,
  tags: [],
}

export default meta

type Story = StoryObj<typeof SidebarSimple>

/**
 * Default SidebarSimple
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
