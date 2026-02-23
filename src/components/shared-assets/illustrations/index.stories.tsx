import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Illustrations } from './'

const meta: Meta<typeof Illustrations> = {
  title: 'Components/Illustrations',
  component: Illustrations,
  tags: [],
}

export default meta

type Story = StoryObj<typeof Illustrations>

/**
 * Default Illustrations
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
