import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Instagram } from './instagram'


describe('Instagram', () => {
  it('renders correctly', () => {
    render(<Instagram />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
