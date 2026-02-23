import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { EmptyState } from './empty-state'


describe('EmptyState', () => {
  it('renders correctly', () => {
    render(<EmptyState Title="test" Header="test" Footer="test" Content="test" Description="test" Illustration="test" FeaturedIcon="test" FileTypeIcon="test" />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
