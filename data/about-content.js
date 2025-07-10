/**
 * About section content with categorized skills
 * Used by: About component
 */

export const aboutContent = {
  title: "About Me",
  subtitle:
    "I'm a passionate developer and designer with over 5 years of experience creating digital solutions that make a difference.",

  journey: {
    title: "My Journey",
    paragraphs: [
      "Started as a curious computer science student, I've evolved into a versatile developer who loves solving complex problems through code and design. My expertise spans across web development, game development, and digital art.",
      "When I'm not coding, you'll find me exploring new technologies, creating digital art, or contributing to open-source projects. I believe in continuous learning and staying updated with the latest industry trends.",
    ],
  },

  skills: {
    hardSkills: {
      title: "Technical Skills",
      categories: {
        frontend: {
          title: "Frontend Development",
          items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
        },
        backend: {
          title: "Backend Development",
          items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "Redis"],
        },
        gameDev: {
          title: "Game Development",
          items: ["Unity", "C#", "Blender", "Game Design", "3D Modeling"],
        },
        design: {
          title: "Design & Creative",
          items: ["Photoshop", "Illustrator", "Figma", "UI/UX Design", "Brand Identity"],
        },
      },
    },
    softSkills: {
      title: "Soft Skills",
      items: [
        "Team Leadership",
        "Project Management",
        "Problem Solving",
        "Creative Thinking",
        "Communication",
        "Mentoring",
        "Agile Methodology",
        "Client Relations",
      ],
    },
    otherSkills: {
      title: "Other Skills",
      items: [
        "Git & Version Control",
        "CI/CD Pipelines",
        "Cloud Platforms",
        "API Integration",
        "Database Design",
        "Performance Optimization",
        "SEO & Analytics",
        "Content Strategy",
      ],
    },
  },
}
