import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { MultiSelect } from './multi-select'

const meta: Meta<typeof MultiSelect> = {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  tags: [],
  argTypes: {
    hint: {
        control: "text"
    },
    label: {
        control: "text"
    },
    tooltip: {
        control: "text"
    },
    size: {
        control: {
            type: "radio",
            options: [
                "sm",
                "md"
            ]
        }
    },
    placeholder: {
        control: "text"
    },
    shortcut: {
        control: "boolean"
    },
    popoverClassName: {
        control: "text"
    },
    shortcutClassName: {
        control: "text"
    }
},
  args: {
    label: "Label",
    size: "sm",
    placeholder: "Enter text...",
    shortcut: false,
    children: "Content"
},
}

export default meta

type Story = StoryObj<typeof MultiSelect>

/**
 * Default MultiSelect
 */
export const Default: Story = {
  args: {
    label: "Label",
    size: "sm",
    placeholder: "Enter text...",
    shortcut: false,
    children: "Content"
},
}

/**
 * All size variants
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <MultiSelect size="sm">sm</MultiSelect>
      <MultiSelect size="md">md</MultiSelect>
    </div>
  ),
}


/**
 * Interactive test
 */
export const Interactive: Story = {
  args: {
    children: 'Click me',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const element = canvas.getByText(/click me/i)
    
    // Verify element renders
    await expect(element).toBeInTheDocument()
  },
}
