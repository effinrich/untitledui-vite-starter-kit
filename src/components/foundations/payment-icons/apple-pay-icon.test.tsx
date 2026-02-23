import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { ApplePayIcon } from './apple-pay-icon'


describe('ApplePayIcon', () => {
  it('renders correctly', () => {
    render(<ApplePayIcon />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
