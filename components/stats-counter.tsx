"use client"

import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface StatsCounterProps {
  end: number
  duration?: number
  suffix?: string
}

export function StatsCounter({ end, duration = 2000, suffix = "" }: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = timestamp - startTime

        const percentage = Math.min(progress / duration, 1)
        setCount(Math.floor(end * percentage))

        if (progress < duration) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }
  }, [isInView, end, duration])

  return (
    <div ref={ref} className="text-4xl font-bold text-blue-600">
      {count}
      {suffix}
    </div>
  )
}

