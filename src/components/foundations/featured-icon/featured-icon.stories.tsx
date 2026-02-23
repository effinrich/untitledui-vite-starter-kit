import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { FeaturedIcon } from './featured-icon'

const meta: Meta<typeof FeaturedIcon> = {
  title: 'Components/FeaturedIcon',
  component: FeaturedIcon,
  tags: [],
  argTypes: {
    className: {
        control: "text"
    }
},
  args: {
    children: "Content"
},
}

export default meta

type Story = StoryObj<typeof FeaturedIcon>

/**
 * Default FeaturedIcon
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
