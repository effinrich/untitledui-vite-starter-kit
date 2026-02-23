import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { FileUploadTrigger } from './file-upload-trigger'

const meta: Meta<typeof FileUploadTrigger> = {
  title: 'Components/FileUploadTrigger',
  component: FileUploadTrigger,
  tags: [],
}

export default meta

type Story = StoryObj<typeof FileUploadTrigger>

/**
 * Default FileUploadTrigger
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
