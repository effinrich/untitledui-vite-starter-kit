import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { UntitleduiLogo } from './untitledui-logo'

const meta: Meta<typeof UntitleduiLogo> = {
  title: 'Components/UntitleduiLogo',
  component: UntitleduiLogo,
  tags: [],
}

export default meta

type Story = StoryObj<typeof UntitleduiLogo>

/**
 * Default UntitleduiLogo
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
