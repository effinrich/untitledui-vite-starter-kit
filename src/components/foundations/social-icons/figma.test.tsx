import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Figma } from './figma'


describe('Figma', () => {
  it('renders correctly', () => {
    render(<Figma />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
