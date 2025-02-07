import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { FaCheckCircle } from 'react-icons/fa';

const translation = {
  ar: {
    title: "هدفنا: نحن ملتزمون بصحتك ورفاهيتك",
    description:
      "في عيادتنا، صحتك ورفاهيتك في قلب كل ما نقوم به. نحن ندرك أن تقديم رعاية شخصية ورحيمة أمر ضروري.",
    storyTitle: "اقرأ قصتنا",
    storyDescription:
      "بدأت قصتنا منذ عقود بمهمة بسيطة لتقديم رعاية طبية استثنائية في بيئة دافئة ومرحبة.",
    features: [
      "استخدام التكنولوجيا الحديثة لتشخيص الأمراض وعلاجها.",
      "خدمة طبية على مدار الساعة عبر الإنترنت وخارجها.",
      "جدولة مواعيد سهلة ومرنة."
    ],
    buttonText: "احجز موعدًا"
  },
  fr: {
    title: "Notre objectif : Nous nous engageons pour votre santé et votre bien-être",
    description:
      "Dans notre clinique, votre santé et votre bien-être sont au cœur de tout ce que nous faisons. Nous comprenons que fournir des soins personnalisés et compatissants est essentiel.",
    storyTitle: "Lisez notre histoire",
    storyDescription:
      "Notre histoire a commencé il y a des décennies avec une mission simple : offrir des soins médicaux exceptionnels dans un environnement chaleureux et accueillant.",
    features: [
      "Utilisation de la technologie moderne pour diagnostiquer et traiter les maladies.",
      "Service médical 24/7 par consultations en ligne et hors ligne.",
      "Planification de rendez-vous facile et flexible."
    ],
    buttonText: "Prendre rendez-vous"
  },
  en: {
    title: "Our Goal: We Are Committed to Your Health and Well-being",
    description:
      "At Our Clinic, your health and well-being are at the heart of everything we do. We understand that providing personalized, compassionate care is essential.",
    storyTitle: "Read Our Story",
    storyDescription:
      "Our story began decades ago with a simple mission to provide exceptional medical care in a warm and welcoming environment.",
    features: [
      "Using modern technology to diagnose and treat diseases.",
      "24/7 medical service through online and offline consultations.",
      "Easy and flexible appointment scheduling."
    ],
    buttonText: "Book an Appointment"
  }
};

const HealthcareSection = ({ lang = "en" }) => {
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);
  const { language } = useLanguage();

  useEffect(() => {
    // Animate the entire section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    // Animate each image individually from different sides
    imageRefs.current.forEach((ref, index) => {
      const directions = [
        { x: -100, y: 0 }, // Left
        { x: 100, y: -100 }, // Right and Up
        { x: 100, y: 100 }, // Right and Down
      ];
      gsap.fromTo(
        ref,
        { opacity: 0, ...directions[index] },
        { opacity: 1, x: 0, y: 0, duration: 1, delay: index * 0.3, ease: "power3.out" }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4 md:container mx-auto w-11/12">
      <div className="text-center mb-12">
        {/* Gradient Shining Title */}
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent animate-gradient">
          {translation[language].title}
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          {translation[language].description}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Image Grid */}
        <div className="w-full lg:w-1/2 h-[500px] lg:h-[600px] grid grid-cols-2 gap-4">
          {/* Large Image */}
          <div
            ref={(el) => (imageRefs.current[0] = el)}
            className="col-span-1 row-span-2 bg-cover bg-center rounded-lg shadow-lg"
            style={{
              backgroundImage: `url(https://plus.unsplash.com/premium_photo-1664300313836-fa58ff0fc430?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8)`,
            }}
          ></div>
          {/* Small Image 1 */}
          <div
            ref={(el) => (imageRefs.current[1] = el)}
            className="col-span-1 bg-cover bg-center rounded-lg shadow-lg"
            style={{
              backgroundImage: `url(https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yfGVufDB8fDB8fHww)`,
            }}
          ></div>
          {/* Small Image 2 */}
          <div
            ref={(el) => (imageRefs.current[2] = el)}
            className="col-span-1 bg-cover bg-center rounded-lg shadow-lg"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1605289982774-9a6fef564df8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D)`,
            }}
          ></div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 lg:pl-12">
          <h2 className="text-3xl font-semibold text-blue-500">
            {translation[language].storyTitle}
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            {translation[language].storyDescription}
          </p>
          <ul className="mt-4 space-y-4">
            {translation[language].features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <FaCheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-lg text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          <Button className="mt-6 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            {translation[language].buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HealthcareSection