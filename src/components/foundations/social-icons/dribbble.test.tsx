import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Dribbble } from './dribbble'


describe('Dribbble', () => {
  it('renders correctly', () => {
    render(<Dribbble />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
