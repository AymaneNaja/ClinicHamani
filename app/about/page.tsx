'use client'
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Building, CheckCircle, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { TeamCard } from '@/components/team-card';
import { teamMembers } from '@/lib/team-members';
import BlogSection from '@/components/blog-section';
import Image from 'next/image';
import HealthcareSection from '@/components/healthcare-section-hero';

const translations = {
  en: {
    heroTitle: "Premium Healthcare Delivered With Personal Care",
    heroDescription: "We are a team of passionate medical professionals dedicated to offering exceptional care and a comfortable experience for our patients.",
    meetTeamButton: "Meet Our Team",
    missionTitle: "Our Mission",
    missionDescription: "At Clinic Hamani, our mission is to provide exceptional medical care that enhances the quality of life for our patients. We strive to create a welcoming environment where patients feel comfortable and confident in their healthcare journey.",
    missionList: [
      "Patient-centered care",
      "Continuous education and training",
      "Cutting-edge medical technology",
      "Community health involvement",
    ],
    valuesTitle: "Our Values",
    values: [
      {
        icon: Users,
        title: "Compassion",
        description: "We treat every patient with kindness, empathy, and understanding.",
      },
      {
        icon: Building,
        title: "Excellence",
        description: "We strive for the highest standards in medical care and patient outcomes.",
      },
      {
        icon: Clock,
        title: "Integrity",
        description: "We maintain honesty, transparency, and ethical practices in all we do.",
      },
    ],
    teamTitle: "Meet Our Expert Medical Team",
    teamDescription: "Our team of experienced healthcare professionals is dedicated to providing you with the best medical care possible.",
    viewAllTeam: "View All Team Members",
    historyTitle: "Our Journey",
    historyDescription: "From our humble beginnings to becoming a leading healthcare provider, here's how we've grown over the years.",
    historyEvents: [
      {
        year: 2005,
        title: "Foundation",
        description: "Clinic Hamani was founded with a vision to provide accessible, high-quality medical care.",
      },
      {
        year: 2010,
        title: "Expansion",
        description: "We opened our second clinic and introduced advanced medical services.",
      },
      {
        year: 2015,
        title: "Technology Upgrade",
        description: "Implemented state-of-the-art medical technologies to enhance patient care.",
      },
      {
        year: 2020,
        title: "Community Outreach",
        description: "Launched our community health program, reaching thousands of people.",
      },
      {
        year: 2025,
        title: "Looking Ahead",
        description: "Continuing to grow and innovate in healthcare for our patients.",
      },
    ],
    ctaTitle: "Ready to Experience Our Care?",
    ctaDescription: "Join the Clinic Hamani family and take the first step towards a healthier, happier life. Schedule your consultation today.",
    bookAppointment: "Book Your Appointment",
  },
  fr: {
    heroTitle: "Soins de Santé Premium Livrés Avec Soin Personnel",
    heroDescription: "Nous sommes une équipe de professionnels médicaux passionnés dédiés à offrir des soins exceptionnels et une expérience agréable à nos patients.",
    meetTeamButton: "Rencontrez Notre Équipe",
    missionTitle: "Notre Mission",
    missionDescription: "Chez Clinic Hamani, notre mission est de fournir des soins médicaux exceptionnels qui améliorent la qualité de vie de nos patients. Nous nous efforçons de créer un environnement accueillant où les patients se sentent à l'aise et confiants dans leur parcours de santé.",
    missionList: [
      "Soins centrés sur le patient",
      "Formation et éducation continues",
      "Technologie médicale de pointe",
      "Engagement communautaire en santé",
    ],
    valuesTitle: "Nos Valeurs",
    values: [
      {
        icon: Users,
        title: "Compassion",
        description: "Nous traitons chaque patient avec gentillesse, empathie et compréhension.",
      },
      {
        icon: Building,
        title: "Excellence",
        description: "Nous visons les normes les plus élevées en matière de soins médicaux et de résultats pour les patients.",
      },
      {
        icon: Clock,
        title: "Intégrité",
        description: "Nous maintenons l'honnêteté, la transparence et des pratiques éthiques dans tout ce que nous faisons.",
      },
    ],
    teamTitle: "Rencontrez Notre Équipe Médicale d'Experts",
    teamDescription: "Notre équipe de professionnels de santé expérimentés est dédiée à vous fournir les meilleurs soins médicaux possibles.",
    viewAllTeam: "Voir Tous les Membres de l'Équipe",
    historyTitle: "Notre Parcours",
    historyDescription: "De nos modestes débuts à devenir un fournisseur de soins de santé de premier plan, voici comment nous avons évolué au fil des années.",
    historyEvents: [
      {
        year: 2005,
        title: "Fondation",
        description: "Clinic Hamani a été fondé avec une vision de fournir des soins médicaux accessibles et de haute qualité.",
      },
      {
        year: 2010,
        title: "Expansion",
        description: "Nous avons ouvert notre deuxième clinique et introduit des services médicaux avancés.",
      },
      {
        year: 2015,
        title: "Mise à Niveau Technologique",
        description: "Mise en œuvre de technologies médicales de pointe pour améliorer les soins aux patients.",
      },
      {
        year: 2020,
        title: "Engagement Communautaire",
        description: "Lancement de notre programme de santé communautaire, touchant des milliers de personnes.",
      },
      {
        year: 2025,
        title: "Regard Vers l'Avenir",
        description: "Continuer à grandir et innover dans les soins de santé pour nos patients.",
      },
    ],
    ctaTitle: "Prêt à Découvrir Nos Soins?",
    ctaDescription: "Rejoignez la famille Clinic Hamani et faites le premier pas vers une vie plus saine et plus heureuse. Planifiez votre consultation aujourd'hui.",
    bookAppointment: "Prendre Rendez-vous",
  },
  ar: {
    heroTitle: "رعاية صحية مميزة بتوصيل شخصي",
    heroDescription: "نحن فريق من محترفي الرعاية الصحية المتفانين في تقديم رعاية استثنائية وتجربة مريحة لمرضانا.",
    meetTeamButton: "تعرف على فريقنا",
    missionTitle: "مهمتنا",
    missionDescription: "في عيادة هاماني، مهمتنا هي تقديم رعاية طبية استثنائية تعزز جودة الحياة لمرضانا. نسعى جاهدين لخلق بيئة ترحيبية يشعر فيها المرضى بالراحة والثقة في رحلتهم الصحية.",
    missionList: [
      "رعاية تركز على المريض",
      "التعليم والتدريب المستمر",
      "التكنولوجيا الطبية المتطورة",
      "المشاركة المجتمعية في الصحة",
    ],
    valuesTitle: "قيمنا",
    values: [
      {
        icon: Users,
        title: "التعاطف",
        description: "نعامل كل مريض بلطف وتعاطف وفهم.",
      },
      {
        icon: Building,
        title: "التميز",
        description: "نسعى لتحقيق أعلى المعايير في الرعاية الطبية ونتائج المرضى.",
      },
      {
        icon: Clock,
        title: "النزاهة",
        description: "نحافظ على الصدق والشفافية والممارسات الأخلاقية في كل ما نقوم به.",
      },
    ],
    teamTitle: "تعرف على فريقنا الطبي الخبير",
    teamDescription: "فريقنا من المحترفين ذوي الخبرة في الرعاية الصحية مكرس لتقديم أفضل رعاية طبية ممكنة لك.",
    viewAllTeam: "عرض جميع أعضاء الفريق",
    historyTitle: "رحلتنا",
    historyDescription: "من بداياتنا المتواضعة إلى أن نصبح مزودًا رائدًا للرعاية الصحية، إليك كيف تطورنا على مر السنين.",
    historyEvents: [
      {
        year: 2005,
        title: "التأسيس",
        description: "تم تأسيس عيادة هاماني برؤية لتقديم رعاية طبية عالية الجودة ومتاحة للجميع.",
      },
      {
        year: 2010,
        title: "التوسع",
        description: "فتحنا عيادتنا الثانية وقدمنا خدمات طبية متقدمة.",
      },
      {
        year: 2015,
        title: "تحديث التكنولوجيا",
        description: "تنفيذ تقنيات طبية حديثة لتعزيز رعاية المرضى.",
      },
      {
        year: 2020,
        title: "التواصل المجتمعي",
        description: "إطلاق برنامجنا الصحي المجتمعي، وصولًا إلى الآلاف.",
      },
      {
        year: 2025,
        title: "نظرة نحو المستقبل",
        description: "الاستمرار في النمو والابتكار في الرعاية الصحية لمرضانا.",
      },
    ],
    ctaTitle: "هل أنت مستعد لتجربة رعايتنا؟",
    ctaDescription: "انضم إلى عائلة عيادة هاماني واتخذ الخطوة الأولى نحو حياة أكثر صحة وسعادة. حدد موعد استشارتك اليوم.",
    bookAppointment: "احجز موعدك",
  },
};
export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="relative flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedSection className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20">
          <div className="container relative z-10">
            <div className="mx-auto max-w-[980px] text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
                  {t.heroTitle}
                </h1>
              </motion.div>
              <motion.p
                className="mx-auto mb-8 max-w-[700px] text-xl text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {t.heroDescription}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  {t.meetTeamButton}
                </Button>
              </motion.div>
            </div>
          </div>



          {/* Wide Video Section */}
<motion.div
  className="mt-12 mx-auto  container rounded-2xl overflow-hidden "
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
>
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-10/12 h-72 mx-auto lg:h-80 object-cover shadow-xl rounded-xl"
    style={{ aspectRatio: "16 / 9" }}
  >
    <source 
      src={'https://cdn.qwenlm.ai/output/6929f205-427e-4eef-80bb-271ddcb18bbb/t2v/84e6354d-da3b-41ec-8473-80c8c9595f42/3f6821cb-256a-49ee-b6b6-46adf39591fe.mp4'} 
      type="video/mp4" 
    />
    Your browser does not support the video tag.
  </video>
</motion.div>
        </AnimatedSection>

        {/* Mission and Values Section */}
        <AnimatedSection className="py-20">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold">{t.missionTitle}</h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  {t.missionDescription}
                </p>
                <ul className="space-y-4">
                  {t.missionList.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <CheckCircle className="h-6 w-6 text-blue-600" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-3xl font-bold">{t.valuesTitle}</h2>
                <div className="grid gap-6">
                  {t.values.map((value, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                        <value.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        {/* healthcare */}
        <HealthcareSection/>

        {/* Team Section */}
        <AnimatedSection className="bg-blue-50 py-20">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t.teamTitle}</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground">
                {t.teamDescription}
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.slice(0, 3).map((member, index) => (
                <TeamCard key={member.slug} {...member} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                {t.viewAllTeam}
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* History Section */}
        <AnimatedSection className="py-20">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t.historyTitle}</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground">
                {t.historyDescription}
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-blue-200"></div>
              {t.historyEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className={`mb-8 flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                    <div className="mb-2 text-xl font-bold text-blue-600">{event.year}</div>
                    <h3 className="mb-2 text-lg font-semibold">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="bg-blue-600 py-20 text-white mb-10 rounded-xl container">
          <div className="container text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t.ctaTitle}</h2>
            <p className="mx-auto mb-8 max-w-[600px]">
              {t.ctaDescription}
            </p>
            <Button size="lg" variant="secondary" className="group">
              {t.bookAppointment}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
}