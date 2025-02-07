"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import ContactTranslation from "@/lib/Translations/ContactsTranslations";
import { TeamCard } from "@/components/team-card";
import { teamMembers } from "../../lib/team-members";
import BlogSection from "@/components/blog-section";


const Translation = {
  en: {
    teamPage: {
      title: "Meet the Minds Behind Your Care",
      description: "Expertise, compassion, and innovation—our specialists are here to guide you toward a healthier future.",
      ctaTitle: "Your Health, Our Priority",
      ctaDescription: "Exceptional care is just one click away. Book your consultation now and experience world-class healthcare.",
      ctaButton: "Schedule Your Visit",
    },
  },
  fr: {
    teamPage: {
      title: "Rencontrez les esprits derrière vos soins",
      description: "Expertise, compassion et innovation—nos spécialistes sont là pour vous guider vers un avenir plus sain.",
      ctaTitle: "Votre santé, notre priorité",
      ctaDescription: "Des soins exceptionnels ne sont qu'à un clic. Prenez rendez-vous dès maintenant et bénéficiez de soins de classe mondiale.",
      ctaButton: "Planifiez votre visite",
    },
  },
  ar: {
    teamPage: {
      title: "تعرف على العقول وراء رعايتك",
      description: "الخبرة والرحمة والابتكار—متخصصونا هنا لإرشادك نحو مستقبل أكثر صحة.",
      ctaTitle: "صحتك أولويتنا",
      ctaDescription: "الرعاية المتميزة على بعد نقرة واحدة. احجز استشارتك الآن واستمتع برعاية طبية عالمية المستوى.",
      ctaButton: "احجز موعدك",
    },
  },
};


export default function TeamPage() {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-700 text-transparent bg-clip-text animate-accordion-up leading-tight mb-4">
            {Translation[language]?.teamPage.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{Translation[language]?.teamPage.description}</p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamCard key={member.slug} {...member} />
          ))}
        </div>
      </div>


      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gradient-to-r from-blue-500 to-blue-800 text-center text-white"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <h2 className="text-4xl font-bold mb-4">{Translation[language]?.teamPage.ctaTitle}</h2>
        <p className="text-lg max-w-lg mx-auto mb-6">{Translation[language]?.teamPage.ctaDescription}</p>
        <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-full shadow-lg transition-transform hover:scale-105">
          {Translation[language]?.teamPage.ctaButton}
        </button>
      </motion.section>
    </div>
  );
}
