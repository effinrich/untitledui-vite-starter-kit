import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Grid } from './grid'

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
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
    }
},
  args: {
    size: "sm"
},
}

export default meta

type Story = StoryObj<typeof Grid>

/**
 * Default Grid
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
      <Grid size="sm" />
      <Grid size="md" />
      <Grid size="lg" />
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
