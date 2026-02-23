import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Select } from './select'


describe('Select', () => {
  it('renders correctly', () => {
    render(<Select>Test Content</Select>)
    
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
})
