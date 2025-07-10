"use client"

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * Used by: Components that need fade-in animations
 */

import { useState, useEffect, useRef } from "react"

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Disconnect after first intersection for performance
          observer.disconnect()
        }
      },
      { threshold },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return [elementRef, isVisible]
}
