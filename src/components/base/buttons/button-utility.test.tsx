import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { ButtonUtility } from './button-utility'


describe('ButtonUtility', () => {
  it('renders correctly', () => {
    render(<ButtonUtility icon="test" />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
