/**
 * Personal information and basic site configuration
 * Used by: Hero, About, Contact, Navigation components
 */

export const personalInfo = {
  name: "Alex Johnson",
  title: "Full-Stack Developer & Creative Designer",
  description: "passionate about building exceptional digital experiences",
  email: "alex.johnson@email.com",
  phone: "+1 (234) 567-8900",
  location: "San Francisco, CA, USA",
  profileImage: "/placeholder.svg?height=400&width=400",
  aboutImage: "/placeholder.svg?height=500&width=600",

  // Social media links
  social: {
    github: "#",
    linkedin: "#",
    twitter: "#",
  },

  // Navigation items
  navigation: [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ],
}
