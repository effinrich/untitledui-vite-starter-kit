import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { VerifiedTick } from './verified-tick'

const meta: Meta<typeof VerifiedTick> = {
  title: 'Components/VerifiedTick',
  component: VerifiedTick,
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
                "2xl",
                "3xl",
                "4xl"
            ]
        }
    },
    className: {
        control: "text"
    }
},
  args: {
    size: "xs"
},
}

export default meta

type Story = StoryObj<typeof VerifiedTick>

/**
 * Default VerifiedTick
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
      <VerifiedTick size="xs" />
      <VerifiedTick size="sm" />
      <VerifiedTick size="md" />
      <VerifiedTick size="lg" />
      <VerifiedTick size="xl" />
      <VerifiedTick size="2xl" />
      <VerifiedTick size="3xl" />
      <VerifiedTick size="4xl" />
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
