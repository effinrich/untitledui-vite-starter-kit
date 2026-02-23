import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Popover } from './popover'


describe('Popover', () => {
  it('renders correctly', () => {
    render(<Popover size="sm" />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })

  it('renders sm size', () => {
    render(<Popover size="sm" />)
    
    // Size "sm" renders without error
  })

  it('renders md size', () => {
    render(<Popover size="md" />)
    
    // Size "md" renders without error
  })
})
