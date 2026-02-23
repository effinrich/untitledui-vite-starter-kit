import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { PaginationBase } from './pagination-base'

const meta: Meta<typeof PaginationBase> = {
  title: 'Components/PaginationBase',
  component: PaginationBase,
  tags: [],
}

export default meta

type Story = StoryObj<typeof PaginationBase>

/**
 * Default PaginationBase
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
