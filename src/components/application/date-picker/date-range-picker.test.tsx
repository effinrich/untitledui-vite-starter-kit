import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { DateRangePicker } from './date-range-picker'


describe('DateRangePicker', () => {
  it('renders correctly', () => {
    render(<DateRangePicker />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })

  it('calls onApply when applyed', async () => {
    const user = userEvent.setup()
    const handleEvent = vi.fn()

    const { container } = render(<DateRangePicker onApply={handleEvent} />)

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

    const { container } = render(<DateRangePicker onCancel={handleEvent} />)

    // Find the root element (first child of container)
    const element = container.firstChild as HTMLElement
    if (element) {
      await user.type(element, 'test')
      expect(handleEvent).toHaveBeenCalled()
    }
  })
})
