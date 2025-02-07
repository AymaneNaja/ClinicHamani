'use client'

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ConsultationForm } from "@/components/consultation-form"
import { AnimatedSection } from "@/components/ui/animated-section"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { services} from "@/lib/services-data"
import { useLanguage } from "@/context/LanguageContext" // Import the language context

// Define translations for the page content
const pageTranslations = {
  en: {
    aboutService: "About The Service",
    specialistsAvailable: "Specialists Available:",
    availability: "Availability:",
    noContent: "Detailed information about this service is coming soon."
  },
  ar: {
    aboutService: "حول الخدمة",
    specialistsAvailable: "الأطباء المتخصصون المتاحون:",
    availability: "التوفر:",
    noContent: "معلومات مفصلة عن هذه الخدمة قريبًا."
  },
  fr: {
    aboutService: "À propos du service",
    specialistsAvailable: "Spécialistes disponibles :",
    availability: "Disponibilité :",
    noContent: "Des informations détaillées sur ce service seront bientôt disponibles."
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const { language } = useLanguage() // Get the current language
  const t = pageTranslations[language] || pageTranslations.en // Fallback to English if translation is missing

  // Find the service by slug
  const service = services.find(service => service.slug === params.slug)

  // If no service is found, return 404
  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <div className="relative flex min-h-screen flex-col">
      <main className="flex-1">
        <AnimatedSection className="py-20">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="mb-8 flex items-center gap-4">
                  <div className={`flex h-20 w-20 items-center justify-center rounded-full ${service.color}`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                  {service.title[language]}
                </h1>
                <p className="mb-12 text-xl text-muted-foreground">
                  {service.description[language]}
                </p>

                <div className="space-y-8">
                  <div>
                    <h2 className="mb-6 text-3xl font-bold">{t.aboutService}</h2>
                    <p className="text-muted-foreground">
                      {service.content[language] || t.noContent}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {service.features[language].map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${service.color}`}>
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-10">
                    <p className="text-lg font-semibold">
                      <span className="text-gray-600">{t.specialistsAvailable}</span> {service.specialists}
                    </p>
                    <p className="text-lg font-semibold">
                      <span className="text-gray-600">{t.availability}</span> {service.availability[language]}
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="lg:pl-8">
                <ConsultationForm />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  )
}