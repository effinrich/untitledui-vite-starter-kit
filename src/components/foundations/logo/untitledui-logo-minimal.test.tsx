import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { UntitleduiLogoMinimal } from './untitledui-logo-minimal'


describe('UntitleduiLogoMinimal', () => {
  it('renders correctly', () => {
    render(<UntitleduiLogoMinimal />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
