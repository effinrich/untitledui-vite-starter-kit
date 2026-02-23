import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Box } from './box'


describe('Box', () => {
  it('renders correctly', () => {
    render(<Box />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
