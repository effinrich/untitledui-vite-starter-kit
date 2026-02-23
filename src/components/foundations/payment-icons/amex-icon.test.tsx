import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { AmexIcon } from './amex-icon'


describe('AmexIcon', () => {
  it('renders correctly', () => {
    render(<AmexIcon />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
