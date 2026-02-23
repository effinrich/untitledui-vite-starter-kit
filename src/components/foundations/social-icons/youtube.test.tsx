import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Youtube } from './youtube'


describe('Youtube', () => {
  it('renders correctly', () => {
    render(<Youtube />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
