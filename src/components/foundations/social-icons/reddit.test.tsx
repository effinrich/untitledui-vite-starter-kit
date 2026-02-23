import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Reddit } from './reddit'


describe('Reddit', () => {
  it('renders correctly', () => {
    render(<Reddit />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
