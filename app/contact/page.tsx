'use client'

import { ContactForm } from "@/components/contact-form"
import { FAQ } from "@/components/faq"
import { AnimatedSection } from "@/components/ui/animated-section"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { 
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  HelpCircle,
} from "lucide-react"
import { keyframes, css } from "styled-components"
import ContactTranslation from "@/lib/Translations/ContactsTranslations"
import { useLanguage } from "@/context/LanguageContext"
import HomeTranslations from "@/lib/Translations/HomeTranslations"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ClinicLocation } from "@/components/clinic-location"

export default function ContactPage() {
  const { language } = useLanguage()

  const controls = useAnimation()

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } })
  }, [controls])
  const h= HomeTranslations[language] || HomeTranslations.en

const t = ContactTranslation[language] || ContactTranslation.en;


  return (
    <div className="relative flex min-h-screen flex-col w-10/12 md:w-full mx-auto max-w-screen-lg">

      <main className="flex-1">
        <AnimatedSection className="py-20">
          <div className="container">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={controls}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              {/* Shimmering Gradient Title */}
              <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700 animate-shimmer">
  {t.title}
</h1>
<p className="text-xl text-muted-foreground mx-auto max-w-[600px]">
  {t.description}
</p>

            </motion.div>

            {/* Contact Form and Image */}
            <div className="grid gap-6 lg:grid-cols-2 items-stretch mb-12">
              {/* Image with Hover Animation */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-2xl shadow-lg"
              >
                <Image
                  src="https://images.unsplash.com/photo-1607368386669-d940ce438fba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGRvY3RvcnxlbnwwfDF8MHx8fDA%3D"
                  alt="Contact Us"
                  fill
                  className="rounded-lg object-cover transition-transform duration-300"
                />
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageCircle size={24} className="text-blue-600" />
                    <h2 className="text-2xl font-semibold">{t.sendMessage}</h2>
                  </div>
                  <ContactForm />
                </div>
              </motion.div>
            </div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
             <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
  {t.contactInfo}
</h2>
              <div className="grid gap-8 md:grid-cols-3">
              
<ContactCard icon={<Phone size={24} />} title={t.phone} content="+213550504376" />
<ContactCard icon={<Mail size={24} />} title={t.email} content="cliniquehamani@hotmail.fr" />
<ContactCard icon={<MapPin size={24} />} title={t.address} content="Clinique Hamani, FG6F+XMJ, Akbou, Algeria" />

              </div>
            </motion.div>
          <ClinicLocation/>
            {/* FAQ and Image */}
            <div className="grid gap-6 lg:grid-cols-2 items-stretch mt-12">
              {/* FAQ Section */}
              <AnimatedSection className="py-20">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">{h.home.faq.title}</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground">
                Find answers to common questions about our healthcare services and procedures.
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible>
                {h.home.faq.items.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </AnimatedSection>

              {/* Image with Hover Animation */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-2xl shadow-lg"
              >
                <Image
                  src="https://images.unsplash.com/photo-1544535830-9df3f56fff6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlcXVlbnRseSUyMGFza2VkJTIwcXVlc3Rpb25zfGVufDB8MXwwfHx8MA%3D%3D"
                  alt="FAQ"
                  fill
                  className="rounded-lg object-cover transition-transform duration-300"
                />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </main>

     
    </div>
  )
}

// Contact Card Component
const ContactCard = ({ icon, title, content }: { icon: JSX.Element; title: string; content: string }) => (
  <div className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
    <div className="mb-4 text-blue-600">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{content}</p>
  </div>
)

