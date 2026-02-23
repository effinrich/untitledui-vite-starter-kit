import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Cloud } from './cloud'


describe('Cloud', () => {
  it('renders correctly', () => {
    render(<Cloud />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
