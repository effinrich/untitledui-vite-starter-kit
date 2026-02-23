import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Modal } from './modal'


describe('Modal', () => {
  it('renders correctly', () => {
    render(<Modal />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
