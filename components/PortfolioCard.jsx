/**
 * Enhanced portfolio project card with animations and tech badges
 * Used by: Portfolio component
 */

import { ExternalLink } from "lucide-react"
import { AnimatedSection } from "./AnimatedSection"
import { TechBadge } from "./TechBadge"

export const PortfolioCard = ({ item, index }) => {
  return (
    <AnimatedSection animation="fade-up" delay={index * 200}>
      <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
        {/* Project image with enhanced hover effects */}
        <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
          <div className="relative group overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10"></div>
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay with project links */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
              <div className="flex gap-4">
                {item.links.slice(0, 2).map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors transform hover:scale-105"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project details */}
        <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors cursor-default">
              {item.title}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
          </div>

          {/* Enhanced Problem/Solution grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border border-red-100 hover:shadow-lg transition-all duration-300 group">
              <h4 className="font-semibold text-red-800 mb-3 flex items-center group-hover:text-red-600 transition-colors">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                Problem
              </h4>
              <p className="text-red-700 text-sm leading-relaxed">{item.problem}</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-all duration-300 group">
              <h4 className="font-semibold text-green-800 mb-3 flex items-center group-hover:text-green-600 transition-colors">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Solution
              </h4>
              <p className="text-green-700 text-sm leading-relaxed">{item.solution}</p>
            </div>
          </div>

          {/* Technology stack with brand colors */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-3">
              {item.technologies.map((tech, techIndex) => (
                <TechBadge key={techIndex} tech={tech} />
              ))}
            </div>
          </div>

          {/* Enhanced project links */}
          <div className="flex flex-wrap gap-3">
            {item.links.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href={link.url}
                className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                {link.label}
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
