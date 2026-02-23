import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { BadgeGroups } from './badge-groups'


describe('BadgeGroups', () => {
  it('renders correctly', () => {
    render(<BadgeGroups />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
