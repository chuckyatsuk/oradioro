"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-10 h-10 text-gold" />
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
            Something Went Wrong
          </h1>
          
          <p className="text-stone text-lg mb-8">
            We apologize for the inconvenience. Our team has been notified and is working to resolve this issue.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <Button
            onClick={() => reset()}
            size="lg"
            className="bg-charcoal text-white hover:bg-charcoal/90"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
          
          <div>
            <Link href="/">
              <Button size="lg" variant="outline">
                <Home className="w-4 h-4 mr-2" />
                Return Home
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-stone/20"
        >
          <p className="text-sm text-stone">
            Need immediate assistance?
          </p>
          <p className="text-sm font-medium text-charcoal mt-1">
            Call us at +599 9 123 4567
          </p>
        </motion.div>
      </div>
    </main>
  );
}