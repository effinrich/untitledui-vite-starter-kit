import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { NavList } from './nav-list'

const meta: Meta<typeof NavList> = {
  title: 'Components/NavList',
  component: NavList,
  tags: [],
  argTypes: {
    activeUrl: {
        control: "text"
    },
    className: {
        control: "text"
    }
},
}

export default meta

type Story = StoryObj<typeof NavList>

/**
 * Default NavList
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
