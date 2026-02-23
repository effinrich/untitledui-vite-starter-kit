import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { NavItemButton } from './nav-item-button'

const meta: Meta<typeof NavItemButton> = {
  title: 'Components/NavItemButton',
  component: NavItemButton,
  tags: [],
  argTypes: {
    open: {
        control: "boolean"
    },
    href: {
        control: "text"
    },
    label: {
        control: "text"
    }
},
  args: {
    open: false,
    label: "Label"
},
}

export default meta

type Story = StoryObj<typeof NavItemButton>

/**
 * Default NavItemButton
 */
export const Default: Story = {
  args: {
    open: false,
    label: "Label"
},
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
