import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Snapchat } from './snapchat'


describe('Snapchat', () => {
  it('renders correctly', () => {
    render(<Snapchat />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
