import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { NavMenuItem } from './nav-menu-item'


describe('NavMenuItem', () => {
  it('renders correctly', () => {
    render(<NavMenuItem />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
