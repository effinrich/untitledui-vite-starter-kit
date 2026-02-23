import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { ProgressCircles } from './progress-circles'


describe('ProgressCircles', () => {
  it('renders correctly', () => {
    render(<ProgressCircles />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
