import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Clubhouse } from './clubhouse'


describe('Clubhouse', () => {
  it('renders correctly', () => {
    render(<Clubhouse />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
