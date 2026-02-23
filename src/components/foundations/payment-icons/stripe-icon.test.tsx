import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { StripeIcon } from './stripe-icon'


describe('StripeIcon', () => {
  it('renders correctly', () => {
    render(<StripeIcon />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
