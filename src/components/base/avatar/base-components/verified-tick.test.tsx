import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { VerifiedTick } from './verified-tick'


describe('VerifiedTick', () => {
  it('renders correctly', () => {
    render(<VerifiedTick size="xs" />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })

  it('renders xs size', () => {
    render(<VerifiedTick size="xs" />)
    
    // Size "xs" renders without error
  })

  it('renders sm size', () => {
    render(<VerifiedTick size="sm" />)
    
    // Size "sm" renders without error
  })

  it('renders md size', () => {
    render(<VerifiedTick size="md" />)
    
    // Size "md" renders without error
  })

  it('renders lg size', () => {
    render(<VerifiedTick size="lg" />)
    
    // Size "lg" renders without error
  })

  it('renders xl size', () => {
    render(<VerifiedTick size="xl" />)
    
    // Size "xl" renders without error
  })

  it('renders 2xl size', () => {
    render(<VerifiedTick size="2xl" />)
    
    // Size "2xl" renders without error
  })

  it('renders 3xl size', () => {
    render(<VerifiedTick size="3xl" />)
    
    // Size "3xl" renders without error
  })

  it('renders 4xl size', () => {
    render(<VerifiedTick size="4xl" />)
    
    // Size "4xl" renders without error
  })
})
