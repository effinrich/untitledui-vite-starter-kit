import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { SidebarSlim } from './sidebar-slim'


describe('SidebarSlim', () => {
  it('renders correctly', () => {
    render(<SidebarSlim />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
