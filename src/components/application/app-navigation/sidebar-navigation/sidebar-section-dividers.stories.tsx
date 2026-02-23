import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { SidebarSectionDividers } from './sidebar-section-dividers'

const meta: Meta<typeof SidebarSectionDividers> = {
  title: 'Components/SidebarSectionDividers',
  component: SidebarSectionDividers,
  tags: [],
}

export default meta

type Story = StoryObj<typeof SidebarSectionDividers>

/**
 * Default SidebarSectionDividers
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
