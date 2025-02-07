"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { LucideIcon } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext" // Import the language context

// Define translations for the card content
const cardTranslations = {
  en: {
    specialistDoctors: "Specialist Doctors",
    bookAppointment: "Book Appointment",
  },
  ar: {
    specialistDoctors: "الأطباء المتخصصون",
    bookAppointment: "حجز موعد",
  },
  fr: {
    specialistDoctors: "Médecins Spécialistes",
    bookAppointment: "Prendre Rendez-vous",
  }
}

interface ServiceCardProps {
  title: {
    en: string
    ar: string
    fr: string
  }
  description: {
    en: string
    ar: string
    fr: string
  }
  icon: LucideIcon
  color: string
  features: {
    en: string[]
    ar: string[]
    fr: string[]
  }
  specialists: number
  availability: {
    en: string
    ar: string
    fr: string
  }
  index: number
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  color,
  features,
  specialists,
  availability,
  index,
}: ServiceCardProps) {
  const { language } = useLanguage() // Get the current language
  const t = cardTranslations[language] || cardTranslations.en // Fallback to English if translation is missing

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="relative h-full overflow-hidden border-none shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div
          className={`absolute inset-0 opacity-10 ${color}`}
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 85%)",
          }}
        />
        <div className="relative p-6 h-full">
          <div className="flex items-start justify-between mb-6">
            <div className={`p-3 rounded-2xl ${color}`}>
              <Icon className="h-8 w-8 text-white" />
            </div>
            <Badge variant="outline" className="font-semibold">
              {availability[language]}
            </Badge>
          </div>

          <h3 className="text-2xl font-bold font-display mb-3 tracking-tight">
            {title[language]}
          </h3>

          <p className="text-muted-foreground mb-6 font-medium">
            {description[language]}
          </p>

          <div className="space-y-4 mb-8">
            {features[language].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + i * 0.1 }}
                className="flex items-center gap-2"
              >
                <div className={`h-2 w-2 rounded-full ${color}`} />
                <span className="text-sm font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-auto space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {t.specialistDoctors}
                </p>
                <p className="text-2xl font-bold font-display">{specialists}+</p>
              </div>
              <Button variant="outline" className="rounded-full font-semibold">
                {t.bookAppointment}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}