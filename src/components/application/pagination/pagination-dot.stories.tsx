import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { PaginationDot } from './pagination-dot'

const meta: Meta<typeof PaginationDot> = {
  title: 'Components/PaginationDot',
  component: PaginationDot,
  tags: [],
  argTypes: {
    size: {
        control: {
            type: "radio",
            options: [
                "md",
                "lg"
            ]
        }
    },
    isBrand: {
        control: "boolean"
    },
    framed: {
        control: "boolean"
    }
},
  args: {
    size: "md",
    isBrand: false,
    framed: false
},
}

export default meta

type Story = StoryObj<typeof PaginationDot>

/**
 * Default PaginationDot
 */
export const Default: Story = {
  args: {
    size: "md",
    isBrand: false,
    framed: false
},
}

/**
 * All size variants
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <PaginationDot size="md" />
      <PaginationDot size="lg" />
    </div>
  ),
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
