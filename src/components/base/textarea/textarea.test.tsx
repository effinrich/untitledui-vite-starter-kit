import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Textarea } from './textarea'


describe('Textarea', () => {
  it('renders correctly', () => {
    render(<Textarea />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
