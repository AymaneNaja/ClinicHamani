"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import ContactTranslation from "@/lib/Translations/ContactsTranslations"; // Adjust the path accordingly
import { useLanguage } from "@/context/LanguageContext";

export function ContactForm() {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = ContactTranslation[language] || ContactTranslation.en;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating API call
    setIsSubmitting(false);
    alert("Form submitted successfully!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      dir={language === "ar" ? "rtl" : "ltr"} // Adjusts the direction
      className={language === "ar" ? "text-right" : "text-left"} // Aligns text accordingly
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Input className="w-full" placeholder={t.placeholders.firstName} required />
          <Input className="w-full" placeholder={t.placeholders.lastName} required />
        </div>
        <Input className="w-full" type="email" placeholder={t.placeholders.email} required />
        <Input className="w-full" type="tel" placeholder={t.placeholders.phone} required />
        <Textarea className="w-full" placeholder={t.placeholders.message} required />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? t.buttons.submitting : t.buttons.submit}
        </Button>
      </form>
    </motion.div>
  );
}
