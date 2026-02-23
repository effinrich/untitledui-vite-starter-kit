import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Tags } from './tags'

const meta: Meta<typeof Tags> = {
  title: 'Components/Tags',
  component: Tags,
  tags: [],
}

export default meta

type Story = StoryObj<typeof Tags>

/**
 * Default Tags
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
