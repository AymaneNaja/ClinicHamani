"use client"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/ui/animated-section"
import { ServiceCarousel } from "@/components/service-carousel"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight, BriefcaseMedical, Check, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { AvatarFallback } from "@radix-ui/react-avatar"
import Testimonials from "@/components/testimonials-section"
import StethoscopeImage from "@/public/stethoscope.png"
import HeartImage from "@/public/heart.png"

import { useEffect, useState } from "react"
import { useLanguage } from "@/context/LanguageContext"
import HomeTranslations from "@/lib/Translations/HomeTranslations"

export default function HomePage() {
  const { language } = useLanguage()
  const t = HomeTranslations[language] || HomeTranslations.en

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col" dir={language === "ar" ? "rtl" : "ltr"}>
      <main className="flex-1">
        {/* hero */}
        <section className="px-6 py-20 md:w-11/12 mx-auto">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Side */}
            <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <motion.h1
  initial={{ opacity: 0, x: -50 }}
  animate={{
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      staggerChildren: 0.08, // Stagger between words
      ease: "easeOut",
    },
  }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  className="text-2xl font-serif font-bold text-center leading-tight tracking-normal bg-clip-text text-transparent"
  style={{
    background: "linear-gradient(90deg, rgba(0, 174, 255, 1) 0%, rgba(0, 128, 255, 1) 50%, rgba(0, 33, 112, 1) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "shine 3s infinite linear",
    letterSpacing: "-0.05em", // Reduce letter spacing for tighter text
    whiteSpace: "pre-wrap", // Allow wrapping but preserve spaces
  }}
>
  <div className="text-7xl ">{t.home.hero.title}</div>
  {t.home.hero.subtitle?.split(' ').map((word, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: "easeInOut",
      }}
    >
      {word}{' '} {/* Add a space after each word */}
    </motion.span>
  ))}
</motion.h1>

<style jsx>{`
  @keyframes shine {
    0% {
      background-position: -300px 0;
    }
    100% {
      background-position: 300px 0;
    }
  }
`}</style>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0"
              >
                {t.home.hero.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
                className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0"
              >
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg font-medium shadow-lg rounded-lg transition-all">
                  {t.home.hero.cta}
                </Button>
                <div className="flex -space-x-2">
                  {/* Random People Images from Unsplash using Avatar */}
                  <Avatar className="w-12 h-12 border-2 border-white">
                    <AvatarImage
                      src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                      alt="Random Person 1"
                    />
                    <AvatarFallback>P1</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-12 h-12 border-2 border-white">
                    <AvatarImage
                      src="https://plus.unsplash.com/premium_photo-1689632031083-518b012767a4?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29uJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
                      alt="Random Person 2"
                    />
                    <AvatarFallback>P2</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-12 h-12 border-2 border-white">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29uJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
                      alt="Random Person 3"
                    />
                    <AvatarFallback>P3</AvatarFallback>
                  </Avatar>
                </div>
                <span className="text-gray-700 text-base sm:text-lg font-medium">40,000+ Satisfied Patients</span>
              </motion.div>

              {/* Service Cards */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 items-end"
              >
                {/* Radiology (Now at the top) */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden text-start bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 shadow-lg rounded-2xl p-6 flex flex-col gap-4 text-white transition-all duration-500 h-[280px]"
                >
                  <h3 className="text-[20px] font-semibold tracking-wide">Radiology</h3>
                  <p className="text-sm opacity-90 max-w-[50%]">
                    High-resolution imaging for precise diagnostics and advanced medical insights.
                  </p>
                  <motion.div
                    initial={{ scale: 1.4, x: 45 }}
                    animate={{ scale: 1.2, x: 20 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`absolute ${language!=='ar'?'right-[-28%]':"left-[-28%]"} top-1/3 transform cursor-pointer -translate-y-1/2 opacity-95`}
                  >
                    <Image
                      src={StethoscopeImage.src || "/placeholder.svg"}
                      alt="Radiology"
                      width={220}
                      height={220}
                      className="object-contain"
                    />
                  </motion.div>
                  <div className={`absolute ${language!=='ar'? 'right-4 ':'left-4 '} top-4 border border-white rounded-full p-1`}>
                    <ArrowUpRight className="text-white" />
                  </div>
                </motion.div>

                {/* Cardiology (Now at the bottom) */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden text-start bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 shadow-lg rounded-2xl p-6 flex flex-col gap-4 text-white transition-all duration-500 h-[240px]"
                >
                  <h3 className="text-[20px] font-semibold tracking-wide">Cardiology</h3>
                  <p className="text-sm opacity-90 max-w-[58%]">ensuring your cardiac health is in expert hands.</p>
                  <motion.div
                    initial={{ scale: 1.25, x: 30 }}
                    animate={{ scale: 1.1, x: 10 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`absolute ${language!=='ar'?'right-[-8%]':'left-[-8%]'} top-1/2 transform cursor-pointer -translate-y-1/2 opacity-95`}
                  >
                    <Image
                      src={HeartImage.src || "/placeholder.svg"}
                      alt="Cardiology"
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </motion.div>
                  <div className={`absolute ${language!=='ar'? 'right-4 ':'left-4 '} top-4 border border-white rounded-full p-1`}>
                    <ArrowUpRight className="text-white" />
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Side (Image) */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 mt-10 lg:mt-0 justify-center hidden lg:flex"
            >
              <Image
                src={
                  "https://images.unsplash.com/photo-1550831107-1553da8c8464?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D" ||
                  "/placeholder.svg" ||
                  "/placeholder.svg"
                }
                alt="Clinic"
                width={480}
                height={480}
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </section>

        {/* Image and Content Section */}
        <AnimatedSection className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <motion.div
                className="relative h-[500px]"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={
                    "https://plus.unsplash.com/premium_photo-1661580551854-5cb1bf63b301?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ||
                    "/placeholder.svg" ||
                    "/placeholder.svg"
                  }
                  alt="Clinic Team"
                  fill
                  className="object-cover rounded-lg"
                />
              </motion.div>
              <div>
                <motion.h2
                  className="mb-6 text-3xl font-bold md:text-4xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {t.home.whyChooseUs.title}
                </motion.h2>
                <motion.p
                  className="mb-8 text-lg text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {t.home.whyChooseUs.description}
                </motion.p>
                <motion.ul
                  className="space-y-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {t.home.whyChooseUs.reasons.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="h-6 w-6 text-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </motion.ul>
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden">
  <Image
    src={
      "https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ||
      "/placeholder.svg"
    }
    alt="Dr. Sarah Johnson"
    width={60}
    height={60}
    className="w-full h-full object-cover"
  />
</div>
                  <div>
                    <p className="font-semibold">Dr. Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Lead Physician</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection className="py-20 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container">
            <div className="mb-12 text-center">
              <motion.h2
                className="mb-4 text-3xl font-bold md:text-4xl text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <BriefcaseMedical className="inline-block w-8 h-8 text-red-500 mr-2" />
                {t.home.services.title}
              </motion.h2>
              <motion.p
                className="mx-auto max-w-[600px] text-muted-foreground text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {t.home.services.description}
              </motion.p>
            </div>
            <ServiceCarousel />
            <div className="mt-12 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button className="px-6 py-3 text-lg font-semibold flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" /> {t.home.services.cta}
                </Button>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Why Choose Us Section */}
        <AnimatedSection className="py-24 w-10/12 mx-auto  to-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            {/* Section Heading */}
            <div className="mb-16 text-center">
              <motion.h2
                className="mb-4 text-4xl font-bold md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {t.home.whyChooseUs.title}
              </motion.h2>
              <motion.p
                className="mx-auto max-w-[600px] text-lg text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {t.home.whyChooseUs.description}
              </motion.p>
            </div>

            {/* Features Grid */}
            <div className="space-y-20">
              {t.home.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="grid items-center gap-12 md:grid-cols-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Image */}
                  <div
                    className={`relative aspect-video overflow-hidden rounded-2xl shadow-lg ${
                      index % 2 === 0 ? "md:order-1" : ""
                    }`}
                  >
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  {/* Text Content */}
                  <div>
                    <motion.h3
                      className="mb-4 text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {feature.title}
                    </motion.h3>
                    <motion.p
                      className="text-lg text-gray-600"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Consultation Section */}
        <AnimatedSection className="py-20">
          <section className="py-20">
            <div className="relative bg-blue-50 overflow-hidden min-h-[600px] grid-background">
              {/* Container */}
              <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center relative">
                {/* Left Column: Image */}
                <div className="md:w-1/2 relative h-[300px] md:h-[500px]">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: isVisible ? 0 : "100%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src="/placeholder.svg"
                      alt="A dentist holding a dental model and dental tool"
                      fill
                      className="object-cover object-center md:object-bottom"
                    />
                  </motion.div>
                </div>

                {/* Right Column: Content */}
                <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 text-center md:text-left z-10">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{t.home.consultation.title}</h1>
                  <p className="mt-4 text-gray-600">{t.home.consultation.description}</p>
                  <button className="mt-6 px-6 py-3 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
                    {t.home.consultation.cta}
                  </button>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Testimonials Section */}
        {/* <Testimonials title={t.home.testimonials.title} /> */}

        {/* FAQ Section */}
        <AnimatedSection className="py-20">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t.home.faq.title}</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground">
                Find answers to common questions about our healthcare services and procedures.
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible>
                {t.home.faq.items.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="py-20">
          <div className="container">
            <div className="rounded-2xl bg-gradient-to-r from-blue-400  to-blue-700 p-12 text-center text-white">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t.home.cta.title}</h2>
              <p className="mx-auto mb-8 max-w-[600px]">{t.home.cta.description}</p>
              <Button size="lg" variant="secondary" className="group" asChild>
                <Link href="/contact">
                  {t.home.cta.button}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  )
}

const styles = `
  .grid-background {
    background-image: linear-gradient(to right, #e0e7ff 1px, transparent 1px), linear-gradient(to bottom, #e0e7ff 1px, transparent 1px);
    background-size: 20px 20px;
  }
`

// Inject CSS for Grid Background
if (typeof window !== "undefined") {
  const styleTag = document.createElement("style")
  styleTag.innerHTML = styles
  document.head.appendChild(styleTag)
}

