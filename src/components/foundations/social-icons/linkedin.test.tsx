import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Linkedin } from './linkedin'


describe('Linkedin', () => {
  it('renders correctly', () => {
    render(<Linkedin />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
