import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { UntitleduiLogoMinimal } from './untitledui-logo-minimal'

const meta: Meta<typeof UntitleduiLogoMinimal> = {
  title: 'Components/UntitleduiLogoMinimal',
  component: UntitleduiLogoMinimal,
  tags: [],
}

export default meta

type Story = StoryObj<typeof UntitleduiLogoMinimal>

/**
 * Default UntitleduiLogoMinimal
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
