import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { NavItemButton } from './nav-item-button'


describe('NavItemButton', () => {
  it('renders correctly', () => {
    render(<NavItemButton label="Test label" icon="Test icon" />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
