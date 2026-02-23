import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Main } from './main'


describe('Main', () => {
  it('renders correctly', () => {
    render(<Main />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
