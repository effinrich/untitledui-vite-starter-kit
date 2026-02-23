import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Button } from './button'


describe('Button', () => {
  it('renders correctly', () => {
    render(<Button />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
