import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Twitter } from './twitter'


describe('Twitter', () => {
  it('renders correctly', () => {
    render(<Twitter />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
