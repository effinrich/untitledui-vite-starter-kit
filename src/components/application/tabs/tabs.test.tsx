import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Tabs } from './tabs'


describe('Tabs', () => {
  it('renders correctly', () => {
    render(<Tabs />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
