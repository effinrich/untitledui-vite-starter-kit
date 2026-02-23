import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Input } from './input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: [],
  argTypes: {
    hideRequiredIndicator: {
        control: "boolean"
    }
},
  args: {
    hideRequiredIndicator: false
},
}

export default meta

type Story = StoryObj<typeof Input>

/**
 * Default Input
 */
export const Default: Story = {
  args: {
    hideRequiredIndicator: false
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
