import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { PaymentIcons } from './index'


describe('PaymentIcons', () => {
  it('renders correctly', () => {
    render(<PaymentIcons />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
