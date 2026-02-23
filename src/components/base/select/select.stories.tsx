import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Select } from './select'

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: [],
  argTypes: {
    popoverClassName: {
        control: "text"
    }
},
  args: {
    children: "Content"
},
}

export default meta

type Story = StoryObj<typeof Select>

/**
 * Default Select
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
