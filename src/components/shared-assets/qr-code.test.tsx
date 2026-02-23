import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { QrCode } from './qr-code'


describe('QrCode', () => {
  it('renders correctly', () => {
    render(<QrCode />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
