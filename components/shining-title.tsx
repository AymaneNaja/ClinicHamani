"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ShiningTitleProps {
  title: string
  className?: string
}

export function ShiningTitle({ title, className }: ShiningTitleProps) {
  return (
    <div className={cn("relative", className)}>
      <motion.h1
        className="relative text-4xl font-bold md:text-5xl lg:text-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent -z-10 animate-shine" />
    </div>
  )
}

