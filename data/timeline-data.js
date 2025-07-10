/**
 * Timeline/Resume data for education and work experience
 * Used by: Timeline component, TimelineModal component
 */

export const timelineData = [
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
