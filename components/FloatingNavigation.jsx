"use client"

/**
 * Enhanced floating navigation with hover animations and section labels
 * Slides to edge when not hovered to avoid blocking content
 * Used by: Main Portfolio component
 */

import { useState } from "react"
import { personalInfo } from "../data/personal-info"
import { useScrollSpy } from "../hooks/useScrollSpy"
import { scrollToSection } from "../utils/scroll-utils"

export const FloatingNavigation = () => {
  const [isHovered, setIsHovered] = useState(false)
  const sectionIds = personalInfo.navigation.map((item) => item.id)
  const activeSection = useScrollSpy(sectionIds)

  return (
    <div
      className={`
        fixed right-0 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-500 ease-out
        ${isHovered ? "translate-x-0" : "translate-x-20"}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white/90 backdrop-blur-md rounded-l-2xl shadow-xl border border-gray-200 border-r-0 p-3">
        <div className="flex flex-col space-y-2">
          {personalInfo.navigation.map((item, index) => {
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative group flex items-center px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium
                  ${
                    isActive
                      ? "bg-gradient-to-r from-red-400 to-orange-400 text-white shadow-lg transform scale-105"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }
                `}
              >
                {/* Active section indicator */}
                {isActive && (
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-red-400 to-orange-400 rounded-full animate-pulse"></div>
                )}

                {/* Navigation dot */}
                <div
                  className={`
                    w-3 h-3 rounded-full mr-3 transition-all duration-300 flex-shrink-0
                    ${isActive ? "bg-white shadow-md" : "bg-gray-400 group-hover:bg-gray-600"}
                  `}
                ></div>

                {/* Section label - always visible */}
                <span
                  className={`
                    whitespace-nowrap transition-all duration-300 transform
                    ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
                    ${isActive ? "text-white font-semibold" : ""}
                  `}
                >
                  {item.label}
                </span>

                {/* Hover effect background */}
                <div
                  className={`
                    absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl opacity-0 
                    group-hover:opacity-100 transition-opacity duration-200 -z-10
                    ${isActive ? "hidden" : ""}
                  `}
                ></div>
              </button>
            )
          })}
        </div>

        {/* Hover indicator */}
        <div
          className={`
            absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-16 bg-gradient-to-b from-red-400 to-orange-400 rounded-l-full
            transition-all duration-300 ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"}
          `}
        ></div>
      </div>
    </div>
  )
}
