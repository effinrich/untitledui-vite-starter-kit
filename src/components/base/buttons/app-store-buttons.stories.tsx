import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { AppStoreButtons } from './app-store-buttons'

const meta: Meta<typeof AppStoreButtons> = {
  title: 'Components/AppStoreButtons',
  component: AppStoreButtons,
  tags: [],
}

export default meta

type Story = StoryObj<typeof AppStoreButtons>

/**
 * Default AppStoreButtons
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
