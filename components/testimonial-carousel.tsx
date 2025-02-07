"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const testimonials = {
  en: [
    {
      name: "Sarah Thompson",
      role: "Patient",
      image: "/placeholder.svg",
      quote: "The team at MediCare transformed my health. I couldn't be happier with the care I received!",
    },
    {
      name: "Michael Chen",
      role: "Patient",
      image: "/placeholder.svg",
      quote: "Professional, compassionate, and thorough medical care. Highly recommend their services!",
    },
    {
      name: "Emma Davis",
      role: "Patient",
      image: "/placeholder.svg",
      quote: "The best medical experience I've ever had. The doctors and staff are outstanding!",
    },
    {
      name: "David Johnson",
      role: "Patient",
      image: "/placeholder.svg",
      quote: "From diagnosis to recovery, MediCare provided exceptional support and treatment!",
    },
    {
      name: "Sophia Martinez",
      role: "Patient",
      image: "/placeholder.svg",
      quote: "Their medical expertise and attention to detail saved my life. Forever grateful!",
    },
  ],
  ar: [
    {
      name: "سارة طومسون",
      role: "مريض",
      image: "/placeholder.svg",
      quote: "فريق MediCare حوّل صحتي. لا يمكنني أن أكون أكثر سعادة بالرعاية التي تلقيتها!",
    },
    {
      name: "مايكل تشين",
      role: "مريض",
      image: "/placeholder.svg",
      quote: "رعاية طبية محترفة، رحيمة، ودقيقة. أوصي بخدماتهم بشدة!",
    },
    {
      name: "إيما ديفيس",
      role: "مريض",
      image: "/placeholder.svg",
      quote: "أفضل تجربة طبية حصلت عليها على الإطلاق. الأطباء والموظفون رائعون!",
    },
    {
      name: "ديفيد جونسون",
      role: "مريض",
      image: "/placeholder.svg",
      quote: "من التشخيص إلى الشفاء، قدمت MediCare دعمًا وعلاجًا استثنائيًا!",
    },
    {
      name: "صوفيا مارتينيز",
      role: "مريض",
      image: "/placeholder.svg",
      quote: "خبرتهم الطبية واهتمامهم بالتفاصيل أنقذا حياتي. ممتنة إلى الأبد!",
    },
  ],
};

export function TestimonialCarousel() {
  const { language } = useLanguage();
  const currentTestimonials = testimonials[language] || testimonials.en;

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {currentTestimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className={language === "ar" ? "text-right" : "text-left"} dir={language === "ar" ? "rtl" : "ltr"}>
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-blue-600 mb-4" />
                  <p className="text-muted-foreground mb-4">{testimonial.quote}</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
