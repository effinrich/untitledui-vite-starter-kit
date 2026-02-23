import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { RatingStars } from './rating-stars'


describe('RatingStars', () => {
  it('renders correctly', () => {
    render(<RatingStars />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
