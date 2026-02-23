import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Cell } from './cell'

const meta: Meta<typeof Cell> = {
  title: 'Components/Cell',
  component: Cell,
  tags: [],
}

export default meta

type Story = StoryObj<typeof Cell>

/**
 * Default Cell
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
