import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ErrorBoundary from '../../optimized/components/ErrorBoundary'

function Boom(): JSX.Element {
  throw new Error('boom')
}

describe('ErrorBoundary', () => {
  it('shows fallback on error', () => {
    render(
      <ErrorBoundary fallback={<div>fallback</div>}>
        <Boom />
      </ErrorBoundary>
    )
    expect(screen.getByText('fallback')).toBeInTheDocument()
  })
})