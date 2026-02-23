import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { PaginationLine } from './pagination-line'


describe('PaginationLine', () => {
  it('renders correctly', () => {
    render(<PaginationLine />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })

  it('renders md size', () => {
    render(<PaginationLine size="md" />)
    
    // Size "md" renders without error
  })

  it('renders lg size', () => {
    render(<PaginationLine size="lg" />)
    
    // Size "lg" renders without error
  })
})
