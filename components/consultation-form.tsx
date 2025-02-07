"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Mail } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"

const translations = {
  en: {
    title: "Free Consultation",
    description: "We are committed to providing high-quality healthcare services with the latest medical advancements.",
    namePlaceholder: "Full Name*",
    emailPlaceholder: "Your Email*",
    phonePlaceholder: "Phone Number*",
    selectService: "Select Service",
    buttonText: "Get Free Advice",
  },
  fr: {
    title: "Consultation Gratuite",
    description: "Nous nous engageons à fournir des services de santé de haute qualité avec les dernières avancées médicales.",
    namePlaceholder: "Nom Complet*",
    emailPlaceholder: "Votre Email*",
    phonePlaceholder: "Numéro de Téléphone*",
    selectService: "Sélectionner un Service",
    buttonText: "Obtenir des Conseils Gratuits",
  },
  ar: {
    title: "استشارة مجانية",
    description: "نحن ملتزمون بتقديم خدمات رعاية صحية عالية الجودة بأحدث التطورات الطبية.",
    namePlaceholder: "الاسم الكامل*",
    emailPlaceholder: "بريدك الإلكتروني*",
    phonePlaceholder: "رقم الهاتف*",
    selectService: "اختر الخدمة",
    buttonText: "احصل على نصيحة مجانية",
  },
}

const services = {
  en: ["General Checkup", "Pediatrics", "Cardiology", "Neurology", "Dermatology", "Orthopedics"],
  fr: ["Bilan Général", "Pédiatrie", "Cardiologie", "Neurologie", "Dermatologie", "Orthopédie"],
  ar: ["الفحص العام", "طب الأطفال", "أمراض القلب", "طب الأعصاب", "الأمراض الجلدية", "جراحة العظام"],
}

export function ConsultationForm() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en
  const serviceList = services[language] || services.en

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="w-full">
        <CardHeader>
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h2 className="text-center text-2xl font-bold">{t.title}</h2>
          <p className="text-center text-sm text-muted-foreground">{t.description}</p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input placeholder={t.namePlaceholder} required />
            <Input type="email" placeholder={t.emailPlaceholder} required />
            <Input type="tel" placeholder={t.phonePlaceholder} required />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={t.selectService} />
              </SelectTrigger>
              <SelectContent>
                {serviceList.map((service) => (
                  <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, "-")}> 
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">{t.buttonText}</Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}