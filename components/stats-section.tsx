"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    { label: "Resumes Tailored", value: 50000, suffix: "+" },
    { label: "Resume Templates Available", value: 150, suffix: "+" },
    { label: "Interview Sessions Conducted", value: 25000, suffix: "+" },
  ]

  return (
    <section ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            Platform <span className="text-[#4A3AFF]">Statistics</span>
          </h2>
          <p className="text-gray-400 text-lg font-mono">Real-time performance metrics</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat, index, isInView }: { stat: any; index: number; isInView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const increment = stat.value / 100
        const interval = setInterval(() => {
          setCount((prev) => {
            if (prev >= stat.value) {
              clearInterval(interval)
              return stat.value
            }
            return Math.min(prev + increment, stat.value)
          })
        }, 20)
        return () => clearInterval(interval)
      }, index * 200)
      return () => clearTimeout(timer)
    }
  }, [isInView, stat.value, index])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative group"
    >
      <div className="relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden">
        {/* Glowing Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#4A3AFF]/20 via-transparent to-[#00FF88]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Radial Progress Ring */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke="rgba(74, 58, 255, 0.2)" strokeWidth="2" fill="none" />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 45}`}
              initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
              animate={
                isInView
                  ? {
                      strokeDashoffset: 2 * Math.PI * 45 * (1 - count / stat.value),
                    }
                  : {}
              }
              transition={{ duration: 2, delay: index * 0.2 }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4A3AFF" />
                <stop offset="100%" stopColor="#00FF88" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4A3AFF] font-mono">
                {Math.floor(count).toLocaleString()}
                {stat.suffix}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-semibold text-white mb-2">{stat.label}</h3>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#4A3AFF] to-[#00FF88] mx-auto" />
        </div>
      </div>
    </motion.div>
  )
}
