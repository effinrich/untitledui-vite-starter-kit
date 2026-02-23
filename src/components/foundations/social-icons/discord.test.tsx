import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Discord } from './discord'


describe('Discord', () => {
  it('renders correctly', () => {
    render(<Discord />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
