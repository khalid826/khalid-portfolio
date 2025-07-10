"use client"

/**
 * Contact section with Gmail-integrated contact form
 * Used by: Main Portfolio component
 */

import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react"
import { personalInfo } from "../data/personal-info"
import { AnimatedSection } from "./AnimatedSection"

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Create Gmail compose URL with pre-filled data
    const gmailComposeUrl = new URL("https://mail.google.com/mail/u/0/")
    gmailComposeUrl.hash = "compose"

    const searchParams = new URLSearchParams({
      to: personalInfo.email,
      subject: formData.subject || "Portfolio Contact Form",
      body: `Hi ${personalInfo.name},

${formData.message}

Best regards,
${formData.firstName} ${formData.lastName}
${formData.email}`,
    })

    // Open Gmail compose in new tab
    window.open(`${gmailComposeUrl.toString()}?${searchParams.toString()}`, "_blank")

    // Optional: Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-red-900 to-orange-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-red-200">Let's work together on your next project</p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact information */}
          <AnimatedSection animation="fade-right" delay={200}>
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="p-3 bg-red-500/20 rounded-full mr-4 group-hover:bg-red-500/30 transition-colors">
                    <Mail className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-red-200 hover:text-white transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="p-3 bg-red-500/20 rounded-full mr-4 group-hover:bg-red-500/30 transition-colors">
                    <Phone className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href={`tel:${personalInfo.phone}`} className="text-red-200 hover:text-white transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="p-3 bg-red-500/20 rounded-full mr-4 group-hover:bg-red-500/30 transition-colors">
                    <MapPin className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-red-200">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Enhanced social media links */}
              <div className="mt-12">
                <h4 className="text-xl font-bold mb-6">Follow Me</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, url: personalInfo.social.github, label: "GitHub" },
                    { icon: Linkedin, url: personalInfo.social.linkedin, label: "LinkedIn" },
                    { icon: Twitter, url: personalInfo.social.twitter, label: "Twitter" },
                  ].map(({ icon: Icon, url, label }) => (
                    <a
                      key={label}
                      href={url}
                      className="group p-3 bg-red-500/20 rounded-full hover:bg-red-500/30 transition-all duration-200 hover:scale-110"
                      aria-label={label}
                    >
                      <Icon className="w-6 h-6 text-red-200 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Enhanced contact form */}
          <AnimatedSection animation="fade-left" delay={400}>
            <div>
              <h3 className="text-2xl font-bold mb-8">Send Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium mb-2 group-focus-within:text-red-300 transition-colors">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-red-900/30 border border-red-700/50 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-red-300 transition-all duration-200 hover:border-red-600/50"
                      placeholder="John"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium mb-2 group-focus-within:text-red-300 transition-colors">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-red-900/30 border border-red-700/50 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-red-300 transition-all duration-200 hover:border-red-600/50"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium mb-2 group-focus-within:text-red-300 transition-colors">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-red-900/30 border border-red-700/50 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-red-300 transition-all duration-200 hover:border-red-600/50"
                    placeholder="john.doe@email.com"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium mb-2 group-focus-within:text-red-300 transition-colors">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-red-900/30 border border-red-700/50 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-red-300 transition-all duration-200 hover:border-red-600/50"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium mb-2 group-focus-within:text-red-300 transition-colors">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-red-900/30 border border-red-700/50 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-red-300 transition-all duration-200 hover:border-red-600/50 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 rounded-lg font-medium transition-all duration-300 hover:from-red-700 hover:to-orange-700 hover:shadow-xl hover:scale-105 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send via Gmail
                </button>

                <p className="text-sm text-red-300 text-center">
                  This will open Gmail with your message pre-filled for easy sending.
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
