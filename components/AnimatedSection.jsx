"use client"

/**
 * Enhanced wrapper component for scroll-triggered animations
 * Used by: All major sections for fade-in effects
 */

import { useScrollAnimation } from "../hooks/useScrollAnimation"

export const AnimatedSection = ({ children, className = "", animation = "fade-up", delay = 0, threshold = 0.1 }) => {
  const [elementRef, isVisible] = useScrollAnimation(threshold)

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-out"

    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return `${baseClasses} opacity-0 translate-y-12`
        case "fade-down":
          return `${baseClasses} opacity-0 -translate-y-12`
        case "fade-left":
          return `${baseClasses} opacity-0 translate-x-12`
        case "fade-right":
          return `${baseClasses} opacity-0 -translate-x-12`
        case "scale":
          return `${baseClasses} opacity-0 scale-90`
        case "rotate":
          return `${baseClasses} opacity-0 rotate-6 scale-95`
        default:
          return `${baseClasses} opacity-0`
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0`
  }

  return (
    <div ref={elementRef} className={`${getAnimationClasses()} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
