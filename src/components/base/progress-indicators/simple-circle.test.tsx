import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { SimpleCircle } from './simple-circle'


describe('SimpleCircle', () => {
  it('renders correctly', () => {
    render(<SimpleCircle />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
