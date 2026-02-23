import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Box } from './box'

const meta: Meta<typeof Box> = {
  title: 'Components/Box',
  component: Box,
  tags: [],
}

export default meta

type Story = StoryObj<typeof Box>

/**
 * Default Box
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
