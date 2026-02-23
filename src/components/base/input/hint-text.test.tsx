import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { HintText } from './hint-text'


describe('HintText', () => {
  it('renders correctly', () => {
    render(<HintText>Test Content</HintText>)
    
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
})
