import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { AppStoreButtonsOutline } from './app-store-buttons-outline'


describe('AppStoreButtonsOutline', () => {
  it('renders correctly', () => {
    render(<AppStoreButtonsOutline />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
