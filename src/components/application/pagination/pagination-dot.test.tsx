import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { PaginationDot } from './pagination-dot'


describe('PaginationDot', () => {
  it('renders correctly', () => {
    render(<PaginationDot />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })

  it('renders md size', () => {
    render(<PaginationDot size="md" />)
    
    // Size "md" renders without error
  })

  it('renders lg size', () => {
    render(<PaginationDot size="lg" />)
    
    // Size "lg" renders without error
  })
})
