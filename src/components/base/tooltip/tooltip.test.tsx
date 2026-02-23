import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Tooltip } from './tooltip'


describe('Tooltip', () => {
  it('renders correctly', () => {
    render(<Tooltip title="test" />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
