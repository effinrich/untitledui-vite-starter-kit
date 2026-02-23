import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { RadioButtons } from './radio-buttons'


describe('RadioButtons', () => {
  it('renders correctly', () => {
    render(<RadioButtons />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
