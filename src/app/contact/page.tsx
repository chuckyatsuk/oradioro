"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Calendar,
  Users,
  MessageSquare
} from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  checkIn: z.string().min(1, "Check-in date is required"),
  checkOut: z.string().min(1, "Check-out date is required"),
  guests: z.string().min(1, "Number of guests is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "+599 9 123 4567",
    description: "Daily 9AM - 8PM EST"
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@villa156.com",
    description: "We'll respond within 24 hours"
  },
  {
    icon: MapPin,
    title: "Location",
    details: "Jan Thiel Bay, Curaçao",
    description: "Netherlands Antilles"
  },
  {
    icon: Clock,
    title: "Check-in/out",
    details: "3PM / 11AM",
    description: "Flexible upon request"
  }
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      guests: "",
      message: "",
    },
  });

  async function onSubmit(values: FormData) {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
    setIsSubmitting(false);
    setIsSubmitted(true);
    form.reset();
  }

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
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&h=600&fit=crop"
            alt="Contact Villa 156"
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
                Contact
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Begin your journey to paradise with a personalized consultation
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl mb-4">Get in Touch</h2>
                <p className="text-stone mb-8">
                  Our concierge team is available to assist with your booking and answer 
                  any questions about your stay at Villa 156.
                </p>
              </motion.div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="flex items-start space-x-4 p-6">
                        <item.icon className="w-6 h-6 text-gold mt-1" />
                        <div>
                          <h3 className="font-medium mb-1">{item.title}</h3>
                          <p className="text-charcoal font-medium">{item.details}</p>
                          <p className="text-sm text-stone">{item.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card>
                  <CardContent className="p-8">
                    <h2 className="font-serif text-3xl mb-6">Inquiry Form</h2>
                    
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                      >
                        <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <MessageSquare className="w-8 h-8 text-gold" />
                        </div>
                        <h3 className="font-serif text-2xl mb-2">Thank You!</h3>
                        <p className="text-stone">
                          We&apos;ve received your inquiry and will respond within 24 hours.
                        </p>
                        <Button 
                          className="mt-6"
                          onClick={() => setIsSubmitted(false)}
                        >
                          Send Another Inquiry
                        </Button>
                      </motion.div>
                    ) : (
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="firstName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>First Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="John" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="lastName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Last Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Doe" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                    <Input type="email" placeholder="john@example.com" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone (Optional)</FormLabel>
                                  <FormControl>
                                    <Input type="tel" placeholder="+1 234 567 8900" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="grid md:grid-cols-3 gap-6">
                            <FormField
                              control={form.control}
                              name="checkIn"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>
                                    <Calendar className="w-4 h-4 inline mr-2" />
                                    Check-in
                                  </FormLabel>
                                  <FormControl>
                                    <Input type="date" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="checkOut"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>
                                    <Calendar className="w-4 h-4 inline mr-2" />
                                    Check-out
                                  </FormLabel>
                                  <FormControl>
                                    <Input type="date" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="guests"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>
                                    <Users className="w-4 h-4 inline mr-2" />
                                    Guests
                                  </FormLabel>
                                  <FormControl>
                                    <Input type="number" min="1" max="6" placeholder="2" {...field} />
                                  </FormControl>
                                  <FormDescription>Max 6 guests</FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Tell us about your ideal vacation..."
                                    className="min-h-[120px]"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormDescription>
                                  Include any special requests or questions
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <Button 
                            type="submit" 
                            size="lg" 
                            className="w-full"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Sending..." : "Send Inquiry"}
                          </Button>
                        </form>
                      </Form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
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
              Ready to Experience Paradise?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Our team is standing by to help you plan the perfect Caribbean getaway.
            </p>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-charcoal"
            >
              Download Villa Brochure
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}