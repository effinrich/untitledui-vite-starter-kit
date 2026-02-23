import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { SidebarDualTier } from './sidebar-dual-tier'


describe('SidebarDualTier', () => {
  it('renders correctly', () => {
    render(<SidebarDualTier />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
