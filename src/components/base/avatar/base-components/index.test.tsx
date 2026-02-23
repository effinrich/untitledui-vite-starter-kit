import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { BaseComponents } from './index'


describe('BaseComponents', () => {
  it('renders correctly', () => {
    render(<BaseComponents />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
