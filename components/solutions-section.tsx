"use client"

import { motion } from "framer-motion"
import { Brain, Target, FileText, MessageSquare, Video } from "lucide-react"

export default function SolutionsSection() {
  const solutions = [
    {
      icon: Target,
      title: "ATS Score Checker",
      description: "Get instant score & insights and improvement tips for your resume, ensuring they pass initial ATS screening.",
      color: "from-[#4A3AFF] to-[#6B5AFF]",
    },
    {
      icon: FileText,
      title: "Tailored Resumes",
      description: "Just upload the job and the job description you are applying for our tool will automatically tailor your resume. Users can also provide custom instructions using \"Ask AI\" feature.",
      color: "from-[#00FF88] to-[#00CC6A]",
    },
    {
      icon: Brain,
      title: "AI Resume Builder from Scratch",
      description: "Build a professional resume in minutes, even if you're starting from scratch. Our AI guides you step-by-step, helping you highlight your skills, experience, and achievements to create a standout resume.",
      color: "from-[#4A3AFF] to-[#00FF88]",
    },
    {
      icon: MessageSquare,
      title: "AI Cover Letter Generator",
      description: "Create tailored cover letters in seconds. Our AI analyzes your resume and target job to craft personalized letters that highlight your strengths and align perfectly with each.",
      color: "from-[#00FF88] to-[#4A3AFF]",
    },
    {
      icon: Video,
      title: "AI Mock Interviews",
      description: "Sharpen your interview skills with realistic AI-driven sessions. Get feedback on both your answers and emotional cues like tone, confidence, and body language.",
      color: "from-[#6B5AFF] to-[#00FF88]",
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
            Our <span className="text-[#00FF88]">Solutions</span>
          </h2>
          <p className="text-gray-400 text-lg font-mono">Advanced AI-powered tools for job success</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                scale: 1.02,
                rotateY: index % 2 === 0 ? 2 : -2,
              }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden h-full">
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00FF88] transition-colors">
                    {solution.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {solution.description}
                  </p>

                  <motion.div
                    className="mt-6 w-full h-1 bg-gradient-to-r from-transparent via-[#4A3AFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      scaleX: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                {/* Floating Particles */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-[#00FF88] rounded-full opacity-60"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.5,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
