/**
 * Technology badge component with brand colors and gradient effects
 * Used by: Portfolio components for displaying tech stacks
 */

import { techColors } from "../data/tech-colors"

export const TechBadge = ({ tech, className = "" }) => {
  const colors = techColors[tech] || techColors.default

  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
        transition-all duration-300 hover:scale-105 hover:shadow-lg
        border border-opacity-20 ${className}
      `}
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
        borderColor: colors.bg,
      }}
    >
      {tech}
    </span>
  )
}
