import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { FileUploadBase } from './file-upload-base'

const meta: Meta<typeof FileUploadBase> = {
  title: 'Components/FileUploadBase',
  component: FileUploadBase,
  tags: [],
}

export default meta

type Story = StoryObj<typeof FileUploadBase>

/**
 * Default FileUploadBase
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
