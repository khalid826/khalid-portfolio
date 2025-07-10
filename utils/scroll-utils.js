/**
 * Utility functions for smooth scrolling and navigation
 * Used by: Navigation component, Hero component
 */

/**
 * Smoothly scrolls to a section by ID
 * @param {string} sectionId - The ID of the section to scroll to
 */
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}
