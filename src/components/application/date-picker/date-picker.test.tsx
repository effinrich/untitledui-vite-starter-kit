import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { DatePicker } from './date-picker'


describe('DatePicker', () => {
  it('renders correctly', () => {
    render(<DatePicker />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })

  it('calls onApply when applyed', async () => {
    const user = userEvent.setup()
    const handleEvent = vi.fn()

    const { container } = render(<DatePicker onApply={handleEvent} />)

    // Find the root element (first child of container)
    const element = container.firstChild as HTMLElement
    if (element) {
      await user.type(element, 'test')
      expect(handleEvent).toHaveBeenCalled()
    }
  })

  it('calls onCancel when canceled', async () => {
    const user = userEvent.setup()
    const handleEvent = vi.fn()

    const { container } = render(<DatePicker onCancel={handleEvent} />)

    // Find the root element (first child of container)
    const element = container.firstChild as HTMLElement
    if (element) {
      await user.type(element, 'test')
      expect(handleEvent).toHaveBeenCalled()
    }
  })
})
