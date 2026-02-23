import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { SlideoutMenu } from './slideout-menu'

const meta: Meta<typeof SlideoutMenu> = {
  title: 'Components/SlideoutMenu',
  component: SlideoutMenu,
  tags: [],
  args: {
    children: "Content"
},
}

export default meta

type Story = StoryObj<typeof SlideoutMenu>

/**
 * Default SlideoutMenu
 */
export const Default: Story = {
  args: {
    children: "Content"
},
}

/**
 * Interactive test
 */
export const Interactive: Story = {
  args: {
    children: 'Click me',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const element = canvas.getByText(/click me/i)
    
    // Verify element renders
    await expect(element).toBeInTheDocument()
  },
}
