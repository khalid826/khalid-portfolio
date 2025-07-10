"use client"

/**
 * Fixed navigation header with smooth scroll links
 * Used by: Main Portfolio component
 */

import { personalInfo } from "../data/personal-info"
import { scrollToSection } from "../utils/scroll-utils"

export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-amber-50/95 to-orange-50/95 backdrop-blur-sm z-40 border-b border-amber-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-amber-800 to-orange-800 bg-clip-text text-transparent">
            Portfolio
          </div>

          {/* Desktop navigation menu */}
          <div className="hidden md:flex space-x-8">
            {personalInfo.navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-amber-700 hover:text-amber-900 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
