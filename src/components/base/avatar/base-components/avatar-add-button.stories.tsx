import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { AvatarAddButton } from './avatar-add-button'

const meta: Meta<typeof AvatarAddButton> = {
  title: 'Components/AvatarAddButton',
  component: AvatarAddButton,
  tags: [],
  argTypes: {
    size: {
        control: {
            type: "radio",
            options: [
                "xs",
                "sm",
                "md"
            ]
        }
    },
    title: {
        control: "text"
    },
    className: {
        control: "text"
    }
},
  args: {
    size: "xs",
    title: "Title"
},
}

export default meta

type Story = StoryObj<typeof AvatarAddButton>

/**
 * Default AvatarAddButton
 */
export const Default: Story = {
  args: {
    size: "xs",
    title: "Title"
},
}

/**
 * All size variants
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <AvatarAddButton size="xs" />
      <AvatarAddButton size="sm" />
      <AvatarAddButton size="md" />
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
