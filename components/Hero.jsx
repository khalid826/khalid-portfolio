"use client"

/**
 * Hero section with enhanced animations and modern terracotta styling
 * Used by: Main Portfolio component
 */

import { personalInfo } from "../data/personal-info"
import { scrollToSection } from "../utils/scroll-utils"
import { AnimatedSection } from "./AnimatedSection"

export const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-20 pb-16 bg-gradient-to-br from-stone-50 via-orange-50 to-red-50 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-right">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {personalInfo.title} {personalInfo.description}
              </p>

              {/* Enhanced CTA buttons with hover animations */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="group relative bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-2xl hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="group border-2 border-red-500 text-red-600 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:bg-red-500 hover:text-white hover:shadow-lg hover:scale-105"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={200}>
            <div className="flex justify-center">
              <div className="relative group">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-400 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>

                {/* Profile image with hover effects */}
                <img
                  src={personalInfo.profileImage || "/placeholder.svg"}
                  alt="Profile"
                  className="relative w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-white transition-transform duration-500 group-hover:scale-105"
                />

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-lime-400 to-green-400 rounded-full animate-bounce delay-1000"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce delay-2000"></div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
