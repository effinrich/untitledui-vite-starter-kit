import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { VisaIcon } from './visa-icon'


describe('VisaIcon', () => {
  it('renders correctly', () => {
    render(<VisaIcon />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
