import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Toggle } from './toggle'


describe('Toggle', () => {
  it('renders correctly', () => {
    render(<Toggle />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })

  it('renders sm size', () => {
    render(<Toggle size="sm" />)
    
    // Size "sm" renders without error
  })

  it('renders md size', () => {
    render(<Toggle size="md" />)
    
    // Size "md" renders without error
  })
})
