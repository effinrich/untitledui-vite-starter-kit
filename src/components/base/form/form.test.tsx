import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { Form } from './form'


describe('Form', () => {
  it('renders correctly', () => {
    render(<Form />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
