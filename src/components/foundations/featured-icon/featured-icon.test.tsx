import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { FeaturedIcon } from './featured-icon'


describe('FeaturedIcon', () => {
  it('renders correctly', () => {
    render(<FeaturedIcon>Test Content</FeaturedIcon>)
    
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
})
