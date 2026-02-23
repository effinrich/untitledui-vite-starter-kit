import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { SelectNative } from './select-native'

const meta: Meta<typeof SelectNative> = {
  title: 'Components/SelectNative',
  component: SelectNative,
  tags: [],
}

export default meta

type Story = StoryObj<typeof SelectNative>

/**
 * Default SelectNative
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
