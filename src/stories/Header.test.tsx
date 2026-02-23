import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Header } from './Header'


describe('Header', () => {
  it('renders correctly', () => {
    render(<Header />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })

  it('calls onLogin when logined', async () => {
    const user = userEvent.setup()
    const handleEvent = vi.fn()

    const { container } = render(<Header onLogin={handleEvent} />)

    // Find the root element (first child of container)
    const element = container.firstChild as HTMLElement
    if (element) {
      await user.type(element, 'test')
      expect(handleEvent).toHaveBeenCalled()
    }
  })

  it('calls onLogout when logouted', async () => {
    const user = userEvent.setup()
    const handleEvent = vi.fn()

    const { container } = render(<Header onLogout={handleEvent} />)

    // Find the root element (first child of container)
    const element = container.firstChild as HTMLElement
    if (element) {
      await user.type(element, 'test')
      expect(handleEvent).toHaveBeenCalled()
    }
  })

  it('calls onCreateAccount when createaccounted', async () => {
    const user = userEvent.setup()
    const handleEvent = vi.fn()

    const { container } = render(<Header onCreateAccount={handleEvent} />)

    // Find the root element (first child of container)
    const element = container.firstChild as HTMLElement
    if (element) {
      await user.type(element, 'test')
      expect(handleEvent).toHaveBeenCalled()
    }
  })
})
