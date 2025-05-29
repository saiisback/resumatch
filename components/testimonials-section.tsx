"use client"

import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      company: "Google",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Resumatch.io completely transformed my job search. The AI-powered resume optimization helped me land interviews at top tech companies.",
    },
    {
      name: "Marcus Johnson",
      role: "Product Manager",
      company: "Microsoft",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "The interview practice feature with AI feedback was a game-changer. I felt confident and prepared for every interview.",
    },
    {
      name: "Emily Rodriguez",
      role: "Data Scientist",
      company: "Netflix",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "The referral insights feature helped me discover connections I never knew I had. Got my dream job through a referral!",
    },
    {
      name: "David Kim",
      role: "UX Designer",
      company: "Apple",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "The cover video feature set me apart from other candidates. Employers loved seeing my personality before the interview.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            Success <span className="text-[#00FF88]">Stories</span>
          </h2>
          <p className="text-gray-400 text-lg font-mono">What our users are saying</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-8">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-[#4A3AFF]/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>

            <div className="flex-1 max-w-2xl">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 overflow-hidden">
                  {/* 3D Tilt Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#4A3AFF]/10 via-transparent to-[#00FF88]/10 rounded-2xl"
                    animate={{
                      rotateY: [0, 2, 0],
                      rotateX: [0, 1, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex items-center justify-center gap-1 mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="w-5 h-5 text-[#00FF88] fill-current" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-xl text-gray-300 text-center mb-8 leading-relaxed">
                      "{testimonials[currentIndex].text}"
                    </blockquote>

                    {/* User Info */}
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4A3AFF] to-[#00FF88] p-0.5">
                        <img
                          src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-white">{testimonials[currentIndex].name}</div>
                        <div className="text-sm text-gray-400 font-mono">
                          {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-[#4A3AFF]/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#4A3AFF]" : "bg-gray-600"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
