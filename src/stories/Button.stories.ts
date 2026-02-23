import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: [],
  argTypes: {
    primary: {
        control: "boolean"
    },
    backgroundColor: {
        control: "text"
    },
    size: {
        control: {
            type: "radio",
            options: [
                "small",
                "medium",
                "large"
            ]
        }
    },
    label: {
        control: "text"
    }
},
  args: {
    primary: false,
    size: "small",
    label: "Label"
},
}

export default meta

type Story = StoryObj<typeof Button>

/**
 * Default Button
 */
export const Default: Story = {
  args: {
    primary: false,
    size: "small",
    label: "Label"
},
}

/**
 * All size variants
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button size="small" />
      <Button size="medium" />
      <Button size="large" />
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
