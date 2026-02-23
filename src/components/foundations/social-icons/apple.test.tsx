import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Apple } from './apple'


describe('Apple', () => {
  it('renders correctly', () => {
    render(<Apple />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
