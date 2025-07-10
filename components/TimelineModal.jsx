"use client"

/**
 * Enhanced modal component with smooth entrance/exit animations
 * Used by: Timeline component
 */

import { useEffect, useState } from "react"
import { X, ExternalLink } from "lucide-react"

export const TimelineModal = ({ item, onClose }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (item) {
      setIsAnimating(true)
      // Small delay to trigger entrance animation
      setTimeout(() => setIsVisible(true), 10)
    } else {
      setIsVisible(false)
      // Wait for exit animation before fully closing
      setTimeout(() => setIsAnimating(false), 300)
    }
  }, [item])

  const handleClose = () => {
    setIsVisible(false)
    // Wait for exit animation before calling onClose
    setTimeout(() => onClose(), 300)
  }

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && item) {
        handleClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [item])

  if (!item && !isAnimating) return null

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out
        ${isVisible ? "bg-black/50 backdrop-blur-sm" : "bg-black/0 backdrop-blur-none"}
      `}
      onClick={handleBackdropClick}
    >
      <div
        className={`
          bg-gradient-to-br from-stone-50 to-orange-50 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto
          transition-all duration-300 ease-out transform
          ${isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"}
        `}
      >
        <div className="p-8">
          {/* Modal header with enhanced close button */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{item?.position}</h3>
              <p className="text-red-600 font-medium">{item?.place}</p>
              <p className="text-gray-600">{item?.duration}</p>
            </div>
            <button
              onClick={handleClose}
              className="group p-2 rounded-full hover:bg-red-100 transition-all duration-200 hover:scale-110"
            >
              <X className="w-6 h-6 text-gray-600 group-hover:text-red-600 transition-colors" />
            </button>
          </div>

          {/* Activities list with staggered animations */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Activities & Achievements</h4>
            <ul className="space-y-3">
              {item?.activities.map((activity, index) => (
                <li
                  key={index}
                  className={`
                    text-gray-700 flex items-start transition-all duration-300 ease-out transform
                    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}
                  `}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {activity}
                </li>
              ))}
            </ul>
          </div>

          {/* Related links with hover animations */}
          {item?.links && item.links.length > 0 && (
            <div
              className={`
                transition-all duration-300 ease-out transform
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
              `}
              style={{ transitionDelay: "400ms" }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Related Links</h4>
              <div className="flex flex-wrap gap-3">
                {item.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="group inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 text-red-800 rounded-lg hover:from-red-200 hover:to-orange-200 transition-all duration-200 hover:scale-105 hover:shadow-md"
                  >
                    {link.label}
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
