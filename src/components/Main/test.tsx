import { render, screen } from '@testing-library/react'

import { Main } from '.'

describe('Test component Main', () => {
  it('should render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /Boilerplate/i })
    ).toBeInTheDocument()
  })
})
