import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { InputPayment } from './input-payment'


describe('InputPayment', () => {
  it('renders correctly', () => {
    render(<InputPayment />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
