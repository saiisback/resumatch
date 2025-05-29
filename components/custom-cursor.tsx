"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    document.addEventListener("mousemove", updateMousePosition)

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]')
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      document.removeEventListener("mousemove", updateMousePosition)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="w-full h-full border-2 border-[#4A3AFF] rounded-full bg-transparent">
          <div className="w-2 h-2 bg-[#00FF88] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-[#4A3AFF] rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 35 }}
      />
    </>
  )
}
