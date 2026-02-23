import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { AvatarAddButton } from './avatar-add-button'


describe('AvatarAddButton', () => {
  it('renders correctly', () => {
    render(<AvatarAddButton size="xs" />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })

  it('renders xs size', () => {
    render(<AvatarAddButton size="xs" />)
    
    // Size "xs" renders without error
  })

  it('renders sm size', () => {
    render(<AvatarAddButton size="sm" />)
    
    // Size "sm" renders without error
  })

  it('renders md size', () => {
    render(<AvatarAddButton size="md" />)
    
    // Size "md" renders without error
  })
})
