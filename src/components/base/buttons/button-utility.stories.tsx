import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { ButtonUtility } from './button-utility'

const meta: Meta<typeof ButtonUtility> = {
  title: 'Components/ButtonUtility',
  component: ButtonUtility,
  tags: [],
}

export default meta

type Story = StoryObj<typeof ButtonUtility>

/**
 * Default ButtonUtility
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
