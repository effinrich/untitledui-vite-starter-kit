import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { TagCloseX } from './tag-close-x'


describe('TagCloseX', () => {
  it('renders correctly', () => {
    render(<TagCloseX />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })

  it('renders sm size', () => {
    render(<TagCloseX size="sm" />)
    
    // Size "sm" renders without error
  })

  it('renders md size', () => {
    render(<TagCloseX size="md" />)
    
    // Size "md" renders without error
  })

  it('renders lg size', () => {
    render(<TagCloseX size="lg" />)
    
    // Size "lg" renders without error
  })
})
