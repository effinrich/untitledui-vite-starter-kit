import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { AvatarProfilePhoto } from './avatar-profile-photo'

const meta: Meta<typeof AvatarProfilePhoto> = {
  title: 'Components/AvatarProfilePhoto',
  component: AvatarProfilePhoto,
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
    }
},
  args: {
    size: "sm"
},
}

export default meta

type Story = StoryObj<typeof AvatarProfilePhoto>

/**
 * Default AvatarProfilePhoto
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
      <AvatarProfilePhoto size="sm" />
      <AvatarProfilePhoto size="md" />
      <AvatarProfilePhoto size="lg" />
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
