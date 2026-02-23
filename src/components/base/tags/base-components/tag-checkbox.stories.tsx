import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { TagCheckbox } from './tag-checkbox'

const meta: Meta<typeof TagCheckbox> = {
  title: 'Components/TagCheckbox',
  component: TagCheckbox,
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
    },
    className: {
        control: "text"
    },
    isFocused: {
        control: "boolean"
    },
    isSelected: {
        control: "boolean"
    },
    isDisabled: {
        control: "boolean"
    }
},
  args: {
    size: "sm",
    isFocused: false,
    isSelected: false,
    isDisabled: false
},
}

export default meta

type Story = StoryObj<typeof TagCheckbox>

/**
 * Default TagCheckbox
 */
export const Default: Story = {
  args: {
    size: "sm",
    isFocused: false,
    isSelected: false,
    isDisabled: false
},
}

/**
 * All size variants
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <TagCheckbox size="sm" />
      <TagCheckbox size="md" />
      <TagCheckbox size="lg" />
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
