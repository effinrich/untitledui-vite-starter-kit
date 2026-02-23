import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { HomeScreen } from './home-screen'


describe('HomeScreen', () => {
  it('renders correctly', () => {
    render(<HomeScreen />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
