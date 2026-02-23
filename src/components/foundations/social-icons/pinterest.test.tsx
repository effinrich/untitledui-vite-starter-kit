import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Pinterest } from './pinterest'


describe('Pinterest', () => {
  it('renders correctly', () => {
    render(<Pinterest />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
