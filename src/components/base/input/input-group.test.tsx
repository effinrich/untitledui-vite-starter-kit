import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { InputGroup } from './input-group'


describe('InputGroup', () => {
  it('renders correctly', () => {
    render(<InputGroup />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
