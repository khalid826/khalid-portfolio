"use client"

/**
 * Custom hook for managing modal state
 * Used by: Timeline component for timeline item modals
 */

import { useState } from "react"

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalData, setModalData] = useState(null)

  // Open modal with specific data
  const openModal = (data) => {
    setModalData(data)
    setIsOpen(true)
  }

  // Close modal and clear data
  const closeModal = () => {
    setIsOpen(false)
    setModalData(null)
  }

  return {
    isOpen,
    modalData,
    openModal,
    closeModal,
  }
}
