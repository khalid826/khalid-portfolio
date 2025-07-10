/**
 * Simple footer component with copyright information
 * Used by: Main Portfolio component
 */

import { personalInfo } from "../data/personal-info"

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-950 to-orange-950 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-amber-300">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
