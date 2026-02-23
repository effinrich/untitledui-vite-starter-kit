import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { NavAccountCard } from './nav-account-card'


describe('NavAccountCard', () => {
  it('renders correctly', () => {
    render(<NavAccountCard icon="test" />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
