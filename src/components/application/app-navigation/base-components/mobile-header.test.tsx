import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { MobileHeader } from './mobile-header'


describe('MobileHeader', () => {
  it('renders correctly', () => {
    render(<MobileHeader />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
