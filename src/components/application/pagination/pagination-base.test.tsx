import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { PaginationBase } from './pagination-base'


describe('PaginationBase', () => {
  it('renders correctly', () => {
    render(<PaginationBase />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
