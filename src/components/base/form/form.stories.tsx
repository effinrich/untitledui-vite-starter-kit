import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Form } from './form'

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  tags: [],
}

export default meta

type Story = StoryObj<typeof Form>

/**
 * Default Form
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
