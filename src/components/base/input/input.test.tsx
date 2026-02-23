import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Input } from './input'


describe('Input', () => {
  it('renders correctly', () => {
    render(<Input />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
