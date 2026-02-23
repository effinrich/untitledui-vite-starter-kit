import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Documents } from './documents'


describe('Documents', () => {
  it('renders correctly', () => {
    render(<Documents />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
