import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { NotFound } from './not-found'
import { withRouter } from 'storybook-addon-remix-react-router'

const meta: Meta<typeof NotFound> = {
  title: 'Components/NotFound',
  component: NotFound,
  tags: [],
  decorators: [withRouter],
}

export default meta

type Story = StoryObj<typeof NotFound>

/**
 * Default NotFound
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
