import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Tiktok } from './tiktok'


describe('Tiktok', () => {
  it('renders correctly', () => {
    render(<Tiktok />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
