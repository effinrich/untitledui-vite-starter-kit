import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { NavItem } from './nav-item'


describe('NavItem', () => {
  it('renders correctly', () => {
    render(<NavItem />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
