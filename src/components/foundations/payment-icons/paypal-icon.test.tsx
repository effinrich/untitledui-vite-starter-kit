import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { PaypalIcon } from './paypal-icon'


describe('PaypalIcon', () => {
  it('renders correctly', () => {
    render(<PaypalIcon />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
