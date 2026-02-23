import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Pagination } from './pagination'

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: [],
  argTypes: {
    rounded: {
        control: "boolean"
    }
},
  args: {
    rounded: false
},
}

export default meta

type Story = StoryObj<typeof Pagination>

/**
 * Default Pagination
 */
export const Default: Story = {
  args: {
    rounded: false
},
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
