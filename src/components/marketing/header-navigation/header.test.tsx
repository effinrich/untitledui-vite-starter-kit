import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Header } from './header'


describe('Header', () => {
  it('renders correctly', () => {
    render(<Header />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
