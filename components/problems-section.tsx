"use client"

import { motion } from "framer-motion"
import { FileX, Shield, AlertTriangle, User, Video, Users } from "lucide-react"

export default function ProblemsSection() {
  const problems = [
    {
      icon: FileX,
      title: "Generic Resumes",
      description: "One-size-fits-all resumes that fail to match job requirements and get lost in the pile.",
    },
    {
      icon: Shield,
      title: "ATS Rejection",
      description: "Resumes formatted incorrectly for Applicant Tracking Systems, leading to automatic rejection.",
    },
    {
      icon: AlertTriangle,
      title: "Poor Interview Prep",
      description: "Lack of practice and feedback for interviews, resulting in missed opportunities.",
    },
    {
      icon: User,
      title: "Lack of Personal Branding",
      description: "No way to showcase personality and unique value proposition to potential employers.",
    },
    {
      icon: Video,
      title: "No Video Intros",
      description: "Missing the opportunity to make a personal connection through video introductions.",
    },
    {
      icon: Users,
      title: "Limited Referral Visibility",
      description: "No insights into company connections and referral opportunities within your network.",
    },
  ]

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
            Common <span className="text-red-500">Problems</span>
          </h2>
          <p className="text-gray-400 text-lg font-mono">Issues job seekers face today</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-red-500/10 to-red-900/10 backdrop-blur-xl border border-red-500/20 rounded-2xl p-6 overflow-hidden h-full">
                {/* Glitch Effect on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
                    <problem.icon className="w-6 h-6 text-red-400" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors">
                    {problem.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {problem.description}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-red-500/20 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
