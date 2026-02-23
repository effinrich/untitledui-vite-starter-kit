import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { NavList } from './nav-list'


describe('NavList', () => {
  it('renders correctly', () => {
    render(<NavList items="test" />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
