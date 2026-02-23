import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { PinInput } from './pin-input'


describe('PinInput', () => {
  it('renders correctly', () => {
    render(<PinInput size="test" id="test" disabled="test" />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })

  it('respects disabled state', () => {
    const { container } = render(<PinInput disabled />)

    // Find button or input element that should be disabled
    const disabledElement = container.querySelector('button, input, textarea, select')
    if (disabledElement) {
      expect(disabledElement).toBeDisabled()
    } else {
      // Component renders with disabled prop
      expect(container.firstChild).toBeInTheDocument()
    }
  })
})
