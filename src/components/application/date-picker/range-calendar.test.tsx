import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { RangeCalendar } from './range-calendar'


describe('RangeCalendar', () => {
  it('renders correctly', () => {
    render(<RangeCalendar />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
