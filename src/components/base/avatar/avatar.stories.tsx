import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Avatar } from './avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: [],
  argTypes: {
    className: {
        control: "text"
    },
    alt: {
        control: "text"
    },
    contrastBorder: {
        control: "boolean"
    },
    status: {
        control: {
            type: "radio",
            options: [
                "online",
                "offline"
            ]
        }
    },
    verified: {
        control: "boolean"
    },
    initials: {
        control: "text"
    }
},
  args: {
    contrastBorder: false,
    status: "online",
    verified: false
},
}

export default meta

type Story = StoryObj<typeof Avatar>

/**
 * Default Avatar
 */
export const Default: Story = {
  args: {
    contrastBorder: false,
    status: "online",
    verified: false
},
}

/**
 * All style variants
 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Avatar status="online" />
      <Avatar status="offline" />
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
