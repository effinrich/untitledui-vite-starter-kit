import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { RatingBadge } from './rating-badge'


describe('RatingBadge', () => {
  it('renders correctly', () => {
    render(<RatingBadge />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
