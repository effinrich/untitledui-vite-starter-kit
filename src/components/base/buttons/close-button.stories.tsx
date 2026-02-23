import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { CloseButton } from './close-button'

const meta: Meta<typeof CloseButton> = {
  title: 'Components/CloseButton',
  component: CloseButton,
  tags: [],
  argTypes: {
    theme: {
        control: {
            type: "radio",
            options: [
                "light",
                "dark"
            ]
        }
    },
    size: {
        control: {
            type: "radio",
            options: [
                "xs",
                "sm",
                "md",
                "lg"
            ]
        }
    },
    label: {
        control: "text"
    }
},
  args: {
    theme: "light",
    size: "xs",
    label: "Label"
},
}

export default meta

type Story = StoryObj<typeof CloseButton>

/**
 * Default CloseButton
 */
export const Default: Story = {
  args: {
    theme: "light",
    size: "xs",
    label: "Label"
},
}

/**
 * All size variants
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <CloseButton size="xs" />
      <CloseButton size="sm" />
      <CloseButton size="md" />
      <CloseButton size="lg" />
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
