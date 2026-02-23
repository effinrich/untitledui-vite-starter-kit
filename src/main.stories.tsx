import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Main } from './main'
import { withRouter } from 'storybook-addon-remix-react-router'

const meta: Meta<typeof Main> = {
  title: 'Components/Main',
  component: Main,
  tags: [],
  decorators: [withRouter],
}

export default meta

type Story = StoryObj<typeof Main>

/**
 * Default Main
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
