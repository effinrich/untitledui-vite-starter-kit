import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { HeaderNavigation } from './header-navigation'


describe('HeaderNavigation', () => {
  it('renders correctly', () => {
    render(<HeaderNavigation />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
