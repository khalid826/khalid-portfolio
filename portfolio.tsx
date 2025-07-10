"use client"

/**
 * Main portfolio application with enhanced animations and interactions
 * Combines all components with improved floating navigation and modal animations
 */

import { useState } from "react"
import { FloatingNavigation } from "./components/FloatingNavigation"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Timeline } from "./components/Timeline"
import { Portfolio } from "./components/Portfolio"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { TimelineModal } from "./components/TimelineModal"

export default function PortfolioApp() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedTimelineItem, setSelectedTimelineItem] = useState(null)

  const timelineData = [
    {
      id: 1,
      type: "work",
      year: "2022",
      place: "TechCorp Solutions",
      title: "Senior Full-Stack Developer",
      duration: "2022 - Present",
      position: "Senior Full-Stack Developer",
      activities: [
        "Led development of 3 major web applications serving 100K+ users",
        "Mentored junior developers and established coding standards",
        "Improved application performance by 40% through optimization",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
      ],
      links: [
        { label: "Company Website", url: "https://techcorp.com" },
        { label: "Project Demo", url: "https://demo.techcorp.com" },
      ],
    },
    {
      id: 2,
      type: "work",
      year: "2021",
      place: "StartupXYZ",
      title: "Frontend Developer",
      duration: "2021 - 2022",
      position: "Frontend Developer",
      activities: [
        "Built responsive web applications using React and TypeScript",
        "Collaborated with design team to implement pixel-perfect UIs",
        "Integrated third-party APIs and payment systems",
        "Reduced bundle size by 35% through code optimization",
      ],
      links: [{ label: "Portfolio Project", url: "https://startupxyz.com" }],
    },
    {
      id: 3,
      type: "education",
      year: "2019",
      place: "Stanford University",
      title: "Master of Computer Science",
      duration: "2019 - 2021",
      position: "Master of Computer Science",
      activities: [
        "Specialized in Human-Computer Interaction and Machine Learning",
        "Graduated with honors (GPA: 3.8/4.0)",
        "Research focus on AI-driven user interfaces",
        "Teaching Assistant for Advanced Algorithms course",
      ],
      links: [
        { label: "Thesis Paper", url: "https://stanford.edu/thesis" },
        { label: "Research Project", url: "https://ai-ui-research.com" },
      ],
    },
    {
      id: 4,
      type: "work",
      year: "2019",
      place: "WebDev Agency",
      title: "Junior Developer",
      duration: "2019 - 2021",
      position: "Junior Developer",
      activities: [
        "Developed custom WordPress themes and plugins",
        "Maintained and updated client websites",
        "Learned modern development practices and tools",
        "Collaborated on 15+ client projects",
      ],
      links: [{ label: "Agency Portfolio", url: "https://webdevagency.com" }],
    },
    {
      id: 5,
      type: "education",
      year: "2015",
      place: "UC Berkeley",
      title: "Bachelor of Software Engineering",
      duration: "2015 - 2019",
      position: "Bachelor of Software Engineering",
      activities: [
        "Focused on full-stack development and software architecture",
        "Dean's List for 3 consecutive years",
        "President of Computer Science Student Association",
        "Capstone project: Real-time collaboration platform",
      ],
      links: [{ label: "Capstone Demo", url: "https://berkeley-capstone.com" }],
    },
  ]

  const portfolioItems = [
    {
      id: 1,
      title: "E-Commerce Platform Revolution",
      category: "web-app",
      image: "/placeholder.svg?height=400&width=800",
      description:
        "A comprehensive e-commerce solution that transforms online shopping experiences with AI-powered recommendations and seamless checkout processes.",
      problem:
        "Traditional e-commerce platforms suffer from poor user experience, high cart abandonment rates, and lack of personalization, leading to decreased sales and customer satisfaction.",
      solution:
        "Developed a modern, AI-driven platform with intelligent product recommendations, one-click checkout, real-time inventory management, and personalized shopping experiences that increased conversion rates by 45%.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "TensorFlow", "Redis"],
      links: [
        { label: "Live Demo", url: "#" },
        { label: "GitHub", url: "#" },
        { label: "Case Study", url: "#" },
      ],
    },
    {
      id: 2,
      title: "Collaborative Task Management Suite",
      category: "web-app",
      image: "/placeholder.svg?height=400&width=800",
      description:
        "An intuitive project management tool that enables teams to collaborate effectively with real-time updates, advanced analytics, and seamless integrations.",
      problem:
        "Teams struggle with fragmented communication, lack of project visibility, and inefficient task tracking across multiple platforms, resulting in missed deadlines and reduced productivity.",
      solution:
        "Created an all-in-one platform with real-time collaboration, automated workflows, comprehensive analytics, and 20+ integrations that improved team productivity by 60% and reduced project completion time by 30%.",
      technologies: ["React", "Firebase", "Material-UI", "WebSocket", "Chart.js", "Zapier API"],
      links: [
        { label: "Live Demo", url: "#" },
        { label: "GitHub", url: "#" },
      ],
    },
    {
      id: 3,
      title: "Cosmic Explorer: Space Adventure",
      category: "game-app",
      image: "/placeholder.svg?height=400&width=800",
      description:
        "An immersive 2D space exploration game featuring procedural generation, resource management, and engaging storylines that captivate players for hours.",
      problem:
        "Most space games lack depth in exploration mechanics and fail to provide meaningful progression systems, leading to repetitive gameplay and quick player abandonment.",
      solution:
        "Designed a rich universe with procedural planet generation, complex resource systems, branching storylines, and multiplayer cooperation that achieved 4.8/5 rating and 100K+ downloads in the first month.",
      technologies: ["Unity", "C#", "Photoshop", "Blender", "Firebase", "Steam API"],
      links: [
        { label: "Steam Page", url: "#" },
        { label: "Trailer", url: "#" },
        { label: "Dev Blog", url: "#" },
      ],
    },
    {
      id: 4,
      title: "MindBender: Mobile Puzzle Experience",
      category: "game-app",
      image: "/placeholder.svg?height=400&width=800",
      description:
        "An addictive puzzle game that challenges players with innovative mechanics, beautiful visuals, and progressive difficulty curves designed for mobile platforms.",
      problem:
        "Mobile puzzle games often become monotonous with repetitive mechanics and lack of meaningful progression, causing players to lose interest quickly.",
      solution:
        "Developed unique puzzle mechanics with adaptive difficulty, social features, daily challenges, and stunning visual effects that maintained 85% player retention rate and generated $50K+ revenue in 6 months.",
      technologies: ["React Native", "JavaScript", "Firebase", "Adobe After Effects", "App Store Connect"],
      links: [
        { label: "App Store", url: "#" },
        { label: "Google Play", url: "#" },
        { label: "Gameplay Video", url: "#" },
      ],
    },
    {
      id: 5,
      title: "TechStart Brand Identity System",
      category: "art",
      image: "/placeholder.svg?height=400&width=800",
      description:
        "A comprehensive brand identity package for a technology startup, including logo design, color systems, typography, and brand guidelines.",
      problem:
        "The startup lacked a cohesive visual identity, making it difficult to establish credibility, attract investors, and differentiate from competitors in the crowded tech market.",
      solution:
        "Created a modern, memorable brand system with scalable logo designs, comprehensive style guides, and marketing materials that helped secure $2M in Series A funding and increased brand recognition by 300%.",
      technologies: ["Illustrator", "Photoshop", "Figma", "InDesign", "After Effects", "Principle"],
      links: [
        { label: "Brand Guidelines", url: "#" },
        { label: "Behance", url: "#" },
        { label: "Client Testimonial", url: "#" },
      ],
    },
    {
      id: 6,
      title: "Digital Character Art Collection",
      category: "art",
      image: "/placeholder.svg?height=400&width=800",
      description:
        "A series of detailed digital character illustrations showcasing diverse art styles, from realistic portraits to stylized fantasy characters.",
      problem:
        "The digital art market is saturated with similar styles, making it challenging for artists to stand out and build a unique artistic voice that resonates with audiences.",
      solution:
        "Developed a distinctive art style blending traditional techniques with digital innovation, resulting in viral social media presence with 50K+ followers, commissioned work from major gaming studios, and featured in digital art publications.",
      technologies: ["Procreate", "Photoshop", "Illustrator", "Blender", "ZBrush", "Substance Painter"],
      links: [
        { label: "Art Portfolio", url: "#" },
        { label: "Instagram", url: "#" },
        { label: "NFT Collection", url: "#" },
      ],
    },
  ]

  const categories = [
    { id: "all", label: "All Work" },
    { id: "web-app", label: "Web Apps" },
    { id: "game-app", label: "Games" },
    { id: "art", label: "Art & Design" },
  ]

  const filteredItems =
    activeCategory === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-orange-50 to-red-50">
      {/* Enhanced Floating Navigation */}
      <FloatingNavigation />

      {/* Main Content */}
      <Hero />
      <About />
      <Timeline
        timelineData={timelineData}
        selectedTimelineItem={selectedTimelineItem}
        setSelectedTimelineItem={setSelectedTimelineItem}
      />
      <Portfolio
        portfolioItems={portfolioItems}
        filteredItems={filteredItems}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <Contact />
      <Footer />

      {/* Enhanced Timeline Modal */}
      <TimelineModal item={selectedTimelineItem} onClose={() => setSelectedTimelineItem(null)} />
    </div>
  )
}
