import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Table } from './table'

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: [],
}

export default meta

type Story = StoryObj<typeof Table>

/**
 * Default Table
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
