import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { HomeScreen } from './home-screen'

const meta: Meta<typeof HomeScreen> = {
  title: 'Components/HomeScreen',
  component: HomeScreen,
  tags: [],
}

export default meta

type Story = StoryObj<typeof HomeScreen>

/**
 * Default HomeScreen
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
