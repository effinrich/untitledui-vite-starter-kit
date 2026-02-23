import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Page } from './Page'


describe('Page', () => {
  it('renders correctly', () => {
    render(<Page />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
