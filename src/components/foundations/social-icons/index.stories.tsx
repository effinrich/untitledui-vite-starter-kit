import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import SocialIcons from './'

const meta: Meta<typeof SocialIcons> = {
  title: 'Components/SocialIcons',
  component: SocialIcons,
  tags: [],
}

export default meta

type Story = StoryObj<typeof SocialIcons>

/**
 * Default SocialIcons
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
