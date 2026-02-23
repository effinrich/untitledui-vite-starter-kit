import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { UntitleduiLogo } from './untitledui-logo'


describe('UntitleduiLogo', () => {
  it('renders correctly', () => {
    render(<UntitleduiLogo />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
