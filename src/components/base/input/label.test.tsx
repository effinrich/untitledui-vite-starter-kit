import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Label } from './label'


describe('Label', () => {
  it('renders correctly', () => {
    render(<Label>Test Content</Label>)
    
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
})
