import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Slider } from './slider'


describe('Slider', () => {
  it('renders correctly', () => {
    render(<Slider />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
