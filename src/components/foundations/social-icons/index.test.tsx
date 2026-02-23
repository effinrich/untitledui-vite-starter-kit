import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { SocialIcons } from './index'


describe('SocialIcons', () => {
  it('renders correctly', () => {
    render(<SocialIcons />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
