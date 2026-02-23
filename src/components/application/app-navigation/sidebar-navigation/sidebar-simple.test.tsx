import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { SidebarSimple } from './sidebar-simple'


describe('SidebarSimple', () => {
  it('renders correctly', () => {
    render(<SidebarSimple />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
