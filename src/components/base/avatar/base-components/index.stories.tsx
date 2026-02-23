import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { BaseComponents } from './'

const meta: Meta<typeof BaseComponents> = {
  title: 'Components/BaseComponents',
  component: BaseComponents,
  tags: [],
}

export default meta

type Story = StoryObj<typeof BaseComponents>

/**
 * Default BaseComponents
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
