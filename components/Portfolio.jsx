"use client"

/**
 * Portfolio section with category filtering and project showcase
 * Used by: Main Portfolio component
 */

import { useState } from "react"
import { portfolioCategories, portfolioItems } from "../data/portfolio-data"
import { PortfolioCard } from "./PortfolioCard"

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  // Filter items based on selected category
  const filteredItems =
    activeCategory === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-800 to-orange-800 bg-clip-text text-transparent mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-amber-700">Showcasing solutions that make a difference</p>
        </div>

        {/* Category filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {portfolioCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all font-medium ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg"
                  : "bg-white text-amber-700 hover:bg-gradient-to-r hover:from-amber-100 hover:to-orange-100 border border-amber-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio items */}
        <div className="space-y-16">
          {filteredItems.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
