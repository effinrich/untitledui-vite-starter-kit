import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { PaginationLine } from './pagination-line'

const meta: Meta<typeof PaginationLine> = {
  title: 'Components/PaginationLine',
  component: PaginationLine,
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
    framed: {
        control: "boolean"
    }
},
  args: {
    size: "md",
    framed: false
},
}

export default meta

type Story = StoryObj<typeof PaginationLine>

/**
 * Default PaginationLine
 */
export const Default: Story = {
  args: {
    size: "md",
    framed: false
},
}

/**
 * All size variants
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <PaginationLine size="md" />
      <PaginationLine size="lg" />
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
