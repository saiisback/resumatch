"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import CustomCursor from "@/components/custom-cursor"
import FloatingNavbar from "@/components/floating-navbar"
import HeroSection from "@/components/hero-section"
import BrandCarousel from "@/components/brand-carousel"
import StatsSection from "@/components/stats-section"
import ProblemsSection from "@/components/problems-section"
import SolutionsSection from "@/components/solutions-section"
import TestimonialsSection from "@/components/testimonials-section"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function ResumatchPlatform() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <CustomCursor />

      
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(74,58,255,0.1)_25%,rgba(74,58,255,0.1)_26%,transparent_27%,transparent_74%,rgba(74,58,255,0.1)_75%,rgba(74,58,255,0.1)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(0,255,136,0.05)_25%,rgba(0,255,136,0.05)_26%,transparent_27%,transparent_74%,rgba(0,255,136,0.05)_75%,rgba(0,255,136,0.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
        </div>


        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#4A3AFF] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <FloatingNavbar />
        <HeroSection />
        <BrandCarousel />
        <StatsSection />
        <ProblemsSection />
        <SolutionsSection />
        <TestimonialsSection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  )
}
