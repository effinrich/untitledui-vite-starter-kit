import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { SlideoutMenu } from './slideout-menu'


describe('SlideoutMenu', () => {
  it('renders correctly', () => {
    render(<SlideoutMenu>Test Content</SlideoutMenu>)
    
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
})
