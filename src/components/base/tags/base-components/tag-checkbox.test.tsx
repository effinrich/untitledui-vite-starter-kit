import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { TagCheckbox } from './tag-checkbox'


describe('TagCheckbox', () => {
  it('renders correctly', () => {
    render(<TagCheckbox />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })

  it('renders sm size', () => {
    render(<TagCheckbox size="sm" />)
    
    // Size "sm" renders without error
  })

  it('renders md size', () => {
    render(<TagCheckbox size="md" />)
    
    // Size "md" renders without error
  })

  it('renders lg size', () => {
    render(<TagCheckbox size="lg" />)
    
    // Size "lg" renders without error
  })
})
