import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Grid } from './grid'


describe('Grid', () => {
  it('renders correctly', () => {
    render(<Grid />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })

  it('renders sm size', () => {
    render(<Grid size="sm" />)
    
    // Size "sm" renders without error
  })

  it('renders md size', () => {
    render(<Grid size="md" />)
    
    // Size "md" renders without error
  })

  it('renders lg size', () => {
    render(<Grid size="lg" />)
    
    // Size "lg" renders without error
  })
})
