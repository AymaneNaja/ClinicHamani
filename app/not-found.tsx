'use client'

import { motion } from "framer-motion"
import { AlertCircle } from "lucide-react"
import Link from "next/link"

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 0.5 }} 
        className="text-center"
      >
        <div className="flex items-center justify-center mb-6">
          <motion.div 
            initial={{ rotate: -10 }} 
            animate={{ rotate: 10 }} 
            transition={{ yoyo: Infinity, duration: 1 }}
            className="p-4 bg-red-100 dark:bg-red-900 rounded-full"
          >
            <AlertCircle className="h-16 w-16 text-red-600 dark:text-red-400" />
          </motion.div>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Oops! The page you're looking for doesn’t exist.
        </p>
        <Link 
          href="/" 
          className="px-6 py-3 text-lg font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-all"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  )
}
