import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Combobox } from './combobox'


describe('Combobox', () => {
  it('renders correctly', () => {
    render(<Combobox />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
