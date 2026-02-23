import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Page } from './Page'

const meta: Meta<typeof Page> = {
  title: 'Components/Page',
  component: Page,
  tags: [],
}

export default meta

type Story = StoryObj<typeof Page>

/**
 * Default Page
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
