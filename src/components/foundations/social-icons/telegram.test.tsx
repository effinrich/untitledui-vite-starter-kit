import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Telegram } from './telegram'


describe('Telegram', () => {
  it('renders correctly', () => {
    render(<Telegram />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
