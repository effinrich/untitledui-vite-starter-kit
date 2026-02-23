import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { RangePreset } from './range-preset'


describe('RangePreset', () => {
  it('renders correctly', () => {
    render(<RangePreset />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
