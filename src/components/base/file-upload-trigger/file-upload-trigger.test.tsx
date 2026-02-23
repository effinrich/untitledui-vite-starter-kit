import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'


import { FileUploadTrigger } from './file-upload-trigger'


describe('FileUploadTrigger', () => {
  it('renders correctly', () => {
    render(<FileUploadTrigger />)
    
    expect(document.querySelector('[class]')).toBeInTheDocument()
  })
})
