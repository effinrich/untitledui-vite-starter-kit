import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { RouterProvider } from './router-provider'
import { withRouter } from 'storybook-addon-remix-react-router'

const meta: Meta<typeof RouterProvider> = {
  title: 'Components/RouterProvider',
  component: RouterProvider,
  tags: [],
  decorators: [withRouter],
}

export default meta

type Story = StoryObj<typeof RouterProvider>

/**
 * Default RouterProvider
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
