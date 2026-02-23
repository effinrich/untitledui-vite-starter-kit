import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { SidebarSectionDividers } from './sidebar-section-dividers'


describe('SidebarSectionDividers', () => {
  it('renders correctly', () => {
    render(<SidebarSectionDividers />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
