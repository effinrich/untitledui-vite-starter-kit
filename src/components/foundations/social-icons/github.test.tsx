import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Github } from './github'


describe('Github', () => {
  it('renders correctly', () => {
    render(<Github />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
