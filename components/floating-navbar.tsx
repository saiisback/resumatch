"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function FloatingNavbar() {
  const rightItems = ["Sign In", "Sign Up"]
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-10 inset-x-0 mx-auto z-50 flex max-w-fit items-center justify-center"
        >
          <div className="flex items-center justify-between bg-black/20 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 gap-6">
            <motion.div
              className="text-xl font-bold bg-gradient-to-r from-[#4A3AFF] to-[#00FF88] bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Resumatch.io
            </motion.div>

            <span className="text-gray-400 hover:text-white cursor-pointer transition-colors px-4 py-2 text-sm font-medium rounded-full">
              Blog
            </span>

            <div className="flex items-center gap-2">
              {rightItems.map((item) => (
                <motion.button
                  key={item}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                    item === "Sign Up"
                      ? "bg-gradient-to-r from-[#4A3AFF] to-[#00FF88] text-black hover:shadow-lg hover:shadow-[#4A3AFF]/25"
                      : "text-gray-400 hover:text-white bg-black/20 backdrop-blur-xl border border-white/10"
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}