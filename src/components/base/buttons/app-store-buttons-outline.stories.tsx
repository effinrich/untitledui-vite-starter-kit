import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { AppStoreButtonsOutline } from './app-store-buttons-outline'

const meta: Meta<typeof AppStoreButtonsOutline> = {
  title: 'Components/AppStoreButtonsOutline',
  component: AppStoreButtonsOutline,
  tags: [],
}

export default meta

type Story = StoryObj<typeof AppStoreButtonsOutline>

/**
 * Default AppStoreButtonsOutline
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
