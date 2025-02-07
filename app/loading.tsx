'use client'

import { motion } from 'framer-motion'
import { HeartPulse } from 'lucide-react'

export default function LoadingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        className="flex flex-col items-center"
      >
        <HeartPulse className="h-16 w-16 text-blue-500" />
      </motion.div>
    </div>
  )
}
