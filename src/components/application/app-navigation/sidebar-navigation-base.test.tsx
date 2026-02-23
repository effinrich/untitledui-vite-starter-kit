import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { SidebarNavigationBase } from './sidebar-navigation-base'


describe('SidebarNavigationBase', () => {
  it('renders correctly', () => {
    render(<SidebarNavigationBase />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
