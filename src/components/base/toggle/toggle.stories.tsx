import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Toggle } from './toggle'

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: [],
  argTypes: {
    size: {
        control: {
            type: "radio",
            options: [
                "sm",
                "md"
            ]
        }
    },
    label: {
        control: "text"
    },
    slim: {
        control: "boolean"
    }
},
  args: {
    size: "sm",
    label: "Label",
    slim: false
},
}

export default meta

type Story = StoryObj<typeof Toggle>

/**
 * Default Toggle
 */
export const Default: Story = {
  args: {
    size: "sm",
    label: "Label",
    slim: false
},
}

/**
 * All size variants
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Toggle size="sm" />
      <Toggle size="md" />
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
