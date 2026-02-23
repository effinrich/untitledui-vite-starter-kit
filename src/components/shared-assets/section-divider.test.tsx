import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { SectionDivider } from './section-divider'


describe('SectionDivider', () => {
  it('renders correctly', () => {
    render(<SectionDivider />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
