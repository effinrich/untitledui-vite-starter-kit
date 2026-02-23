import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { ProgressIndicators } from './progress-indicators'


describe('ProgressIndicators', () => {
  it('renders correctly', () => {
    render(<ProgressIndicators />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
