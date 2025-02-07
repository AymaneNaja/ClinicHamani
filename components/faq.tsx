"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "What dental services do you offer?",
    answer:
      "We offer a wide range of dental services including general dentistry, cosmetic dentistry, orthodontics, and more. Please visit our services page for a complete list.",
  },
  {
    question: "How often should I visit the dentist?",
    answer:
      "We recommend visiting the dentist every 6 months for regular check-ups and professional cleaning. However, some patients may need more frequent visits depending on their oral health needs.",
  },
  {
    question: "Do you accept dental insurance?",
    answer:
      "Yes, we accept most major dental insurance plans. Please contact our office to verify your specific coverage.",
  },
  {
    question: "What should I expect during my first visit?",
    answer:
      "Your first visit will typically include a comprehensive oral examination, x-rays if necessary, and a discussion about your dental health goals. We'll create a personalized treatment plan based on your needs.",
  },
]

export function FAQ() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h2 className="mb-6 text-3xl font-bold">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  )
}

