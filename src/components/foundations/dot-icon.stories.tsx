import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { DotIcon } from './dot-icon'

const meta: Meta<typeof DotIcon> = {
  title: 'Components/DotIcon',
  component: DotIcon,
  tags: [],
}

export default meta

type Story = StoryObj<typeof DotIcon>

/**
 * Default DotIcon
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
