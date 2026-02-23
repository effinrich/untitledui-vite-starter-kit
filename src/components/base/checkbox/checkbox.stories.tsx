import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Checkbox } from './checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
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
    }
},
  args: {
    size: "sm"
},
}

export default meta

type Story = StoryObj<typeof Checkbox>

/**
 * Default Checkbox
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
      <Checkbox size="sm" />
      <Checkbox size="md" />
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
