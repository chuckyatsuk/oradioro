"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function Introduction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">
              Where Gold Meets the Caribbean
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Nestled on the pristine shores of Curaçao, Villa Ora di Oro represents 
                the pinnacle of Caribbean luxury living. Our exclusive retreat offers 
                an unparalleled escape where sophisticated design meets natural beauty.
              </p>
              <p className="text-lg leading-relaxed">
                With five elegantly appointed bedrooms, expansive living spaces, and 
                breathtaking ocean views, every moment at Villa Ora di Oro is crafted 
                to exceed your expectations.
              </p>
              <p className="text-lg leading-relaxed">
                Experience the golden hour like never before, where time slows down 
                and luxury becomes a way of life.
              </p>
            </div>
            <motion.a
              href="/villa"
              whileHover={{ x: 10 }}
              className="inline-flex items-center mt-8 text-foreground hover:text-gold transition-colors duration-300"
            >
              <span className="text-sm tracking-wide uppercase">Explore the Villa</span>
              <span className="ml-2">→</span>
            </motion.a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=90"
              alt="Villa Ora di Oro exterior"
              fill
              className="object-cover rounded-sm"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}