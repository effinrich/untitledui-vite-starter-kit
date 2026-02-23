import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { BackgroundPatterns } from './index'


describe('BackgroundPatterns', () => {
  it('renders correctly', () => {
    render(<BackgroundPatterns />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
