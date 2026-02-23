import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { ThemeProvider } from './theme-provider'

const meta: Meta<typeof ThemeProvider> = {
  title: 'Components/ThemeProvider',
  component: ThemeProvider,
  tags: [],
  argTypes: {
    darkModeClass: {
        control: "text"
    },
    storageKey: {
        control: "text"
    }
},
  args: {
    children: "Content"
},
}

export default meta

type Story = StoryObj<typeof ThemeProvider>

/**
 * Default ThemeProvider
 */
export const Default: Story = {
  args: {
    children: "Content"
},
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
