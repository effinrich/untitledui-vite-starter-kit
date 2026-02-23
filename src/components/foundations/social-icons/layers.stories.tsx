import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import Layers from './layers'

const meta: Meta<typeof Layers> = {
  title: 'Components/Layers',
  component: Layers,
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

type Story = StoryObj<typeof Layers>

/**
 * Default Layers
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
