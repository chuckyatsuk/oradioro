"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = {
  exterior: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
      alt: "Villa exterior with infinity pool",
      caption: "Stunning oceanfront villa with private infinity pool"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop",
      alt: "Villa facade at sunset",
      caption: "Modern Caribbean architecture at golden hour"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop",
      alt: "Pool and deck area",
      caption: "Expansive deck with ocean views"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&h=800&fit=crop",
      alt: "Garden entrance",
      caption: "Lush tropical gardens surround the property"
    }
  ],
  interior: [
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop",
      alt: "Living room",
      caption: "Open-concept living with panoramic views"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
      alt: "Master bedroom",
      caption: "Luxurious master suite with ocean views"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop",
      alt: "Kitchen",
      caption: "Gourmet kitchen with premium appliances"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&h=800&fit=crop",
      alt: "Bathroom",
      caption: "Spa-inspired bathroom with luxury fixtures"
    }
  ],
  views: [
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=1200&h=800&fit=crop",
      alt: "Beach view",
      caption: "Private beach access steps from your door"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop",
      alt: "Sunset view",
      caption: "Breathtaking sunsets from the infinity pool"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&h=800&fit=crop",
      alt: "Ocean panorama",
      caption: "Endless Caribbean blue from every angle"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop",
      alt: "Beach loungers",
      caption: "Your private paradise awaits"
    }
  ]
};

type ImageType = {
  id: number;
  src: string;
  alt: string;
  caption: string;
};

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  const allImages = Object.values(galleryImages).flat();
  const currentImageIndex = selectedImage ? allImages.findIndex(img => img.id === selectedImage.id) : -1;

  const handlePrevious = () => {
    if (currentImageIndex > 0) {
      setSelectedImage(allImages[currentImageIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentImageIndex < allImages.length - 1) {
      setSelectedImage(allImages[currentImageIndex + 1]);
    }
  };

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
            src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1600&h=600&fit=crop"
            alt="Villa Gallery"
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
                Gallery
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Immerse yourself in the beauty of Villa 156 through our curated collection
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="exterior" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="exterior">
                Exterior
              </TabsTrigger>
              <TabsTrigger value="interior">
                Interior
              </TabsTrigger>
              <TabsTrigger value="views">
                Views
              </TabsTrigger>
            </TabsList>

            {Object.entries(galleryImages).map(([category, images]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {images.map((image, index) => (
                    <motion.div
                      key={image.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white text-sm">{image.caption}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-[95vw] w-full max-h-[95vh] h-full p-0 bg-black/95 border-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 text-white hover:bg-white/20 z-50"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-6 w-6" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-50"
                  onClick={handlePrevious}
                  disabled={currentImageIndex === 0}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-50"
                  onClick={handleNext}
                  disabled={currentImageIndex === allImages.length - 1}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>

                <div className="relative w-full h-full max-w-7xl max-h-[80vh] mx-auto">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 90vw"
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-center text-lg">{selectedImage.caption}</p>
                  <p className="text-white/60 text-center mt-2">
                    {currentImageIndex + 1} / {allImages.length}
                  </p>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </main>
  );
}