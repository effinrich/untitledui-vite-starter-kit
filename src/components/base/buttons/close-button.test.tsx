import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { CloseButton } from './close-button'


describe('CloseButton', () => {
  it('renders correctly', () => {
    render(<CloseButton />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })

  it('renders xs size', () => {
    render(<CloseButton size="xs" />)
    
    // Size "xs" renders without error
  })

  it('renders sm size', () => {
    render(<CloseButton size="sm" />)
    
    // Size "sm" renders without error
  })

  it('renders md size', () => {
    render(<CloseButton size="md" />)
    
    // Size "md" renders without error
  })

  it('renders lg size', () => {
    render(<CloseButton size="lg" />)
    
    // Size "lg" renders without error
  })
})
