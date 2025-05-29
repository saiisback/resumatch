"use client"

import { motion } from "framer-motion"
import { Play, ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-24 pb-16">
      {/* Scanlines Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_98%,rgba(74,58,255,0.3)_100%)] bg-[length:100%_4px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-black leading-tight"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              <span className="block">All-in-One</span>
              <span className="block bg-gradient-to-r from-[#4A3AFF] via-[#00FF88] to-[#4A3AFF] bg-clip-text text-transparent">
                Resume, Interview
              </span>
              <span className="block">& Referral Platform</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
              style={{ fontFamily: "ui-monospace, monospace" }}
            >
              Create ATS-friendly resumes, record AI-reviewed interviews, add a cover video, and unlock referral
              insights—all in one place.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-6"
            >
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-[#4A3AFF] to-[#00FF88] rounded-lg font-semibold text-black overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00FF88] to-[#4A3AFF] opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(74, 58, 255, 0.5)",
                      "0 0 40px rgba(0, 255, 136, 0.5)",
                      "0 0 20px rgba(74, 58, 255, 0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Build Your Resume
                  <ArrowRight className="w-5 h-5" />
                </span>
              </motion.button>

              <motion.button
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 rounded-full border-2 border-[#4A3AFF] flex items-center justify-center">
                  <Play className="w-5 h-5 text-[#4A3AFF]" />
                </div>
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Platform Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Holographic Glass Card */}
              <motion.div
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 overflow-hidden"
                animate={{
                  rotateY: [0, 5, 0],
                  rotateX: [0, 2, 0],
                }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                style={{
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                }}
              >
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#4A3AFF]/20 via-transparent to-[#00FF88]/20 p-[1px]">
                  <div className="w-full h-full bg-black/50 rounded-2xl" />
                </div>

                {/* Platform UI Mockup */}
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-xs text-gray-400 font-mono">resumatch.io/dashboard</div>
                  </div>

                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-[#4A3AFF] to-transparent rounded w-3/4" />
                    <div className="h-3 bg-gray-600 rounded w-1/2" />
                    <div className="h-3 bg-gray-700 rounded w-2/3" />

                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="h-20 bg-gradient-to-br from-[#4A3AFF]/20 to-[#00FF88]/20 rounded-lg border border-[#4A3AFF]/30" />
                      <div className="h-20 bg-gradient-to-br from-[#00FF88]/20 to-[#4A3AFF]/20 rounded-lg border border-[#00FF88]/30" />
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-[#4A3AFF] rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#00FF88] rounded-full"
                  animate={{
                    y: [0, 10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
