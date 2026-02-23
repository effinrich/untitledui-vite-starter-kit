import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import Linkedin from './linkedin'

const meta: Meta<typeof Linkedin> = {
  title: 'Components/Linkedin',
  component: Linkedin,
  tags: [],
  argTypes: {
    size: {
        control: "number"
    }
},
  args: {
    size: 24
},
}

export default meta

type Story = StoryObj<typeof Linkedin>

/**
 * Default Linkedin
 */
export const Default: Story = {
  args: {
    size: 24
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
