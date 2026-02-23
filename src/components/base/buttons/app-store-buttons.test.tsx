import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { AppStoreButtons } from './app-store-buttons'


describe('AppStoreButtons', () => {
  it('renders correctly', () => {
    render(<AppStoreButtons />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
