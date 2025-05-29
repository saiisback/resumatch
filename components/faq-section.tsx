"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How does the AI resume optimization work?",
      answer:
        "Our AI analyzes job descriptions and compares them with your resume, providing specific recommendations to improve keyword matching, formatting, and content structure for better ATS compatibility.",
    },
    {
      question: "Can I practice interviews for specific companies?",
      answer:
        "Yes! Our AI interview bot can simulate interviews for specific companies and roles, using real interview questions and providing feedback on your responses, body language, and communication style.",
    },
    {
      question: "How accurate is the ATS scoring system?",
      answer:
        "Our ATS scoring system is trained on data from major ATS platforms and achieves 95%+ accuracy in predicting how well your resume will perform in automated screening processes.",
    },
    {
      question: "What video formats are supported for cover videos?",
      answer:
        "We support MP4, MOV, and WebM formats. Our platform automatically optimizes videos for web delivery and provides templates to help you create professional introductions.",
    },
    {
      question: "How does the referral mapping feature work?",
      answer:
        "We analyze your LinkedIn connections and professional network to identify potential referrers at target companies, showing you the shortest path to get introduced to hiring managers.",
    },
    {
      question: "Is my data secure and private?",
      answer:
        "Absolutely. We use enterprise-grade encryption and never share your personal information. Your resumes and videos are stored securely and only accessible by you.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
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
            Frequently Asked <span className="text-[#4A3AFF]">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg font-mono">Everything you need to know</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
                {/* Command Panel Style Border */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#4A3AFF] via-[#00FF88] to-[#4A3AFF]" />

                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                  <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-5 h-5 text-[#4A3AFF]" />
                  </motion.div>
                </motion.button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: openIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.3, delay: openIndex === index ? 0.1 : 0 }}
                      className="text-gray-400 leading-relaxed font-mono text-sm"
                    >
                      {/* Typing Effect */}
                      {openIndex === index && <TypewriterText text={faq.answer} />}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TypewriterText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("")

  useState(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 20)

    return () => clearInterval(timer)
  })

  return <span>{displayText}</span>
}
