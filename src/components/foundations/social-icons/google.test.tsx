import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Google } from './google'


describe('Google', () => {
  it('renders correctly', () => {
    render(<Google />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
