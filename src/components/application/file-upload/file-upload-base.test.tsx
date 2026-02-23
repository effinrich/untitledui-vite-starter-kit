import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { FileUploadBase } from './file-upload-base'


describe('FileUploadBase', () => {
  it('renders correctly', () => {
    render(<FileUploadBase />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
