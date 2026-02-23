import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { SidebarNavigationBase } from './sidebar-navigation-base'

const meta: Meta<typeof SidebarNavigationBase> = {
  title: 'Components/SidebarNavigationBase',
  component: SidebarNavigationBase,
  tags: [],
}

export default meta

type Story = StoryObj<typeof SidebarNavigationBase>

/**
 * Default SidebarNavigationBase
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
