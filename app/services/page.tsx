'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ServiceCard } from '../../components/service-card'
import { 
  Stethoscope, 
  Scissors, 
  FlaskRound, 
  Radio, 
  Heart, 
  Baby 
} from "lucide-react"
import { useLanguage } from "@/context/LanguageContext" // Import the language context

// Define translations for the page content
const pageTranslations = {
  en: {
    heading: "Our Medical Excellence",
    title: "Comprehensive Healthcare Services",
    description: "Experience world-class medical care with our team of specialists and state-of-the-art facilities. Each department is equipped with the latest technology and staffed by experienced professionals.",
    emergencyText: "Need immediate medical attention? Our emergency services are available 24/7",
    emergencyNumber: "Emergency: +123 456 7890"
  },
  ar: {
    heading: "تميزنا الطبي",
    title: "خدمات الرعاية الصحية الشاملة",
    description: "جرب الرعاية الطبية العالمية مع فريقنا من المتخصصين والمرافق الحديثة. كل قسم مجهز بأحدث التقنيات ويعمل به محترفون ذوو خبرة.",
    emergencyText: "هل تحتاج إلى رعاية طبية فورية؟ خدمات الطوارئ لدينا متاحة على مدار الساعة",
    emergencyNumber: "الطوارئ: +123 456 7890"
  },
  fr: {
    heading: "Notre Excellence Médicale",
    title: "Services de Santé Complets",
    description: "Découvrez des soins médicaux de classe mondiale avec notre équipe de spécialistes et des installations de pointe. Chaque département est équipé des dernières technologies et doté de professionnels expérimentés.",
    emergencyText: "Besoin d'une attention médicale immédiate ? Nos services d'urgence sont disponibles 24h/24 et 7j/7",
    emergencyNumber: "Urgence : +123 456 7890"
  }
}

export const services = [
  {
    title: {
      en: "Gynecology & Obstetrics",
      ar: "طب النساء والتوليد",
      fr: "Gynécologie et Obstétrique"
    },
    slug: "gynecology-obstetrics",
    type: {
      en: "Women's Health",
      ar: "صحة المرأة",
      fr: "Santé des Femmes"
    },
    description: {
      en: "Comprehensive women's healthcare covering pregnancy, fertility, and gynecological treatments.",
      ar: "رعاية صحية شاملة للنساء تشمل الحمل والخصوبة والعلاجات النسائية.",
      fr: "Soins de santé complets pour les femmes, couvrant la grossesse, la fertilité et les traitements gynécologiques."
    },
    icon: Stethoscope,
    color: "bg-rose-500",
    image: "/images/gynecology.jpg",
    features: {
      en: [
        "Prenatal Care & Monitoring",
        "Fertility Treatments",
        "Gynecological Surgery",
        "Regular Check-ups"
      ],
      ar: [
        "رعاية ومتابعة ما قبل الولادة",
        "علاجات الخصوبة",
        "جراحات نسائية",
        "فحوصات دورية"
      ],
      fr: [
        "Soins prénatals et surveillance",
        "Traitements de fertilité",
        "Chirurgie gynécologique",
        "Examens réguliers"
      ]
    },
    specialists: 12,
    availability: {
      en: "24/7 Emergency",
      ar: "طوارئ 24/7",
      fr: "Urgences 24/7"
    },
    content: {
      en: "We provide complete obstetric and gynecological care, including prenatal check-ups, fertility support, and advanced surgical treatments. Our expert team ensures personalized care for every woman.",
      ar: "نوفر رعاية كاملة في مجال التوليد والنساء، بما في ذلك فحوصات ما قبل الولادة ودعم الخصوبة والعلاجات الجراحية المتقدمة. يضمن فريقنا الخبير رعاية مخصصة لكل امرأة.",
      fr: "Nous offrons des soins complets en obstétrique et gynécologie, y compris des examens prénatals, un soutien à la fertilité et des traitements chirurgicaux avancés. Notre équipe experte assure des soins personnalisés pour chaque femme."
    }
  },
  {
    title: {
      en: "Advanced Surgery",
      ar: "جراحة متقدمة",
      fr: "Chirurgie Avancée"
    },
    slug: "advanced-surgery",
    type: {
      en: "Surgical Procedures",
      ar: "الإجراءات الجراحية",
      fr: "Procédures Chirurgicales"
    },
    description: {
      en: "High-precision surgical procedures with modern minimally invasive techniques.",
      ar: "إجراءات جراحية عالية الدقة باستخدام تقنيات طفيفة التوغل.",
      fr: "Procédures chirurgicales de haute précision utilisant des techniques modernes peu invasives."
    },
    icon: Scissors,
    color: "bg-blue-500",
    image: "/images/surgery.jpg",
    features: {
      en: [
        "Laparoscopic Surgery",
        "Robotic Surgery",
        "General Surgery",
        "Post-op Care"
      ],
      ar: [
        "جراحة بالمنظار",
        "جراحة روبوتية",
        "جراحة عامة",
        "رعاية ما بعد الجراحة"
      ],
      fr: [
        "Chirurgie laparoscopique",
        "Chirurgie robotique",
        "Chirurgie générale",
        "Soins postopératoires"
      ]
    },
    specialists: 15,
    availability: {
      en: "On Schedule",
      ar: "حسب الجدول",
      fr: "Sur rendez-vous"
    },
    content: {
      en: "Our surgical department specializes in cutting-edge procedures, from laparoscopic and robotic surgeries to major general operations. We prioritize patient safety, faster recovery, and minimal discomfort.",
      ar: "يتخصص قسم الجراحة لدينا في الإجراءات المتطورة، من الجراحات بالمنظار والروبوتية إلى العمليات العامة الكبرى. نعطي الأولوية لسلامة المرضى والتعافي السريع وتقليل الانزعاج.",
      fr: "Notre département de chirurgie se spécialise dans les procédures de pointe, des chirurgies laparoscopiques et robotiques aux opérations générales majeures. Nous priorisons la sécurité des patients, une récupération rapide et un inconfort minimal."
    }
  },
  {
    title: {
      en: "Clinical Laboratory",
      ar: "المختبر السريري",
      fr: "Laboratoire Clinique"
    },
    slug: "clinical-laboratory",
    type: {
      en: "Diagnostics",
      ar: "التشخيص",
      fr: "Diagnostics"
    },
    description: {
      en: "Advanced diagnostic testing with rapid, accurate results for timely medical decisions.",
      ar: "اختبارات تشخيصية متقدمة مع نتائج سريعة ودقيقة لاتخاذ قرارات طبية في الوقت المناسب.",
      fr: "Tests de diagnostic avancés avec des résultats rapides et précis pour des décisions médicales opportunes."
    },
    icon: FlaskRound,
    color: "bg-violet-500",
    image: "/images/laboratory.jpg",
    features: {
      en: [
        "Blood Analysis",
        "Pathology Tests",
        "Molecular Diagnostics",
        "Genetic Testing"
      ],
      ar: [
        "تحاليل الدم",
        "اختبارات الأمراض",
        "تشخيص جزيئي",
        "اختبارات جينية"
      ],
      fr: [
        "Analyses sanguines",
        "Tests de pathologie",
        "Diagnostics moléculaires",
        "Tests génétiques"
      ]
    },
    specialists: 8,
    availability: {
      en: "Same Day Results",
      ar: "نتائج في نفس اليوم",
      fr: "Résultats le jour même"
    },
    content: {
      en: "Equipped with cutting-edge technology, our clinical lab provides fast and reliable diagnostic testing, ensuring accurate results to support medical treatments and early disease detection.",
      ar: "مجهز بأحدث التقنيات، يوفر مختبرنا السريري اختبارات تشخيصية سريعة وموثوقة، مما يضمن نتائج دقيقة لدعم العلاجات الطبية والكشف المبكر عن الأمراض.",
      fr: "Équipé de technologies de pointe, notre laboratoire clinique fournit des tests de diagnostic rapides et fiables, garantissant des résultats précis pour soutenir les traitements médicaux et la détection précoce des maladies."
    }
  },
  {
    title: {
      en: "Advanced Radiology",
      ar: "الأشعة المتقدمة",
      fr: "Radiologie Avancée"
    },
    slug: "advanced-radiology",
    type: {
      en: "Medical Imaging",
      ar: "التصوير الطبي",
      fr: "Imagerie Médicale"
    },
    description: {
      en: "High-precision medical imaging for accurate diagnoses and treatment planning.",
      ar: "تصوير طبي عالي الدقة لتشخيص دقيق وتخطيط العلاج.",
      fr: "Imagerie médicale de haute précision pour des diagnostics précis et une planification de traitement."
    },
    icon: Radio,
    color: "bg-indigo-500",
    image: "/images/radiology.jpg",
    features: {
      en: [
        "MRI & CT Scans",
        "X-ray & Ultrasound",
        "3D Imaging",
        "Digital Radiography"
      ],
      ar: [
        "التصوير بالرنين المغناطيسي والتصوير المقطعي",
        "الأشعة السينية والموجات فوق الصوتية",
        "التصوير ثلاثي الأبعاد",
        "التصوير الإشعاعي الرقمي"
      ],
      fr: [
        "IRM et scanners",
        "Radiographie et échographie",
        "Imagerie 3D",
        "Radiographie numérique"
      ]
    },
    specialists: 10,
    availability: {
      en: "Quick Appointments",
      ar: "مواعيد سريعة",
      fr: "Rendez-vous rapides"
    },
    content: {
      en: "We offer state-of-the-art radiology services, providing clear and detailed imaging for precise diagnoses. Our expert radiologists ensure fast reporting and guidance for further treatment.",
      ar: "نقدم خدمات أشعة متطورة توفر تصويرًا واضحًا ومفصلاً لتشخيص دقيق. يضمن أخصائيو الأشعة لدينا إعداد تقارير سريعة وتوجيهات للعلاج الإضافي.",
      fr: "Nous offrons des services de radiologie de pointe, fournissant des images claires et détaillées pour des diagnostics précis. Nos radiologues experts assurent des rapports rapides et des conseils pour un traitement ultérieur."
    }
  },
  {
    title: {
      en: "Intensive Care Unit",
      ar: "وحدة العناية المركزة",
      fr: "Unité de Soins Intensifs"
    },
    slug: "intensive-care-unit",
    type: {
      en: "Emergency & Critical Care",
      ar: "الطوارئ والرعاية الحرجة",
      fr: "Urgences et Soins Intensifs"
    },
    description: {
      en: "Round-the-clock critical care with advanced life support systems and expert monitoring.",
      ar: "رعاية حرجة على مدار الساعة مع أنظمة دعم حياتي متقدمة ومراقبة من قبل الخبراء.",
      fr: "Soins intensifs 24/7 avec des systèmes de support vital avancés et une surveillance experte."
    },
    icon: Heart,
    color: "bg-red-500",
    image: "/images/icu.jpg",
    features: {
      en: [
        "24/7 Monitoring",
        "Ventilation Support",
        "Critical Care",
        "Emergency Response"
      ],
      ar: [
        "مراقبة على مدار الساعة",
        "دعم التنفس",
        "رعاية حرجة",
        "استجابة للطوارئ"
      ],
      fr: [
        "Surveillance 24/7",
        "Support ventilatoire",
        "Soins intensifs",
        "Réponse d'urgence"
      ]
    },
    specialists: 20,
    availability: {
      en: "Always Available",
      ar: "متاح دائمًا",
      fr: "Toujours disponible"
    },
    content: {
      en: "Our ICU is equipped with advanced medical technology and staffed by skilled professionals to provide life-saving treatments for critically ill patients. We ensure constant monitoring and rapid interventions.",
      ar: "وحدة العناية المركزة لدينا مجهزة بتقنيات طبية متقدمة ويعمل بها محترفون مهرة لتقديم علاجات منقذة للحياة للمرضى في حالة حرجة. نضمن المراقبة المستمرة والتدخلات السريعة.",
      fr: "Notre USI est équipée de technologies médicales avancées et dotée de professionnels qualifiés pour fournir des traitements vitaux aux patients gravement malades. Nous assurons une surveillance constante et des interventions rapides."
    }
  },
  {
    title: {
      en: "Pediatric Care",
      ar: "رعاية الأطفال",
      fr: "Soins Pédiatriques"
    },
    slug: "pediatric-care",
    type: {
      en: "Children's Health",
      ar: "صحة الأطفال",
      fr: "Santé des Enfants"
    },
    description: {
      en: "Specialized medical care for infants, children, and adolescents with a family-friendly approach.",
      ar: "رعاية طبية متخصصة للرضع والأطفال والمراهقين مع نهج يراعي الأسرة.",
      fr: "Soins médicaux spécialisés pour les nourrissons, les enfants et les adolescents avec une approche familiale."
    },
    icon: Baby,
    color: "bg-emerald-500",
    image: "/images/pediatrics.jpg",
    features: {
      en: [
        "Newborn Care",
        "Vaccinations",
        "Growth Monitoring",
        "Pediatric Emergency"
      ],
      ar: [
        "رعاية المواليد",
        "التطعيمات",
        "مراقبة النمو",
        "طوارئ الأطفال"
      ],
      fr: [
        "Soins aux nouveau-nés",
        "Vaccinations",
        "Surveillance de la croissance",
        "Urgences pédiatriques"
      ]
    },
    specialists: 14,
    availability: {
      en: "Child Friendly",
      ar: "صديق للطفل",
      fr: "Adapté aux enfants"
    },
    content: {
      en: "We offer dedicated healthcare for children, covering everything from newborn care and immunizations to growth tracking and pediatric emergencies. Our team ensures a warm and safe environment for young patients.",
      ar: "نقدم رعاية صحية مخصصة للأطفال، تشمل كل شيء من رعاية المواليد والتطعيمات إلى تتبع النمو وطوارئ الأطفال. يضمن فريقنا بيئة دافئة وآمنة للصغار.",
      fr: "Nous offrons des soins de santé dédiés aux enfants, couvrant tout des soins aux nouveau-nés et des vaccinations au suivi de la croissance et des urgences pédiatriques. Notre équipe assure un environnement chaleureux et sûr pour les jeunes patients."
    }
  }
];

export default function ServicePage() {
  const { language } = useLanguage() // Get the current language
  const t = pageTranslations[language] || pageTranslations.en // Fallback to English if translation is missing

  return (
    <section className="py-20 px-4 md:px-6 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold text-primary mb-2 tracking-wider uppercase"
          >
            {t.heading}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-4"
          >
            {t.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-3xl mx-auto font-medium"
          >
            {t.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={service.slug} href={`/services/${service.slug}`} passHref>
              <ServiceCard {...service} index={index} />
            </Link>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            {t.emergencyText}
          </p>
          <a 
            href="tel:+1234567890" 
            className="inline-flex items-center justify-center text-2xl font-bold text-primary hover:text-primary/90 transition-colors"
          >
            {t.emergencyNumber}
          </a>
        </motion.div>
      </div>
    </section>
  )
}