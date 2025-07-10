/**
 * About section with categorized skills and enhanced styling
 * Used by: Main Portfolio component
 */

import { aboutContent } from "../data/about-content"
import { AnimatedSection } from "./AnimatedSection"
import { TechBadge } from "./TechBadge"

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-stone-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-red-600 bg-clip-text text-transparent mb-4">
              {aboutContent.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{aboutContent.subtitle}</p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedSection animation="fade-right" delay={200}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-300 to-orange-300 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="About me"
                className="relative w-full rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={400}>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{aboutContent.journey.title}</h3>

              {aboutContent.journey.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-600 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Enhanced Skills Section */}
        <div className="space-y-12">
          {/* Hard Skills */}
          <AnimatedSection animation="fade-up" delay={600}>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {aboutContent.skills.hardSkills.title}
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {Object.entries(aboutContent.skills.hardSkills.categories).map(([key, category], index) => (
                  <AnimatedSection key={key} animation="scale" delay={800 + index * 100}>
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border border-red-100 hover:shadow-lg transition-all duration-300 group">
                      <h4 className="font-semibold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                        {category.title}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((skill, skillIndex) => (
                          <TechBadge key={skillIndex} tech={skill} />
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Soft Skills */}
          <AnimatedSection animation="fade-up" delay={1000}>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {aboutContent.skills.softSkills.title}
              </h3>

              <div className="grid md:grid-cols-4 gap-4">
                {aboutContent.skills.softSkills.items.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-lime-50 to-green-50 p-4 rounded-lg text-center border border-lime-100 hover:shadow-md hover:scale-105 transition-all duration-300 group"
                  >
                    <span className="text-gray-700 font-medium group-hover:text-green-600 transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Other Skills */}
          <AnimatedSection animation="fade-up" delay={1200}>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {aboutContent.skills.otherSkills.title}
              </h3>

              <div className="grid md:grid-cols-4 gap-4">
                {aboutContent.skills.otherSkills.items.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg text-center border border-blue-100 hover:shadow-md hover:scale-105 transition-all duration-300 group"
                  >
                    <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
