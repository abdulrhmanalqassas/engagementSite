import { useEffect, useState } from 'react'
import type { TimeUntil } from '../types'

export function useCountdown(target: Date) {
  const [timeUntil, setTimeUntil] = useState<TimeUntil>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [daysUntil, setDaysUntil] = useState(0)

  useEffect(() => {
    const tick = () => {
      const now = new Date().getTime()
      const end = target.getTime()
      const diff = end - now
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((diff % (1000 * 60)) / 1000)
        setDaysUntil(days)
        setTimeUntil({ days, hours, minutes, seconds })
      } else {
        setDaysUntil(0)
        setTimeUntil({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])

  return { timeUntil, daysUntil }
}