import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { NotFound } from './not-found'


describe('NotFound', () => {
  it('renders correctly', () => {
    render(<NotFound />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
