"use client"

/**
 * Interactive timeline component for resume/experience section
 * Used by: Main Portfolio component
 */

import { Calendar, Building, MapPinIcon } from "lucide-react"
import { timelineData } from "../data/timeline-data"
import { useModal } from "../hooks/useModal"
import { TimelineModal } from "./TimelineModal"

export const Timeline = () => {
  const { modalData, openModal, closeModal } = useModal()

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-800 to-orange-800 bg-clip-text text-transparent mb-4">
            My Journey
          </h2>
          <p className="text-xl text-amber-700">Click on any milestone to explore the details</p>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-amber-300 to-orange-400 h-full"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div key={item.id} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  {/* Timeline item card */}
                  <div
                    onClick={() => openModal(item)}
                    className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer border border-amber-200 hover:border-amber-300 group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-2xl font-bold text-amber-600 ${index % 2 === 0 ? "order-2" : "order-1"}`}>
                        {item.year}
                      </span>
                      <div
                        className={`${item.type === "education" ? "text-blue-600" : "text-green-600"} ${index % 2 === 0 ? "order-1" : "order-2"}`}
                      >
                        {item.type === "education" ? (
                          <Calendar className="w-5 h-5" />
                        ) : (
                          <Building className="w-5 h-5" />
                        )}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-amber-900 mb-1 group-hover:text-amber-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-amber-700 flex items-center">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      {item.place}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10">
                  <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full border-4 border-white shadow-lg"></div>
                </div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline modal */}
        <TimelineModal item={modalData} onClose={closeModal} />
      </div>
    </section>
  )
}
