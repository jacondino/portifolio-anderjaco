import React from 'react'
import Home from './'
import { render, screen } from '@testing-library/react'

describe('Home Page Tests', () => {
  const createWrapper = () => {
    return render(<Home />)
  }

  it('should be have section about', () => {
    createWrapper()

    expect(screen.getByText("Hi, I'm Anderson Jacondino")).toBeInTheDocument()
  })
})
