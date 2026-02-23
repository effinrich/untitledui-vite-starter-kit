import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Badges } from './badges'


describe('Badges', () => {
  it('renders correctly', () => {
    render(<Badges />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
