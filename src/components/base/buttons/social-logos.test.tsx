import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { SocialLogos } from './social-logos'


describe('SocialLogos', () => {
  it('renders correctly', () => {
    render(<SocialLogos />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
