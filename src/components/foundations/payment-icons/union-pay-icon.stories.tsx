import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import UnionPayIcon from './union-pay-icon'

const meta: Meta<typeof UnionPayIcon> = {
  title: 'Components/UnionPayIcon',
  component: UnionPayIcon,
  tags: [],
}

export default meta

type Story = StoryObj<typeof UnionPayIcon>

/**
 * Default UnionPayIcon
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
