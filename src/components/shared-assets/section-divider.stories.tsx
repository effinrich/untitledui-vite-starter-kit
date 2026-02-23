import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { SectionDivider } from './section-divider'

const meta: Meta<typeof SectionDivider> = {
  title: 'Components/SectionDivider',
  component: SectionDivider,
  tags: [],
}

export default meta

type Story = StoryObj<typeof SectionDivider>

/**
 * Default SectionDivider
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
