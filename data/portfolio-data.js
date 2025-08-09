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
      // { label: "Award Details", url: "#" },
      // { label: "Game Demo", url: "#" },
    ],
  },
  {
    id: 2,
    title: "Gorilla Galore",
    category: "game-dev",
    image: "/placeholder.svg?height=400&width=800",
    description:
      "A 2D platformer game that combines elements of platforming, puzzle-solving, and exploration. The game features a gorilla that must navigate through a series of challenging levels to reach the top of the mountain.",
    problem:
      "Retro-style platformer games are becoming increasingly popular, but there is a lack of modern touch in the genre.",
    solution:
      "Created a 2D platformer game that combines elements of platforming and fast-paced action. The game features a kid who had a dream to fight off the gorilla while saving his family members.",
    technologies: ["Unity Engine", "C#", "Game Development", "2D/3D Assets", "Creative Design"],
    links: [
      // { label: "Award Certificate", url: "#" },
      // { label: "Project Showcase", url: "#" },
    ],
  },
  {
    id: 3,
    title: "Liburanku Travel App",
    category: "web-app",
    image: "/placeholder.svg?height=400&width=800",
    description:
      "A travel website that allows users to find and book travel packages. The website features search feature, filter feature, and complete booking feature.",
    problem:
      "Travel website often feels like a cluttered mess. It's hard to find the information you need, and the design is often not user-friendly. You could simply be overwhelmed by the amount of information.",
    solution:
      "Developed a travel website that allows users to find and book travel packages straightforwardly. Not only able to help user traveling, but also able to help admin to manage the content.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Responsive Design"],
    links: [
      // { label: "Case Study", url: "#" },
      // { label: "Technical Details", url: "#" },
    ],
  },
  {
    id: 4,
    title: "BOI Research Translation Project",
    category: "translation",
    image: "/placeholder.svg?height=400&width=800",
    description:
      "Comprehensive English-Indonesian translation project involving text and audio interviews, bridging cultural and linguistic gaps.",
    problem:
      "Research interviews conducted in English needed accurate translation to Indonesian while maintaining cultural context and ensuring grammatical accuracy for local audiences.",
    solution:
      "Transcribed audio recordings into text-formatted conversations, performed grammar checks to bridge cultural gaps, and translated 16 interviews averaging 15,000 words each with high accuracy and cultural sensitivity.",
    technologies: ["English-Indonesian Translation", "Transcription", "Grammar Proofing", "Cultural Localization"],
    links: [
      // { label: "Translation Samples", url: "#" },
      // { label: "Project Overview", url: "#" },
    ],
  },
  {
    id: 5,
    title: "D'BALCON Cafe Website",
    category: "web-app",
    image: "/placeholder.svg?height=400&width=800",
    description:
      "A website for a cafe that allows users to view the menu, book a table, and contact the cafe.",
    problem:
      "Sometimes, you just want to have a website for your cafe. But, you don't want to spend too much time on it.",
    solution:
      "Created a website for a cafe that allows users to view the menu, book a table, and contact the cafe. The website is designed to be simple and easy to use because all activities will be redirected into whatsapp.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Responsive Design"],
    links: [
      // { label: "Game Portfolio", url: "#" },
      // { label: "Art Showcase", url: "#" },
    ],
  },
  // {
  //   id: 6,
  //   title: "Animal Trafficking Awareness Thesis",
  //   category: "web-app",
  //   image: "/placeholder.svg?height=400&width=800",
  //   description:
  //     "Published thesis highlighting animal trafficking issues in Indonesia, raising awareness through research and digital presentation.",
  //   problem:
  //     "Animal trafficking in Indonesia lacks sufficient public awareness and research documentation, making it difficult to address the issue effectively and garner support for conservation efforts.",
  //   solution:
  //     "Conducted comprehensive research on animal trafficking issues in Indonesia, published findings in a thesis that raises awareness and provides valuable insights for conservation efforts and policy development.",
  //   technologies: ["Research", "Documentation", "Digital Presentation", "Awareness Campaign"],
  //   links: [
  //     { label: "Thesis Paper", url: "#" },
  //     { label: "Research Summary", url: "#" },
  //   ],
  // },
]
