"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Wifi, 
  Car, 
  Wind, 
  Coffee, 
  Tv, 
  ChefHat,
  Waves,
  Dumbbell,
  Wine,
  Shield,
  Sparkles,
  Sun,
  Music,
  Gamepad2,
  Bath,
  WashingMachine,
  Utensils,
  BookOpen,
  Baby,
  Heart
} from "lucide-react";

const amenityCategories = {
  essentials: {
    title: "Essential Amenities",
    description: "Everything you need for a comfortable stay",
    items: [
      { icon: Wifi, name: "High-Speed WiFi", description: "Fiber optic throughout property" },
      { icon: Wind, name: "Air Conditioning", description: "In all rooms and living areas" },
      { icon: Car, name: "Private Parking", description: "Secure gated parking for 2 cars" },
      { icon: Shield, name: "Security System", description: "24/7 monitoring and safe" },
      { icon: WashingMachine, name: "Laundry", description: "Washer & dryer available" },
      { icon: Tv, name: "Entertainment", description: "Smart TVs with streaming services" }
    ]
  },
  kitchen: {
    title: "Kitchen & Dining",
    description: "Fully equipped for gourmet cooking",
    items: [
      { icon: Coffee, name: "Coffee Station", description: "Espresso machine & French press" },
      { icon: ChefHat, name: "Chef's Kitchen", description: "Professional-grade appliances" },
      { icon: Wine, name: "Wine Cooler", description: "Temperature-controlled storage" },
      { icon: Utensils, name: "Dining Setup", description: "Service for 12 guests" },
      { icon: Sparkles, name: "Dishwasher", description: "Two quiet dishwashers" },
      { icon: BookOpen, name: "Cookbook Library", description: "Caribbean cuisine collection" }
    ]
  },
  outdoor: {
    title: "Outdoor Living",
    description: "Your private paradise",
    items: [
      { icon: Waves, name: "Infinity Pool", description: "Heated with ocean views" },
      { icon: Sun, name: "Sun Loungers", description: "Premium poolside furniture" },
      { icon: Dumbbell, name: "Beach Access", description: "Private path to beach" },
      { icon: Music, name: "Outdoor Speakers", description: "Weatherproof sound system" },
      { icon: Sparkles, name: "BBQ Grill", description: "Gas grill with dining area" },
      { icon: Bath, name: "Outdoor Shower", description: "Rinse off after the beach" }
    ]
  },
  family: {
    title: "Family Friendly",
    description: "Welcoming guests of all ages",
    items: [
      { icon: Baby, name: "Baby Equipment", description: "Crib & high chair available" },
      { icon: Gamepad2, name: "Game Room", description: "Board games & gaming console" },
      { icon: Heart, name: "Pool Safety", description: "Fence available on request" },
      { icon: BookOpen, name: "Children's Books", description: "Library of kids' favorites" },
      { icon: Tv, name: "Kids' Channels", description: "Family-friendly programming" },
      { icon: Sun, name: "Beach Toys", description: "Buckets, shovels & floaties" }
    ]
  }
};

const additionalServices = [
  { name: "Private Chef", description: "Available for hire", price: "From $150/day" },
  { name: "Daily Housekeeping", description: "Included in rental", price: "Included" },
  { name: "Airport Transfer", description: "Round-trip available", price: "$120" },
  { name: "Grocery Pre-stocking", description: "Fill the fridge before arrival", price: "Cost + 20%" },
  { name: "Massage Services", description: "In-villa spa treatments", price: "From $100" },
  { name: "Boat Charter", description: "Private yacht excursions", price: "On request" }
];

export default function AmenitiesPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1600&h=600&fit=crop"
            alt="Villa Amenities"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 to-charcoal/60" />
        </motion.div>
        
        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="font-serif text-5xl md:text-7xl text-white mb-4">
                Amenities
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Every detail thoughtfully curated for your comfort and enjoyment
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-serif text-4xl mb-6">
              Luxury in Every Detail
            </h2>
            <p className="text-stone text-lg">
              Villa 156 offers an exceptional array of amenities designed to exceed 
              the expectations of the most discerning travelers. From state-of-the-art 
              technology to thoughtful touches throughout, we&apos;ve created a space where 
              luxury meets comfort.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Amenity Categories */}
      {Object.entries(amenityCategories).map(([key, category], categoryIndex) => (
        <section 
          key={key} 
          className={categoryIndex % 2 === 0 ? "py-20 bg-white" : "py-20"}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h3 className="font-serif text-3xl mb-4">{category.title}</h3>
              <p className="text-stone max-w-2xl mx-auto">{category.description}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <item.icon className="w-10 h-10 text-gold mb-4" />
                      <h4 className="font-serif text-xl mb-2">{item.name}</h4>
                      <p className="text-stone text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Additional Services */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl mb-4">Additional Services</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Enhance your stay with our premium services designed to make your vacation truly effortless
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors"
              >
                <h4 className="font-serif text-xl mb-2">{service.name}</h4>
                <p className="text-white/70 text-sm mb-3">{service.description}</p>
                <p className="text-gold font-medium">{service.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl mb-6">
                Designed for Unforgettable Stays
              </h2>
              <p className="text-stone mb-6">
                Every amenity at Villa 156 has been carefully selected to ensure your 
                Caribbean escape is nothing short of perfection. From the moment you 
                arrive, you&apos;ll find everything you need for relaxation, entertainment, 
                and creating lasting memories.
              </p>
              <p className="text-stone mb-8">
                Our commitment to excellence extends beyond the physical amenities. 
                Our concierge team is available to arrange any additional services or 
                experiences you desire, ensuring your stay is tailored to your exact preferences.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>Complimentary welcome basket with local treats</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>Beach towels and premium toiletries provided</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>24/7 emergency contact support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>Complimentary mid-stay cleaning for 7+ night stays</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
                alt="Luxury villa interior"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}