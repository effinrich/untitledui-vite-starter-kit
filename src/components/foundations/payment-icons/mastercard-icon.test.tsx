import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { MastercardIcon } from './mastercard-icon'


describe('MastercardIcon', () => {
  it('renders correctly', () => {
    render(<MastercardIcon />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
