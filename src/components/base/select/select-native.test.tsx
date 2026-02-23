import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { SelectNative } from './select-native'


describe('SelectNative', () => {
  it('renders correctly', () => {
    render(<SelectNative />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
