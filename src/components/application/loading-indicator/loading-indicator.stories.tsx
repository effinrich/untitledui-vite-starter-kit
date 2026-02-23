import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { LoadingIndicator } from './loading-indicator'

const meta: Meta<typeof LoadingIndicator> = {
  title: 'Components/LoadingIndicator',
  component: LoadingIndicator,
  tags: [],
  argTypes: {
    type: {
        control: {
            type: "radio",
            options: [
                "line-simple",
                "line-spinner",
                "dot-circle"
            ]
        }
    },
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
    },
    label: {
        control: "text"
    }
},
  args: {
    type: "line-simple",
    size: "sm",
    label: "Label"
},
}

export default meta

type Story = StoryObj<typeof LoadingIndicator>

/**
 * Default LoadingIndicator
 */
export const Default: Story = {
  args: {
    type: "line-simple",
    size: "sm",
    label: "Label"
},
}

/**
 * All size variants
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <LoadingIndicator size="sm" />
      <LoadingIndicator size="md" />
      <LoadingIndicator size="lg" />
      <LoadingIndicator size="xl" />
    </div>
  ),
}

/**
 * All style variants
 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <LoadingIndicator type="line-simple" />
      <LoadingIndicator type="line-spinner" />
      <LoadingIndicator type="dot-circle" />
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
