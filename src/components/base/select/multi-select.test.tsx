import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { MultiSelect } from './multi-select'


describe('MultiSelect', () => {
  it('renders correctly', () => {
    render(<MultiSelect selectedItems="test">Test Content</MultiSelect>)
    
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('renders sm size', () => {
    render(<MultiSelect size="sm">Content</MultiSelect>)
    
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('renders md size', () => {
    render(<MultiSelect size="md">Content</MultiSelect>)
    
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('calls onItemCleared when itemcleareded', async () => {
    const user = userEvent.setup()
    const handleEvent = vi.fn()

    render(<MultiSelect onItemCleared={handleEvent}>Content</MultiSelect>)

    await user.type(screen.getByText('Content'), 'test')

    expect(handleEvent).toHaveBeenCalled()
  })

  it('calls onItemInserted when iteminserteded', async () => {
    const user = userEvent.setup()
    const handleEvent = vi.fn()

    render(<MultiSelect onItemInserted={handleEvent}>Content</MultiSelect>)

    await user.type(screen.getByText('Content'), 'test')

    expect(handleEvent).toHaveBeenCalled()
  })
})
