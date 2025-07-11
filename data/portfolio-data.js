/**
 * Portfolio projects data with real projects from Khalid's CV
 * Used by: Portfolio component, PortfolioCard component
 */

export const portfolioCategories = [
  { id: "all", label: "All Projects" },
  { id: "game-dev", label: "Game Development" },
  { id: "web-app", label: "Web Applications" },
  { id: "translation", label: "Translation Work" },
]

export const portfolioItems = [
  {
    id: 1,
    title: "Counting with Komodo",
    category: "game-dev",
    image: "/placeholder.svg?height=400&width=800",
    description:
      "Award-winning educational game that integrates mathematics with unique core mechanics. Recognized for its innovative approach to learning.",
    problem:
      "Traditional math education often lacks engagement and fails to connect abstract concepts with real-world applications, leading to decreased student motivation and retention.",
    solution:
      "Developed an interactive game that combines mathematical concepts with engaging gameplay mechanics, making learning both fun and effective. The unique core mechanic seamlessly integrates mathematics into the gaming experience.",
    technologies: ["Unity Engine", "C#", "Game Design", "2D Art", "Mathematics Integration"],
    links: [
      { label: "Award Details", url: "#" },
      { label: "Game Demo", url: "#" },
    ],
  },
  {
    id: 2,
    title: "GameXcellence 2023 Project",
    category: "game-dev",
    image: "/placeholder.svg?height=400&width=800",
    description:
      "Honorable mention at the annual global showcase and awards event for indie game development talent, demonstrating excellence in game design and development.",
    problem:
      "Indie game developers often struggle to gain recognition and visibility in the competitive gaming industry, making it difficult to showcase their talent and innovative ideas.",
    solution:
      "Created a standout game project that earned honorable mention at GameXcellence 2023, a prestigious global showcase for indie game development talent, validating the quality and innovation of the work.",
    technologies: ["Unity Engine", "C#", "Game Development", "2D/3D Assets", "Creative Design"],
    links: [
      { label: "Award Certificate", url: "#" },
      { label: "Project Showcase", url: "#" },
    ],
  },
  {
    id: 3,
    title: "PLN Enjiniring Internal Applications",
    category: "web-app",
    image: "/placeholder.svg?height=400&width=800",
    description:
      "Comprehensive internal management system for HR, Marketing, and Finance departments with responsive UI components and modular architecture.",
    problem:
      "PLN Enjiniring needed efficient internal applications to manage operations across multiple departments, but existing systems lacked modern UI/UX and modular architecture.",
    solution:
      "Developed 20+ responsive, modular UI components using CodeIgniter 3/4 and Bootstrap 4/5, designed admin-user flows across 10+ modules with PHP and MariaDB, and created dashboards for analysts and managers using Looker Studio.",
    technologies: ["PHP", "CodeIgniter 3/4", "Bootstrap 4/5", "MariaDB", "Looker Studio", "Responsive Design"],
    links: [
      { label: "Case Study", url: "#" },
      { label: "Technical Details", url: "#" },
    ],
  },
  {
    id: 4,
    title: "BOI Research Translation Project",
    category: "translation",
    image: "/placeholder.svg?height=400&width=800",
    description:
      "Comprehensive English-Indonesian translation project involving 16 interviews and six audio transcriptions, bridging cultural and linguistic gaps.",
    problem:
      "Research interviews conducted in English needed accurate translation to Indonesian while maintaining cultural context and ensuring grammatical accuracy for local audiences.",
    solution:
      "Transcribed six audio recordings into text-formatted conversations, performed grammar checks to bridge cultural gaps, and translated 16 interviews averaging 15,000 words each with high accuracy and cultural sensitivity.",
    technologies: ["English-Indonesian Translation", "Transcription", "Grammar Proofing", "Cultural Localization"],
    links: [
      { label: "Translation Samples", url: "#" },
      { label: "Project Overview", url: "#" },
    ],
  },
  {
    id: 5,
    title: "BINUS GAT LAB Game Projects",
    category: "game-dev",
    image: "/placeholder.svg?height=400&width=800",
    description:
      "Seven collaborative game projects with four selected as competition finalists, featuring complete 2D game assets created from scratch.",
    problem:
      "Game development teams needed high-quality 2D assets and comprehensive game design support to create competitive projects for various competitions and showcases.",
    solution:
      "Collaborated on seven game projects with four selected as finalists, designed and created complete 2D game assets from scratch for nine projects, and gained experience in full game design lifecycle from ideation to post-launch maintenance.",
    technologies: ["Unity Engine", "2D Art Creation", "Game Design", "Asset Design", "Team Collaboration"],
    links: [
      { label: "Game Portfolio", url: "#" },
      { label: "Art Showcase", url: "#" },
    ],
  },
  {
    id: 6,
    title: "Animal Trafficking Awareness Thesis",
    category: "web-app",
    image: "/placeholder.svg?height=400&width=800",
    description:
      "Published thesis highlighting animal trafficking issues in Indonesia, raising awareness through research and digital presentation.",
    problem:
      "Animal trafficking in Indonesia lacks sufficient public awareness and research documentation, making it difficult to address the issue effectively and garner support for conservation efforts.",
    solution:
      "Conducted comprehensive research on animal trafficking issues in Indonesia, published findings in a thesis that raises awareness and provides valuable insights for conservation efforts and policy development.",
    technologies: ["Research", "Documentation", "Digital Presentation", "Awareness Campaign"],
    links: [
      { label: "Thesis Paper", url: "#" },
      { label: "Research Summary", url: "#" },
    ],
  },
]
