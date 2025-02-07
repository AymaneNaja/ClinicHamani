"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useState } from "react"

// Team Card Component
interface TeamCardProps {
  slug: string
  name: string
  role: string
  image: string
}

export function TeamCard({ slug, name, role, image }: TeamCardProps) {
  const router = useRouter()

  return (
    <motion.div
      onClick={() => router.push(`/team/${slug}`)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl p-4 "
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl cursor-pointer">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-full w-full"
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </motion.div>
      </div>
      <div className="relative mt-4 flex items-start justify-between">
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl font-bold text-gray-900"
          >
            {name}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-sm text-blue-600"
          >
            {role}
          </motion.p>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => router.push(`/team/${slug}`)}
          className="rounded-full bg-white p-2 shadow-lg transition-transform hover:bg-blue-50"
        >
          <ArrowUpRight className="h-5 w-5 text-blue-600" />
        </motion.button>
      </div>
    </motion.div>
  )
}
