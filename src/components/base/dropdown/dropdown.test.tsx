import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Dropdown } from './dropdown'


describe('Dropdown', () => {
  it('renders correctly', () => {
    render(<Dropdown />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
