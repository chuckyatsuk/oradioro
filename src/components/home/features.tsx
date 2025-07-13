"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Waves, Sun, Palmtree, Home } from "lucide-react"

const features = [
  {
    icon: Waves,
    title: "Private Beach Access",
    description: "Steps away from pristine white sand beaches and crystal-clear Caribbean waters"
  },
  {
    icon: Sun,
    title: "Infinity Pool",
    description: "Spectacular oceanfront infinity pool with panoramic views of the sunset"
  },
  {
    icon: Palmtree,
    title: "Tropical Gardens",
    description: "Lush landscaped gardens providing privacy and natural beauty"
  },
  {
    icon: Home,
    title: "Luxury Amenities",
    description: "Full concierge service, private chef, and world-class hospitality"
  }
]

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 text-foreground">
            An Exceptional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every detail has been carefully curated to ensure your stay transcends expectations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-gold">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}