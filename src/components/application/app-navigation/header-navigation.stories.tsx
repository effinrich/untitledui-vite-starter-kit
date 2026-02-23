import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { HeaderNavigation } from './header-navigation'

const meta: Meta<typeof HeaderNavigation> = {
  title: 'Components/HeaderNavigation',
  component: HeaderNavigation,
  tags: [],
}

export default meta

type Story = StoryObj<typeof HeaderNavigation>

/**
 * Default HeaderNavigation
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
