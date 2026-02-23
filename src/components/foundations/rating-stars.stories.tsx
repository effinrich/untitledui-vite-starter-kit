import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { RatingStars } from './rating-stars'

const meta: Meta<typeof RatingStars> = {
  title: 'Components/RatingStars',
  component: RatingStars,
  tags: [],
  argTypes: {
    rating: {
        control: "number"
    },
    stars: {
        control: "number"
    },
    starClassName: {
        control: "text"
    }
},
  args: {
    rating: 0,
    stars: 0
},
}

export default meta

type Story = StoryObj<typeof RatingStars>

/**
 * Default RatingStars
 */
export const Default: Story = {
  args: {
    rating: 0,
    stars: 0
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
