import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { LoadingIndicator } from './loading-indicator'


describe('LoadingIndicator', () => {
  it('renders correctly', () => {
    render(<LoadingIndicator />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })

  it('renders sm size', () => {
    render(<LoadingIndicator size="sm" />)
    
    // Size "sm" renders without error
  })

  it('renders md size', () => {
    render(<LoadingIndicator size="md" />)
    
    // Size "md" renders without error
  })

  it('renders lg size', () => {
    render(<LoadingIndicator size="lg" />)
    
    // Size "lg" renders without error
  })

  it('renders xl size', () => {
    render(<LoadingIndicator size="xl" />)
    
    // Size "xl" renders without error
  })
})
