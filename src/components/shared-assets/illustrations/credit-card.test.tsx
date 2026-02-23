import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { CreditCard } from './credit-card'


describe('CreditCard', () => {
  it('renders correctly', () => {
    render(<CreditCard />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
