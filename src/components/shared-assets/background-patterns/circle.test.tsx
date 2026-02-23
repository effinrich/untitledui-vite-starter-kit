import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Circle } from './circle'


describe('Circle', () => {
  it('renders correctly', () => {
    render(<Circle />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })

  it('renders sm size', () => {
    render(<Circle size="sm" />)
    
    // Size "sm" renders without error
  })

  it('renders md size', () => {
    render(<Circle size="md" />)
    
    // Size "md" renders without error
  })

  it('renders lg size', () => {
    render(<Circle size="lg" />)
    
    // Size "lg" renders without error
  })
})
