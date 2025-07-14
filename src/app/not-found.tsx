"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, MapPin, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-cream relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1600&h=900&fit=crop"
          alt="Curaçao Beach"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/50 to-cream/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-[150px] md:text-[200px] leading-none text-charcoal/10 mb-0">
              404
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="-mt-16 md:-mt-20"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
              Lost in Paradise
            </h2>
            <p className="text-xl text-stone mb-8 max-w-lg mx-auto">
              It seems you've wandered off the beaten path. Let us guide you back to Villa 156, 
              where luxury and tranquility await.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/">
                <Button size="lg" className="bg-charcoal text-white hover:bg-charcoal/90">
                  <Home className="w-4 h-4 mr-2" />
                  Return Home
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
              </Link>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 max-w-xl mx-auto">
              <Link 
                href="/villa" 
                className="group p-4 rounded-lg hover:bg-white/50 transition-colors"
              >
                <p className="font-medium text-charcoal group-hover:text-gold transition-colors">
                  The Villa
                </p>
                <p className="text-sm text-stone">Explore our luxury suites</p>
              </Link>
              
              <Link 
                href="/gallery" 
                className="group p-4 rounded-lg hover:bg-white/50 transition-colors"
              >
                <p className="font-medium text-charcoal group-hover:text-gold transition-colors">
                  Gallery
                </p>
                <p className="text-sm text-stone">View stunning photos</p>
              </Link>
              
              <Link 
                href="/location" 
                className="group p-4 rounded-lg hover:bg-white/50 transition-colors"
              >
                <p className="font-medium text-charcoal group-hover:text-gold transition-colors">
                  Location
                </p>
                <p className="text-sm text-stone">Discover Jan Thiel Bay</p>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <div className="flex items-center justify-center space-x-2 text-stone">
              <MapPin className="w-4 h-4" />
              <p className="text-sm">Villa 156, Jan Thiel Bay, Curaçao</p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}