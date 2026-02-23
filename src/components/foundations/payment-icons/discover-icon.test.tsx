import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { DiscoverIcon } from './discover-icon'


describe('DiscoverIcon', () => {
  it('renders correctly', () => {
    render(<DiscoverIcon />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
