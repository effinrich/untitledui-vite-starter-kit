import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { SocialLogos } from './social-logos'

const meta: Meta<typeof SocialLogos> = {
  title: 'Components/SocialLogos',
  component: SocialLogos,
  tags: [],
}

export default meta

type Story = StoryObj<typeof SocialLogos>

/**
 * Default SocialLogos
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
