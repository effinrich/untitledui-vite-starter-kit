import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { RouterProvider } from './router-provider'


describe('RouterProvider', () => {
  it('renders correctly', () => {
    render(<RouterProvider />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
