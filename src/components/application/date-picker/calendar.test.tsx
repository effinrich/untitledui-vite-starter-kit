import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Calendar } from './calendar'


describe('Calendar', () => {
  it('renders correctly', () => {
    render(<Calendar />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
