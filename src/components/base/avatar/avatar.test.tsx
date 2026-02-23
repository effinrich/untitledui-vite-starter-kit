import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Avatar } from './avatar'


describe('Avatar', () => {
  it('renders correctly', () => {
    render(<Avatar />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
