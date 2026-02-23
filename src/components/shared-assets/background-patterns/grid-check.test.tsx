import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { GridCheck } from './grid-check'


describe('GridCheck', () => {
  it('renders correctly', () => {
    render(<GridCheck />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })

  it('renders sm size', () => {
    render(<GridCheck size="sm" />)
    
    // Size "sm" renders without error
  })

  it('renders md size', () => {
    render(<GridCheck size="md" />)
    
    // Size "md" renders without error
  })
})
