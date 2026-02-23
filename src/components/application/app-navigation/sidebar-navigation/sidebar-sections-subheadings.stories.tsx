import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { SidebarSectionsSubheadings } from './sidebar-sections-subheadings'

const meta: Meta<typeof SidebarSectionsSubheadings> = {
  title: 'Components/SidebarSectionsSubheadings',
  component: SidebarSectionsSubheadings,
  tags: [],
}

export default meta

type Story = StoryObj<typeof SidebarSectionsSubheadings>

/**
 * Default SidebarSectionsSubheadings
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
