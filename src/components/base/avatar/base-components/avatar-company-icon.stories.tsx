import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { AvatarCompanyIcon } from './avatar-company-icon'

const meta: Meta<typeof AvatarCompanyIcon> = {
  title: 'Components/AvatarCompanyIcon',
  component: AvatarCompanyIcon,
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
                "2xl"
            ]
        }
    },
    src: {
        control: "text"
    },
    alt: {
        control: "text"
    }
},
  args: {
    size: "xs"
},
}

export default meta

type Story = StoryObj<typeof AvatarCompanyIcon>

/**
 * Default AvatarCompanyIcon
 */
export const Default: Story = {
  args: {
    size: "xs"
},
}

/**
 * All size variants
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <AvatarCompanyIcon size="xs" />
      <AvatarCompanyIcon size="sm" />
      <AvatarCompanyIcon size="md" />
      <AvatarCompanyIcon size="lg" />
      <AvatarCompanyIcon size="xl" />
      <AvatarCompanyIcon size="2xl" />
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
