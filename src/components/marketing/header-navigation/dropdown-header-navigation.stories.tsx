import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { DropdownHeaderNavigation } from './dropdown-header-navigation'

const meta: Meta<typeof DropdownHeaderNavigation> = {
  title: 'Components/DropdownHeaderNavigation',
  component: DropdownHeaderNavigation,
  tags: [],
}

export default meta

type Story = StoryObj<typeof DropdownHeaderNavigation>

/**
 * Default DropdownHeaderNavigation
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
