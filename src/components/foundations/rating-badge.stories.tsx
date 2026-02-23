import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { RatingBadge } from './rating-badge'

const meta: Meta<typeof RatingBadge> = {
  title: 'Components/RatingBadge',
  component: RatingBadge,
  tags: [],
  argTypes: {
    title: {
        control: "text"
    },
    subtitle: {
        control: "text"
    },
    rating: {
        control: "number"
    },
    theme: {
        control: {
            type: "radio",
            options: [
                "light",
                "dark"
            ]
        }
    }
},
  args: {
    title: "Title",
    rating: 0,
    theme: "light"
},
}

export default meta

type Story = StoryObj<typeof RatingBadge>

/**
 * Default RatingBadge
 */
export const Default: Story = {
  args: {
    title: "Title",
    rating: 0,
    theme: "light"
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
