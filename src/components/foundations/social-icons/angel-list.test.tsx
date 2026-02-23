import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { AngelList } from './angel-list'


describe('AngelList', () => {
  it('renders correctly', () => {
    render(<AngelList />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
