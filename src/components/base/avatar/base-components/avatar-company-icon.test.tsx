import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { AvatarCompanyIcon } from './avatar-company-icon'


describe('AvatarCompanyIcon', () => {
  it('renders correctly', () => {
    render(<AvatarCompanyIcon size="xs" src="Test src" />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })

  it('renders xs size', () => {
    render(<AvatarCompanyIcon size="xs" />)
    
    // Size "xs" renders without error
  })

  it('renders sm size', () => {
    render(<AvatarCompanyIcon size="sm" />)
    
    // Size "sm" renders without error
  })

  it('renders md size', () => {
    render(<AvatarCompanyIcon size="md" />)
    
    // Size "md" renders without error
  })

  it('renders lg size', () => {
    render(<AvatarCompanyIcon size="lg" />)
    
    // Size "lg" renders without error
  })

  it('renders xl size', () => {
    render(<AvatarCompanyIcon size="xl" />)
    
    // Size "xl" renders without error
  })

  it('renders 2xl size', () => {
    render(<AvatarCompanyIcon size="2xl" />)
    
    // Size "2xl" renders without error
  })
})
