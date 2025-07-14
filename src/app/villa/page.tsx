"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bed, 
  Users, 
  Home, 
  Waves, 
  Wifi, 
  Car,
  Wind,
  Coffee,
  Tv,
  ChefHat
} from "lucide-react";

const rooms = [
  {
    id: 1,
    name: "Master Suite",
    description: "Luxurious king-sized bedroom with ocean views, en-suite bathroom, and private balcony",
    capacity: 2,
    size: "45m²",
    amenities: ["King bed", "Ocean view", "En-suite", "Balcony", "Air conditioning"],
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    name: "Ocean View Suite",
    description: "Elegant queen bedroom with panoramic sea views and modern amenities",
    capacity: 2,
    size: "35m²",
    amenities: ["Queen bed", "Sea view", "En-suite", "Work desk", "Air conditioning"],
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    name: "Garden Room",
    description: "Peaceful twin bedroom overlooking tropical gardens with flexible bed configuration",
    capacity: 2,
    size: "30m²",
    amenities: ["Twin beds", "Garden view", "Shared bathroom", "Air conditioning"],
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&h=600&fit=crop"
  }
];

const villaAmenities = [
  { icon: Wifi, name: "High-speed WiFi", description: "Fiber optic throughout" },
  { icon: Car, name: "Private parking", description: "Secure gated parking" },
  { icon: Wind, name: "Air conditioning", description: "In all bedrooms" },
  { icon: Coffee, name: "Gourmet kitchen", description: "Fully equipped" },
  { icon: Tv, name: "Entertainment", description: "Smart TVs & sound system" },
  { icon: ChefHat, name: "Private chef", description: "Available on request" }
];

export default function VillaPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=800&fit=crop"
            alt="Villa 156 Exterior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 to-charcoal/60" />
        </motion.div>
        
        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-4 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="font-serif text-5xl md:text-7xl text-white mb-4">
                Villa 156
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                A sanctuary of luxury and tranquility featuring three exquisite bedrooms, 
                private infinity pool, and direct beach access on Curaçao&apos;s pristine coast.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Bed className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-2xl mb-2">3 Bedrooms</h3>
              <p className="text-stone">Luxurious suites</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <Users className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-2xl mb-2">6 Guests</h3>
              <p className="text-stone">Maximum capacity</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <Home className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-2xl mb-2">300m²</h3>
              <p className="text-stone">Living space</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <Waves className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-2xl mb-2">Beachfront</h3>
              <p className="text-stone">Direct access</p>
            </motion.div>
          </div>

          {/* Tabs Section */}
          <Tabs defaultValue="rooms" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="rooms">Rooms</TabsTrigger>
              <TabsTrigger value="amenities">Amenities</TabsTrigger>
              <TabsTrigger value="layout">Layout</TabsTrigger>
            </TabsList>
            
            <TabsContent value="rooms" className="space-y-12">
              {rooms.map((room, index) => (
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative h-[300px] md:h-[400px]">
                          <Image
                            src={room.image}
                            alt={room.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-8 md:p-12">
                          <h3 className="font-serif text-3xl mb-4">{room.name}</h3>
                          <p className="text-stone mb-6">{room.description}</p>
                          
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div>
                              <p className="text-sm text-stone">Capacity</p>
                              <p className="font-medium">{room.capacity} guests</p>
                            </div>
                            <div>
                              <p className="text-sm text-stone">Size</p>
                              <p className="font-medium">{room.size}</p>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <p className="text-sm text-stone mb-2">Room amenities</p>
                            <div className="flex flex-wrap gap-2">
                              {room.amenities.map((amenity) => (
                                <span
                                  key={amenity}
                                  className="px-3 py-1 bg-sand text-sm rounded-full"
                                >
                                  {amenity}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>
            
            <TabsContent value="amenities">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {villaAmenities.map((amenity, index) => (
                  <motion.div
                    key={amenity.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardContent className="p-6 text-center">
                        <amenity.icon className="w-10 h-10 text-gold mx-auto mb-4" />
                        <h4 className="font-serif text-xl mb-2">{amenity.name}</h4>
                        <p className="text-stone text-sm">{amenity.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="layout">
              <div className="text-center py-12">
                <p className="text-stone mb-8">
                  Interactive floor plan coming soon. The villa features an open-concept design 
                  with seamless indoor-outdoor living spaces.
                </p>
                <Button variant="outline">Download Floor Plan PDF</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Experience Villa 156
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Discover the perfect blend of luxury and nature in your private Caribbean sanctuary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold text-charcoal hover:bg-gold/90">
                Check Availability
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
                View Gallery
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}