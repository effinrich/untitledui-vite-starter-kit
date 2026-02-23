import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Illustrations } from './index'


describe('Illustrations', () => {
  it('renders correctly', () => {
    render(<Illustrations />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
