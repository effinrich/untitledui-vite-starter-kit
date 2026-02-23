import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Tumblr } from './tumblr'


describe('Tumblr', () => {
  it('renders correctly', () => {
    render(<Tumblr />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
