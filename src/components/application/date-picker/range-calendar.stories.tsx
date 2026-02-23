import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { RangeCalendar } from './range-calendar'

const meta: Meta<typeof RangeCalendar> = {
  title: 'Components/RangeCalendar',
  component: RangeCalendar,
  tags: [],
  argTypes: {
    highlightedDates: {
        control: "date"
    },
    presets: {
        control: "object"
    }
},
}

export default meta

type Story = StoryObj<typeof RangeCalendar>

/**
 * Default RangeCalendar
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
