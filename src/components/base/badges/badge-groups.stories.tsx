import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { BadgeGroups } from './badge-groups'

const meta: Meta<typeof BadgeGroups> = {
  title: 'Components/BadgeGroups',
  component: BadgeGroups,
  tags: [],
}

export default meta

type Story = StoryObj<typeof BadgeGroups>

/**
 * Default BadgeGroups
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
