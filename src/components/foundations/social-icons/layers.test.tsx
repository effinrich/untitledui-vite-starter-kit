import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Layers } from './layers'


describe('Layers', () => {
  it('renders correctly', () => {
    render(<Layers />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
