import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { DateInput } from './date-input'


describe('DateInput', () => {
  it('renders correctly', () => {
    render(<DateInput />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
