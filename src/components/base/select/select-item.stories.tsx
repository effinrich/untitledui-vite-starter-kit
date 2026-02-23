import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { SelectItem } from './select-item'

const meta: Meta<typeof SelectItem> = {
  title: 'Components/SelectItem',
  component: SelectItem,
  tags: [],
}

export default meta

type Story = StoryObj<typeof SelectItem>

/**
 * Default SelectItem
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
