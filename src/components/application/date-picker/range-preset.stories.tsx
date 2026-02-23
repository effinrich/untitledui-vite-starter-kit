import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { RangePreset } from './range-preset'

const meta: Meta<typeof RangePreset> = {
  title: 'Components/RangePreset',
  component: RangePreset,
  tags: [],
}

export default meta

type Story = StoryObj<typeof RangePreset>

/**
 * Default RangePreset
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
