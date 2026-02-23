import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Label } from './label'

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: [],
  argTypes: {
    isRequired: {
        control: "boolean"
    },
    tooltip: {
        control: "text"
    },
    tooltipDescription: {
        control: "text"
    }
},
  args: {
    children: "Content",
    isRequired: false
},
}

export default meta

type Story = StoryObj<typeof Label>

/**
 * Default Label
 */
export const Default: Story = {
  args: {
    children: "Content",
    isRequired: false
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
