import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Signal } from './signal'


describe('Signal', () => {
  it('renders correctly', () => {
    render(<Signal />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
