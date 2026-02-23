import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Pagination } from './pagination'


describe('Pagination', () => {
  it('renders correctly', () => {
    render(<Pagination />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
