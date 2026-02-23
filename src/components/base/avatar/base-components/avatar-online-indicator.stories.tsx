import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { AvatarOnlineIndicator } from './avatar-online-indicator'

const meta: Meta<typeof AvatarOnlineIndicator> = {
  title: 'Components/AvatarOnlineIndicator',
  component: AvatarOnlineIndicator,
  tags: [],
  argTypes: {
    size: {
        control: {
            type: "select",
            options: [
                "xs",
                "sm",
                "md",
                "lg",
                "xl",
                "2xl",
                "3xl",
                "4xl"
            ]
        }
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
    className: {
        control: "text"
    }
},
  args: {
    size: "xs",
    status: "online"
},
}

export default meta

type Story = StoryObj<typeof AvatarOnlineIndicator>

/**
 * Default AvatarOnlineIndicator
 */
export const Default: Story = {
  args: {
    size: "xs",
    status: "online"
},
}

/**
 * All size variants
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <AvatarOnlineIndicator size="xs" />
      <AvatarOnlineIndicator size="sm" />
      <AvatarOnlineIndicator size="md" />
      <AvatarOnlineIndicator size="lg" />
      <AvatarOnlineIndicator size="xl" />
      <AvatarOnlineIndicator size="2xl" />
      <AvatarOnlineIndicator size="3xl" />
      <AvatarOnlineIndicator size="4xl" />
    </div>
  ),
}

/**
 * All style variants
 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <AvatarOnlineIndicator status="online" />
      <AvatarOnlineIndicator status="offline" />
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
