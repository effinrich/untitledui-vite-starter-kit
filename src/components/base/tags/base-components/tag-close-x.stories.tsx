import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { TagCloseX } from './tag-close-x'

const meta: Meta<typeof TagCloseX> = {
  title: 'Components/TagCloseX',
  component: TagCloseX,
  tags: [],
  argTypes: {
    size: {
        control: {
            type: "radio",
            options: [
                "sm",
                "md",
                "lg"
            ]
        }
    },
    className: {
        control: "text"
    }
},
  args: {
    size: "sm"
},
}

export default meta

type Story = StoryObj<typeof TagCloseX>

/**
 * Default TagCloseX
 */
export const Default: Story = {
  args: {
    size: "sm"
},
}

/**
 * All size variants
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <TagCloseX size="sm" />
      <TagCloseX size="md" />
      <TagCloseX size="lg" />
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
