import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { SidebarSectionsSubheadings } from './sidebar-sections-subheadings'


describe('SidebarSectionsSubheadings', () => {
  it('renders correctly', () => {
    render(<SidebarSectionsSubheadings />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
