import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Facebook } from './facebook'


describe('Facebook', () => {
  it('renders correctly', () => {
    render(<Facebook />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
