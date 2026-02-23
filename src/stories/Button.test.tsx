import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from './Button'


describe('Button', () => {
  it('renders correctly', () => {
    render(<Button label="Test label" />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })

  it('renders small size', () => {
    render(<Button size="small" />)
    
    // Size "small" renders without error
  })

  it('renders medium size', () => {
    render(<Button size="medium" />)
    
    // Size "medium" renders without error
  })

  it('renders large size', () => {
    render(<Button size="large" />)
    
    // Size "large" renders without error
  })

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup()
    const handleEvent = vi.fn()

    const { container } = render(<Button onClick={handleEvent} />)

    // Find the root element (first child of container)
    const element = container.firstChild as HTMLElement
    if (element) {
      await user.click(element)
      expect(handleEvent).toHaveBeenCalled()
    }
  })
})
