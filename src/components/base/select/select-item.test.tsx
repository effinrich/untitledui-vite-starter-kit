import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { SelectItem } from './select-item'


describe('SelectItem', () => {
  it('renders correctly', () => {
    render(<SelectItem />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
