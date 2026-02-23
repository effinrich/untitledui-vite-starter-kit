import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { SocialButton } from './social-button'

const meta: Meta<typeof SocialButton> = {
  title: 'Components/SocialButton',
  component: SocialButton,
  tags: [],
}

export default meta

type Story = StoryObj<typeof SocialButton>

/**
 * Default SocialButton
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
