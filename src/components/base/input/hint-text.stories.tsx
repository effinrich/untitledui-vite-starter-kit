import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { HintText } from './hint-text'

const meta: Meta<typeof HintText> = {
  title: 'Components/HintText',
  component: HintText,
  tags: [],
  argTypes: {
    isInvalid: {
        control: "boolean"
    }
},
  args: {
    isInvalid: false,
    children: "Content"
},
}

export default meta

type Story = StoryObj<typeof HintText>

/**
 * Default HintText
 */
export const Default: Story = {
  args: {
    isInvalid: false,
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
