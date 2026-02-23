import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Checkbox } from './checkbox'


describe('Checkbox', () => {
  it('renders correctly', () => {
    render(<Checkbox />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })

  it('renders sm size', () => {
    render(<Checkbox size="sm" />)
    
    // Size "sm" renders without error
  })

  it('renders md size', () => {
    render(<Checkbox size="md" />)
    
    // Size "md" renders without error
  })
})
