"use client"

import { useLanguage } from "@/context/LanguageContext"
import { HeartPulse } from "lucide-react"
import Link from "next/link"
import { motion } from 'framer-motion';
import aymane from '@/public/img-7.jpg'
import Image from "next/image"

const translations = {
  en: {
    clinicName: "Clinic Hamani",
    tagline: "Comprehensive healthcare for you and your family.",
    servicesTitle: "Services",
    quickLinksTitle: "Quick Links",
    contactTitle: "Contact",
    about: "About Us",
    team: "Our Team",
    contact: "Contact",
    book: "Book Appointment",
    address: "Clinique Hamani Akbou, Algeria",
    rights: "All rights reserved."
  },
  fr: {
    clinicName: "Clinique Hamani",
    tagline: "Des soins de santé complets pour vous et votre famille.",
    servicesTitle: "Services",
    quickLinksTitle: "Liens Rapides",
    contactTitle: "Contact",
    about: "À Propos",
    team: "Notre Équipe",
    contact: "Contact",
    book: "Prendre Rendez-vous",
    address: "Clinique Hamani Akbou, Algérie",
    rights: "Tous droits réservés."
  },
  ar: {
    clinicName: "عيادة هماني",
    tagline: "رعاية صحية شاملة لك ولعائلتك.",
    servicesTitle: "الخدمات",
    quickLinksTitle: "روابط سريعة",
    contactTitle: "اتصل بنا",
    about: "معلومات عنا",
    team: "فريقنا",
    contact: "اتصل",
    book: "حجز موعد",
    address: "عيادة هماني، أكبو، الجزائر",
    rights: "جميع الحقوق محفوظة."
  }
}

const services = {
  en: ["Gynecology", "Radiology", "Laboratory", "Intensive Care", "Pediatrics", "Surgery"],
  fr: ["Gynécologie", "Radiologie", "Laboratoire", "Soins Intensifs", "Pédiatrie", "Chirurgie"],
  ar: ["أمراض النساء", "الأشعة", "المختبر", "العناية المركزة", "طب الأطفال", "الجراحة"]
}

export function SiteFooter() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en
  const serviceList = services[language] || services.en

  return (
    <footer className="border-t bg-gray-50">
      <div className="container grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <HeartPulse className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">{t.clinicName}</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{t.tagline}</p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold">{t.servicesTitle}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {serviceList.map((service) => (
              <li key={service}>
                <Link href={`/services#${service.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-primary">
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold">{t.quickLinksTitle}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/about" className="hover:text-primary">{t.about}</Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-primary">{t.team}</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">{t.contact}</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">{t.book}</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold">{t.contactTitle}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>{t.address}</li>
            <li>cliniquehamani@hotmail.fr</li>
            <li>+213550504376</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-6 flex flex-col items-center">
        <Link href="https://portfolio-l54739lar-aymanes-projects-5eae56dd.vercel.app/" target="_blank">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 overflow-hidden rounded-full border-2 border-primary cursor-pointer"
          >
            <Image src={aymane.src} alt="Ayman's Avatar" width={64} height={64} className="object-cover" />
          </motion.div>
        </Link>
        <div className="container text-center text-sm text-muted-foreground mt-2">
          © {new Date().getFullYear()} {t.clinicName}. {t.rights}
        </div>
      </div>
    </footer>
  )
}