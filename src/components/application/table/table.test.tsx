import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Table } from './table'


describe('Table', () => {
  it('renders correctly', () => {
    render(<Table />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
