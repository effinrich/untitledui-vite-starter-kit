import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Header } from './header'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: [],
  argTypes: {
    isFullWidth: {
        control: "boolean"
    },
    isFloating: {
        control: "boolean"
    },
    className: {
        control: "text"
    }
},
  args: {
    isFullWidth: false,
    isFloating: false
},
}

export default meta

type Story = StoryObj<typeof Header>

/**
 * Default Header
 */
export const Default: Story = {
  args: {
    isFullWidth: false,
    isFloating: false
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
