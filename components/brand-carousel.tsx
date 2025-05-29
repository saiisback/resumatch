"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function BrandCarousel() {
  const brands = [
    { name: "Google", logo: "/logos/google.svg", width: 100 },
    { name: "Apple", logo: "/logos/apple.svg", width: 40 },
    { name: "Amazon", logo: "/logos/amazon.svg", width: 100 },
    { name: "Meta", logo: "/logos/meta.svg", width: 90 },
    { name: "Netflix", logo: "/logos/netflix.svg", width: 90 },
    { name: "Tesla", logo: "/logos/tesla.svg", width: 80 },
    { name: "Spotify", logo: "/logos/spotify.svg", width: 100 },
    { name: "Uber", logo: "/logos/uber.svg", width: 70 },
    { name: "Airbnb", logo: "/logos/airbnb.svg", width: 100 },
    { name: "X", logo: "/logos/X.svg", width: 50 },
    { name: "GitHub", logo: "/logos/github.svg", width: 90 },
    { name: "Stripe", logo: "/logos/stripe.svg", width: 80 },
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4A3AFF]/5 via-transparent to-[#00FF88]/5 opacity-30" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-1">Trusted by professionals at</h2>
          <div className="w-20 h-px bg-gradient-to-r from-[#4A3AFF] to-[#00FF88] mx-auto opacity-40" />
        </motion.div>

        <div className="relative mx-auto max-w-screen-xl">
          {/* Fade edges with transparent gradients that match your site background */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r f z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l z-10" />

          {/* Container with no additional masking that might cause the "black box" effect */}
          <div className="overflow-hidden">
            {/* Scrolling Brands */}
            <motion.div
              className="flex gap-20 items-center justify-start py-6"
              animate={{ x: [0, -1800] }}
              transition={{
                duration: 60,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {[...brands, ...brands].map((brand, index) => (
                <motion.div
                  key={`${brand.name}-${index}`}
                  className="flex-shrink-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
                  whileHover={{ 
                    scale: 1.1,
                    filter: "drop-shadow(0 0 12px rgba(74, 58, 255, 0.6))",
                  }}
                  initial={{ opacity: 0.6 }}
                  animate={{ 
                    opacity: [0.6, 0.8, 0.6],
                    y: [0, -3, 0] 
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.1 % 1.5,
                  }}
                >
                  <div className="h-14 flex items-center justify-center">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={brand.width}
                      height={40}
                      style={{
                        maxWidth: brand.width,
                        height: 'auto',
                        filter: "brightness(0) invert(1) drop-shadow(0 0 3px rgba(74, 58, 255, 0.6))",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
         
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-[#4A3AFF]/40"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.4, 0.8, 0.4],
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
      </div>
    </section>
  )
}