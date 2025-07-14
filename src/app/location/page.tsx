"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Plane, 
  Clock,
  Utensils,
  ShoppingBag,
  Anchor,
  Waves,
  Fish,
  Palmtree
} from "lucide-react";

const distances = [
  { place: "Hato International Airport", time: "25 minutes", icon: Plane },
  { place: "Willemstad (Capital)", time: "20 minutes", icon: MapPin },
  { place: "Mambo Beach", time: "15 minutes", icon: Waves },
  { place: "Jan Thiel Beach", time: "5 minutes", icon: Palmtree }
];

const nearbyAttractions = [
  {
    name: "Jan Thiel Beach",
    category: "Beach",
    distance: "5 min walk",
    description: "Popular beach with restaurants, bars, and water sports",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=600&h=400&fit=crop",
    icon: Waves
  },
  {
    name: "Caracas Bay Marina",
    category: "Marina",
    distance: "10 min drive",
    description: "Full-service marina with yacht charters and diving center",
    image: "https://images.unsplash.com/photo-1555998187-85d11dd07917?w=600&h=400&fit=crop",
    icon: Anchor
  },
  {
    name: "Fort Beekenburg",
    category: "Historical",
    distance: "8 min drive",
    description: "19th-century fort with panoramic views of Spanish Water",
    image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=600&h=400&fit=crop",
    icon: MapPin
  },
  {
    name: "Tugboat Diving Site",
    category: "Diving",
    distance: "12 min drive",
    description: "Famous shallow dive site perfect for snorkeling",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
    icon: Fish
  }
];

const dining = [
  {
    name: "Karakter",
    type: "Beach Restaurant",
    cuisine: "International",
    vibe: "Casual beachfront dining"
  },
  {
    name: "Vista Restaurant",
    type: "Fine Dining",
    cuisine: "French-Caribbean",
    vibe: "Romantic sunset views"
  },
  {
    name: "Plasa Bieu",
    type: "Local Cuisine",
    cuisine: "Traditional Curaçao",
    vibe: "Authentic local experience"
  },
  {
    name: "Saint Tropez Ocean Club",
    type: "Beach Club",
    cuisine: "Mediterranean",
    vibe: "Luxury beach experience"
  }
];

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1589192341509-e7bbebe4f13f?w=1600&h=800&fit=crop"
            alt="Curaçao Location"
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
                Location
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Discover the beauty of Jan Thiel Bay and explore the wonders of Curaçao
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl mb-6">Jan Thiel Bay</h2>
              <p className="text-stone mb-6">
                Villa 156 is perfectly positioned in the exclusive Jan Thiel Bay area, 
                one of Curaçao&apos;s most sought-after residential neighborhoods. This pristine 
                location offers the perfect balance of tranquility and accessibility.
              </p>
              <p className="text-stone mb-8">
                Just minutes from the island&apos;s best beaches, restaurants, and activities, 
                yet secluded enough to provide the ultimate in privacy and relaxation. 
                The area is known for its calm waters, making it ideal for swimming, 
                snorkeling, and water sports.
              </p>
              
              <div className="space-y-4">
                {distances.map((item, index) => (
                  <motion.div
                    key={item.place}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <item.icon className="w-5 h-5 text-gold" />
                    <span className="font-medium">{item.place}</span>
                    <span className="text-stone">•</span>
                    <span className="text-stone">{item.time}</span>
                  </motion.div>
                ))}
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
                src="https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=800&h=600&fit=crop"
                alt="Curaçao aerial view"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-sand rounded-lg p-8 text-center"
          >
            <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="font-serif text-2xl mb-4">Interactive Map</h3>
            <p className="text-stone mb-6">
              Explore Villa 156&apos;s location and nearby attractions on our interactive map
            </p>
            <Button variant="outline">View Full Map</Button>
          </motion.div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl mb-4">Nearby Attractions</h2>
            <p className="text-stone max-w-2xl mx-auto">
              From pristine beaches to historical sites, discover the best of Curaçao 
              just minutes from your door
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyAttractions.map((attraction, index) => (
              <motion.div
                key={attraction.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={attraction.image}
                      alt={attraction.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <attraction.icon className="w-5 h-5 text-gold" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-sm text-gold mb-1">{attraction.category}</p>
                    <h3 className="font-serif text-xl mb-2">{attraction.name}</h3>
                    <p className="text-sm text-stone mb-3">{attraction.description}</p>
                    <p className="text-sm font-medium flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-gold" />
                      {attraction.distance}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining & Shopping */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Dining */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <Utensils className="w-8 h-8 text-gold mr-3" />
                <h2 className="font-serif text-3xl">Dining</h2>
              </div>
              <p className="text-stone mb-8">
                Curaçao offers a diverse culinary scene, from beachside casual to 
                Michelin-worthy fine dining. Here are some local favorites:
              </p>
              
              <div className="space-y-6">
                {dining.map((restaurant, index) => (
                  <motion.div
                    key={restaurant.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="font-serif text-xl mb-2">{restaurant.name}</h4>
                        <p className="text-sm text-gold mb-1">{restaurant.type}</p>
                        <p className="text-stone mb-2">{restaurant.cuisine} cuisine</p>
                        <p className="text-sm italic text-stone">{restaurant.vibe}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Activities */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <ShoppingBag className="w-8 h-8 text-gold mr-3" />
                <h2 className="font-serif text-3xl">Activities</h2>
              </div>
              <p className="text-stone mb-8">
                Whether you seek adventure or relaxation, Curaçao offers endless 
                possibilities for every type of traveler.
              </p>
              
              <div className="space-y-6">
                <Card className="bg-sand">
                  <CardContent className="p-6">
                    <h4 className="font-medium text-lg mb-3">Water Activities</h4>
                    <ul className="space-y-2 text-stone">
                      <li>• Snorkeling & Diving at world-class reefs</li>
                      <li>• Deep-sea fishing charters</li>
                      <li>• Jet skiing & parasailing</li>
                      <li>• Sunset catamaran cruises</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-sand">
                  <CardContent className="p-6">
                    <h4 className="font-medium text-lg mb-3">Land Adventures</h4>
                    <ul className="space-y-2 text-stone">
                      <li>• Christoffel National Park hiking</li>
                      <li>• Historical Willemstad tours</li>
                      <li>• Ostrich farm visits</li>
                      <li>• Local art galleries & museums</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-sand">
                  <CardContent className="p-6">
                    <h4 className="font-medium text-lg mb-3">Shopping</h4>
                    <ul className="space-y-2 text-stone">
                      <li>• Floating market in Punda</li>
                      <li>• Luxury boutiques at Renaissance</li>
                      <li>• Local crafts at Marshe Bieuw</li>
                      <li>• Duty-free shopping downtown</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}