import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { DropdownHeaderNavigation } from './dropdown-header-navigation'


describe('DropdownHeaderNavigation', () => {
  it('renders correctly', () => {
    render(<DropdownHeaderNavigation />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
