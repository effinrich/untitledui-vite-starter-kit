import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { SimpleCircle } from './simple-circle'

const meta: Meta<typeof SimpleCircle> = {
  title: 'Components/SimpleCircle',
  component: SimpleCircle,
  tags: [],
}

export default meta

type Story = StoryObj<typeof SimpleCircle>

/**
 * Default SimpleCircle
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
