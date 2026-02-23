import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { UnionPayIcon } from './union-pay-icon'


describe('UnionPayIcon', () => {
  it('renders correctly', () => {
    render(<UnionPayIcon />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
