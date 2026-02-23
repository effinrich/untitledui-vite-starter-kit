import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { X } from './x'


describe('X', () => {
  it('renders correctly', () => {
    render(<X />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
