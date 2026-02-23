import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { ThemeProvider } from './theme-provider'


describe('ThemeProvider', () => {
  it('renders correctly', () => {
    render(<ThemeProvider>Test Content</ThemeProvider>)
    
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
})
