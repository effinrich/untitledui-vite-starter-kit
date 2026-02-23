import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { AvatarProfilePhoto } from './avatar-profile-photo'


describe('AvatarProfilePhoto', () => {
  it('renders correctly', () => {
    render(<AvatarProfilePhoto size="sm" />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })

  it('renders sm size', () => {
    render(<AvatarProfilePhoto size="sm" />)
    
    // Size "sm" renders without error
  })

  it('renders md size', () => {
    render(<AvatarProfilePhoto size="md" />)
    
    // Size "md" renders without error
  })

  it('renders lg size', () => {
    render(<AvatarProfilePhoto size="lg" />)
    
    // Size "lg" renders without error
  })
})
