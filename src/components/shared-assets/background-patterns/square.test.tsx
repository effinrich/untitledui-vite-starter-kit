import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Square } from './square'


describe('Square', () => {
  it('renders correctly', () => {
    render(<Square />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })

  it('renders sm size', () => {
    render(<Square size="sm" />)
    
    // Size "sm" renders without error
  })

  it('renders md size', () => {
    render(<Square size="md" />)
    
    // Size "md" renders without error
  })

  it('renders lg size', () => {
    render(<Square size="lg" />)
    
    // Size "lg" renders without error
  })
})
