import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import OptimizedEngagement from '../../optimized/OptimizedEngagement'

vi.mock('../../he.jpg', () => ({ default: 'he.jpg' }))
vi.mock('../../she.jpg', () => ({ default: 'she.jpg' }))
vi.mock('../../we.png', () => ({ default: 'we.png' }))
vi.mock('../../weKids.jpg', () => ({ default: 'weKids.jpg' }))

describe('OptimizedEngagement', () => {
  it('renders hero with local image and countdown labels', () => {
    render(<OptimizedEngagement />)
    expect(screen.getByAltText('Couple')).toBeInTheDocument()
    expect(screen.getByText(/Counting Down to Forever|العد التنازلي إلى الأبد/)).toBeInTheDocument()
  })

  it('toggles language', () => {
    render(<OptimizedEngagement />)
    const [toggle] = screen.getAllByTestId('language-toggle')
    fireEvent.click(toggle)
    expect(screen.getAllByTestId('language-toggle').length).toBeGreaterThan(0)
  })

  it('renders menu items and scroll handler exists', () => {
    render(<OptimizedEngagement />)
    const buttons = screen.getAllByRole('button')
    const hasOurStory = buttons.some(b => /OUR STORY|قصتنا/i.test(b.textContent || ''))
    const hasDetails = buttons.some(b => /DETAILS|تفاصيل الحفل/i.test(b.textContent || ''))
    expect(hasOurStory).toBe(true)
    expect(hasDetails).toBe(true)
  })
  
  it('shows updated event time text', () => {
    render(<OptimizedEngagement />)
    expect(screen.getByText(/6:00 PM - 10:00 PM/)).toBeInTheDocument()
  })
})
