"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    Product: ["Features", "Templates", "Pricing", "API"],
    Company: ["About", "Blog", "Careers", "Press"],
    Resources: ["Help Center", "Community", "Guides", "Status"],
    Legal: ["Privacy", "Terms", "Security", "Cookies"],
  }

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ]

  return (
    <footer className="relative py-24 border-t border-white/10">
      {/* Radar Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 border border-[#4A3AFF]/20 rounded-full"
          style={{ transform: "translate(-50%, -50%)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 border border-[#00FF88]/20 rounded-full"
          style={{ transform: "translate(-50%, -50%)" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32 border border-[#4A3AFF]/30 rounded-full"
          style={{ transform: "translate(-50%, -50%)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-[#4A3AFF] to-[#00FF88] bg-clip-text text-transparent mb-4">
                Resumatch.io
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                The future of resume optimization and career advancement. Powered by AI, designed for success.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-[#4A3AFF]/20 transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-4 grid md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-white font-semibold mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <li key={link}>
                      <motion.a
                        href="#"
                        className="text-gray-400 hover:text-[#4A3AFF] transition-colors text-sm"
                        whileHover={{ x: 5 }}
                      >
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-gray-400 text-sm font-mono">© 2024 Resumatch.io. All rights reserved.</div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <motion.a href="#" className="hover:text-white transition-colors" whileHover={{ y: -2 }}>
              Privacy Policy
            </motion.a>
            <motion.a href="#" className="hover:text-white transition-colors" whileHover={{ y: -2 }}>
              Terms of Service
            </motion.a>
            <motion.a href="#" className="hover:text-white transition-colors" whileHover={{ y: -2 }}>
              Cookie Policy
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
