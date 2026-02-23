import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { AvatarLabelGroup } from './avatar-label-group'

const meta: Meta<typeof AvatarLabelGroup> = {
  title: 'Components/AvatarLabelGroup',
  component: AvatarLabelGroup,
  tags: [],
  argTypes: {
    size: {
        control: {
            type: "radio",
            options: [
                "sm",
                "md",
                "lg",
                "xl"
            ]
        }
    }
},
  args: {
    size: "sm"
},
}

export default meta

type Story = StoryObj<typeof AvatarLabelGroup>

/**
 * Default AvatarLabelGroup
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
      <AvatarLabelGroup size="sm" />
      <AvatarLabelGroup size="md" />
      <AvatarLabelGroup size="lg" />
      <AvatarLabelGroup size="xl" />
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
