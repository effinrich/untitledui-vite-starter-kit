import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Cell } from './cell'


describe('Cell', () => {
  it('renders correctly', () => {
    render(<Cell />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
