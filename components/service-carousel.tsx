"use client"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import { useLanguage } from "@/context/LanguageContext"
import { useEffect } from "react" // Import useEffect to handle RTL reinitialization

// Translation object
const translations = {
  en: {
    learnMore: "Learn More",
    services: {
      gynecology: {
        title: "Gynecology",
        description: "Comprehensive care for women's health, including prenatal and postnatal services.",
      },
      radiology: {
        title: "Radiology",
        description: "Advanced imaging services for accurate diagnosis and treatment planning.",
      },
      laboratory: {
        title: "Laboratory",
        description: "State-of-the-art lab services for accurate and timely diagnostic results.",
      },
      surgery: {
        title: "Surgery",
        description: "Expert surgical care for a wide range of medical conditions.",
      },
      pediatrics: {
        title: "Pediatrics",
        description: "Comprehensive healthcare for infants, children, and adolescents.",
      },
      intensiveCare: {
        title: "Intensive Care",
        description: "Specialized critical care for patients with life-threatening conditions.",
      },
    },
  },
  fr: {
    learnMore: "En savoir plus",
    services: {
      gynecology: {
        title: "Gynécologie",
        description: "Soins complets pour la santé des femmes, y compris les services prénatals et postnatals.",
      },
      radiology: {
        title: "Radiologie",
        description: "Services d'imagerie avancés pour un diagnostic et une planification de traitement précis.",
      },
      laboratory: {
        title: "Laboratoire",
        description: "Services de laboratoire de pointe pour des résultats de diagnostic précis et rapides.",
      },
      surgery: {
        title: "Chirurgie",
        description: "Soins chirurgicaux experts pour un large éventail de conditions médicales.",
      },
      pediatrics: {
        title: "Pédiatrie",
        description: "Soins de santé complets pour les nourrissons, les enfants et les adolescents.",
      },
      intensiveCare: {
        title: "Soins Intensifs",
        description: "Soins critiques spécialisés pour les patients atteints de maladies potentiellement mortelles.",
      },
    },
  },
  ar: {
    learnMore: "تعلم المزيد",
    services: {
      gynecology: {
        title: "طب النساء",
        description: "رعاية شاملة لصحة المرأة، بما في ذلك خدمات ما قبل الولادة وبعدها.",
      },
      radiology: {
        title: "الأشعة",
        description: "خدمات التصوير المتقدمة لتشخيص دقيق وتخطيط العلاج.",
      },
      laboratory: {
        title: "المختبر",
        description: "خدمات مختبرية متطورة لنتائج تشخيصية دقيقة وفي الوقت المناسب.",
      },
      surgery: {
        title: "جراحة",
        description: "رعاية جراحية خبيرة لمجموعة واسعة من الحالات الطبية.",
      },
      pediatrics: {
        title: "طب الأطفال",
        description: "رعاية صحية شاملة للرضع والأطفال والمراهقين.",
      },
      intensiveCare: {
        title: "العناية المركزة",
        description: "رعاية حرجة متخصصة للمرضى الذين يعانون من حالات تهدد حياتهم.",
      },
    },
  },
}

const services = [
  {
    id: "gynecology",
    image: "https://plus.unsplash.com/premium_photo-1661606400554-a2055d50ee08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGd5bmVjb2xvZ2lzdHxlbnwwfHwwfHx8MA%3D%3D",
    href: "/services/gynecology",
  },
  {
    id: "radiology",
    image: "https://plus.unsplash.com/premium_photo-1663040222194-941d775ec225?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFkaW9sb2d5fGVufDB8fDB8fHww",
    href: "/services/radiology",
  },
  {
    id: "laboratory",
    image: "https://plus.unsplash.com/premium_photo-1676325101955-1089267548d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGxhYm9yYXRvcnl8ZW58MHx8MHx8fDA%3D",
    href: "/services/laboratory",
  },
  {
    id: "surgery",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VyZ2VyeXxlbnwwfHwwfHx8MA%3D%3D",
    href: "/services/surgery",
  },
  {
    id: "pediatrics",
    image: "https://images.unsplash.com/photo-1632052999447-e542d08d4f7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlZGlhdHJpY3N8ZW58MHx8MHx8fDA%3D",
    href: "/services/pediatrics",
  },
  {
    id: "intensiveCare",
    image: "https://images.unsplash.com/photo-1554734867-bf3c00a49371?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW50ZW5zaXZlJTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    href: "/services/intensive-care",
  },
]

export function ServiceCarousel() {
  const { language } = useLanguage() // Get the current language from the useLanguage hook
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      dragFree: true,
      direction: language === "ar" ? "rtl" : "ltr", // Set direction based on language
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  )

  // Reinitialize the carousel when the language changes
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit({ direction: language === "ar" ? "rtl" : "ltr" })
    }
  }, [language, emblaApi])

  return (
    <div
      className="overflow-hidden relative"
      ref={emblaRef}
      dir={language === "ar" ? "rtl" : "ltr"} // Set direction based on language
    >
      <div className="flex w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex-[0_0_80%] min-w-0 pl-4 md:flex-[0_0_40%] lg:flex-[0_0_25%] rounded-xl shadow-lg bg-white overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <Card className="overflow-hidden hover:shadow-xl transition duration-300 h-full flex flex-col">
              <div className="relative aspect-[4/3] rounded-t-xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={translations[language].services[service.id].title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="flex flex-col items-start gap-4 p-6 flex-grow">
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  {translations[language].services[service.id].title}
                </h3>
                <p className="text-sm text-gray-600 flex-grow">
                  {translations[language].services[service.id].description}
                </p>
                <Button variant="outline" size="sm" asChild className="mt-auto">
                  <a href={service.href} className="flex items-center gap-2">
                    {translations[language].learnMore} <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}