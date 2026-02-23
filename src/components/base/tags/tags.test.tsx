import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Tags } from './tags'


describe('Tags', () => {
  it('renders correctly', () => {
    render(<Tags />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
