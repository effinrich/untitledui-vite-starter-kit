import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { ButtonGroup } from './button-group'


describe('ButtonGroup', () => {
  it('renders correctly', () => {
    render(<ButtonGroup />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
