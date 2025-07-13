"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { siteConfig } from "@/lib/constants"

export function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 400])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&q=90"
          alt="Villa Ora di Oro"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 h-full flex flex-col items-center justify-center text-white px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6"
          >
            {siteConfig.name}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-lg md:text-xl tracking-[0.2em] uppercase mb-8"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="/villa"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-charcoal hover:bg-white/90 transition-colors duration-300"
            >
              Discover the Villa
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-white hover:bg-white hover:text-charcoal transition-all duration-300"
            >
              Check Availability
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 1.7,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
          aria-label="Scroll to content"
        >
          <ChevronDown size={32} className="animate-bounce" />
        </motion.button>
      </motion.div>
    </section>
  )
}