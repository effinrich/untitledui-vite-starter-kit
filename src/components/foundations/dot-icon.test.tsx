import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { DotIcon } from './dot-icon'


describe('DotIcon', () => {
  it('renders correctly', () => {
    render(<DotIcon />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
