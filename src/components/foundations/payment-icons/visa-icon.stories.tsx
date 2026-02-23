import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import VisaIcon from './visa-icon'

const meta: Meta<typeof VisaIcon> = {
  title: 'Components/VisaIcon',
  component: VisaIcon,
  tags: [],
}

export default meta

type Story = StoryObj<typeof VisaIcon>

/**
 * Default VisaIcon
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
