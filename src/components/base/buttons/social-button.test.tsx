import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { SocialButton } from './social-button'


describe('SocialButton', () => {
  it('renders correctly', () => {
    render(<SocialButton />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
