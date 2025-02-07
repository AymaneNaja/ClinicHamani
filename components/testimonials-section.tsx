import { useLanguage } from '@/context/LanguageContext';
import { FC } from 'react';
const testimonialData = [
  {
    id: 1,
    name: 'Ahmed Al-Sayed',
    username: 'Patient since 2021',
    avatar: 'https://i.pravatar.cc/100?img=1',
    text: {
      en: 'The exceptional care at Clinic Hamani exceeded all my expectations. From the moment I walked in, I was greeted with warmth and professionalism. The doctors were thorough in their explanations, and the nurses went above and beyond to ensure my comfort. It is clear that Clinic Hamani prioritizes the well-being of its patients above all else.',
      fr: "Les soins exceptionnels à la Clinique Hamani ont dépassé toutes mes attentes. Dès que je suis entré, j'ai été accueilli avec chaleur et professionnalisme. Les médecins étaient très complets dans leurs explications, et les infirmières se sont surpassées pour assurer mon confort. Il est clair que la Clinique Hamani met le bien-être de ses patients avant tout.",
      ar: "الرعاية الاستثنائية في عيادة حماني تجاوزت جميع توقعاتي. منذ اللحظة التي دخلت فيها، تم استقبالي بحرارة واحترافية. كان الأطباء شامليين في تفسيراتهم، والتمريض بذل جهودًا إضافية لضمان راحتي. من الواضح أن عيادة حماني تضع رفاهية المرضى فوق كل شيء."
    },
    likes: 128,
    comments: 64,
    timestamp: '2 weeks ago',
    platform: 'google'
  },
  {
    id: 2,
    name: 'Fatima Al-Rashid',
    username: 'Patient since 2020',
    avatar: 'https://i.pravatar.cc/100?img=2',
    text: {
      en: 'Clinic Hamani combines modern medical expertise with traditional values of patient care. Their state-of-the-art facilities are matched only by the compassion and dedication of their staff. Every visit has been a positive experience, and I feel confident knowing that I am receiving the highest quality care available.',
      fr: "La Clinique Hamani combine une expertise médicale moderne avec des valeurs traditionnelles de soins aux patients. Ses installations ultramodernes ne sont égalées que par la compassion et l'engagement de son personnel. Chaque visite a été une expérience positive, et je me sens en confiance en sachant que je reçois les meilleurs soins disponibles.",
      ar: "عيادة حماني تجمع بين الخبرة الطبية الحديثة والقيم التقليدية لرعاية المرضى. مرافقها المتقدمة لا تُناظر إلا بالتعاطف والتزام طاقم العمل. كانت كل زيارة تجربة إيجابية، وأشعر بالثقة معرفةً بأنني أتلقى أفضل رعاية متاحة."
    },
    likes: 156,
    comments: 82,
    timestamp: '1 month ago',
    platform: 'facebook'
  },
  {
    id: 3,
    name: 'Omar Al-Najjar',
    username: 'Patient since 2022',
    avatar: 'https://i.pravatar.cc/100?img=3',
    text: {
      en: 'The dedication to patient comfort and well-being at Clinic Hamani is outstanding. Whether it is the attention to detail during consultations or the personalized care provided after treatment, every aspect of the experience reflects a commitment to excellence. I highly recommend Clinic Hamani to anyone seeking top-tier medical services.',
      fr: "L'engagement pour le confort et le bien-être des patients à la Clinique Hamani est exceptionnel. Que ce soit l'attention portée aux détails lors des consultations ou les soins personnalisés après le traitement, chaque aspect de l'expérience reflète un engagement envers l'excellence. Je recommande vivement la Clinique Hamani à quiconque cherche des services médicaux de premier ordre.",
      ar: "الالتزام بالراحة والرفاهية للمرضى في عيادة حماني مذهل. سواء كان ذلك الاهتمام بالتفاصيل أثناء الاستشارات أو الرعاية الشخصية المقدمة بعد العلاج، يعكس كل جانب من التجربة التزامًا بالتميز. أوصي بشدة بعيادة حماني لأي شخص يبحث عن خدمات طبية من الطراز الأول."
    },
    likes: 203,
    comments: 90,
    timestamp: '3 weeks ago',
    platform: 'google'
  },
  {
    id: 4,
    name: 'Layla Al-Hashemi',
    username: 'Patient since 2019',
    avatar: 'https://i.pravatar.cc/100?img=4',
    text: {
      en: 'I am grateful for the exceptional care I received at Clinic Hamani. The staff was attentive, knowledgeable, and compassionate throughout my entire treatment process. They took the time to listen to my concerns and address them thoroughly, which made a significant difference in my recovery journey.',
      fr: "Je suis reconnaissant pour les soins exceptionnels que j'ai reçus à la Clinique Hamani. Le personnel était attentif, compétent et compatissant tout au long de mon processus de traitement. Ils ont pris le temps d'écouter mes préoccupations et de les aborder en détail, ce qui a fait une grande différence dans mon parcours de rétablissement.",
      ar: "أنا ممتن للرعاية الاستثنائية التي تلقيتها في عيادة حماني. كان الطاقم متفانيًا ومطلعًا ومحسوبًا على مدار عملية علاجي بأكملها. لقد خصصوا الوقت لسماع مخاوفي ومعالجتها بشكل كامل، مما جعل فرقًا كبيرًا في رحلتي نحو التعافي."
    },
    likes: 167,
    comments: 76,
    timestamp: '5 days ago',
    platform: 'facebook'
  },
  {
    id: 5,
    name: 'Karim Al-Mansouri',
    username: 'Patient since 2021',
    avatar: 'https://i.pravatar.cc/100?img=5',
    text: {
      en: 'The staff at Clinic Hamani goes above and beyond to ensure patient comfort. Their friendly demeanor and willingness to help create a welcoming atmosphere that makes you feel at ease. No matter how busy they may be, they always take the time to answer your questions and provide reassurance.',
      fr: "Le personnel de la Clinique Hamani va au-delà pour assurer le confort des patients. Leur attitude amicale et leur volonté d'aider créent une atmosphère accueillante qui vous met à l'aise. Peu importe à quel point ils peuvent être occupés, ils prennent toujours le temps de répondre à vos questions et de vous rassurer.",
      ar: "طاقم العمل في عيادة حماني يبذل جهودًا إضافية لضمان راحة المرضى. طبيعتهم الودودة واستعدادهم للمساعدة يخلقان أجواء ترحيبية تجعلك تشعر بالراحة. بغض النظر عن مدى انشغالهم، فإنهم دائمًا يخصصون الوقت للإجابة على أسئلتك وتوفير الاطمئنان."
    },
    likes: 189,
    comments: 94,
    timestamp: '1 week ago',
    platform: 'google'
  },
  {
    id: 6,
    name: 'Noor Al-Qasimi',
    username: 'Patient since 2020',
    avatar: 'https://i.pravatar.cc/100?img=6',
    text: {
      en: 'Clinic Hamani represents the future of healthcare. Their innovative approach to medicine, combined with their unwavering commitment to patient satisfaction, sets them apart from other clinics. I have no doubt that they will continue to lead the way in delivering exceptional medical services.',
      fr: "La Clinique Hamani représente l'avenir des soins de santé. Leur approche innovante de la médecine, combinée à leur engagement inébranlable envers la satisfaction des patients, les distingue des autres cliniques. Je n'ai aucun doute qu'ils continueront à tracer la voie en matière de prestations de services médicaux exceptionnels.",
      ar: "عيادة حماني تمثل المستقبل في الرعاية الصحية. نهجهم الابتكاري في الطب، إلى جانب التزامهم الثابت برضاء المرضى، يجعلهم يبرزون عن العيادات الأخرى. ليس لدي أي شك في أنهم سيظلون روادًا في تقديم الخدمات الطبية الاستثنائية."
    },
    likes: 145,
    comments: 72,
    timestamp: '2 months ago',
    platform: 'facebook'
  },
  {
    id: 7,
    name: 'Zaid Al-Mahmoud',
    username: 'Patient since 2022',
    avatar: 'https://i.pravatar.cc/100?img=7',
    text: {
      en: 'The professional environment and expert care at Clinic Hamani make it the best choice for medical services. Their team of highly skilled professionals ensures that every patient receives the highest standard of care. Whether you need routine check-ups or specialized treatments, Clinic Hamani is the place to go.',
      fr: "L'environnement professionnel et les soins experts à la Clinique Hamani en font le meilleur choix pour les services médicaux. Leur équipe de professionnels hautement qualifiés garantit que chaque patient reçoit les normes les plus élevées de soins. Que vous ayez besoin de visites de routine ou de traitements spécialisés, la Clinique Hamani est l'endroit où il faut aller.",
      ar: "البيئة الاحترافية والعناية الخبيرة في عيادة حماني يجعلانها الخيار الأفضل للخدمات الطبية. فريقهم من المحترفين ذوي المهارات العالية يضمن أن كل مريض يتلقى أعلى معايير الرعاية. سواء كنت تحتاج إلى فحوصات روتينية أو علاجات متخصصة، فإن عيادة حماني هي المكان المناسب."
    },
    likes: 178,
    comments: 84,
    timestamp: '1 week ago',
    platform: 'google'
  },
  {
    id: 8,
    name: 'Amira Al-Saadi',
    username: 'Patient since 2021',
    avatar: 'https://i.pravatar.cc/100?img=8',
    text: {
      en: 'From the moment you enter Clinic Hamani, you know you are in capable hands. The staff is highly trained and dedicated, and their passion for helping others shines through in everything they do. It is comforting to know that such a high level of care exists in our community.',
      fr: "Dès que vous entrez à la Clinique Hamani, vous savez que vous êtes entre de bonnes mains. Le personnel est hautement formé et dévoué, et leur passion pour aider les autres se reflète dans tout ce qu'ils font. C'est rassurant de savoir qu'un tel niveau de soins existe dans notre communauté.",
      ar: "من اللحظة التي تدخل فيها عيادة حماني، تعلم أنك في أيدي أمينة. يتمتع الطاقم بتدريب عالٍ وتفانٍ، ويظهر شغفهم في مساعدة الآخرين في كل ما يقومون به. من الراحة معرفة وجود هذا المستوى العالي من الرعاية في مجتمعنا."
    },
    likes: 192,
    comments: 78,
    timestamp: '3 days ago',
    platform: 'facebook'
  },
  {
    id: 9,
    name: 'Hassan Al-Kuwaiti',
    username: 'Patient since 2020',
    avatar: 'https://i.pravatar.cc/100?img=9',
    text: {
      en: 'The quality of care at Clinic Hamani is exceptional. Each member of the staff contributes to creating an environment where patients feel valued and respected. Their attention to detail and personalized approach make a significant impact on the overall patient experience.',
      fr: "La qualité des soins à la Clinique Hamani est exceptionnelle. Chaque membre du personnel contribue à créer un environnement où les patients se sentent valorisés et respectés. Leur attention aux détails et leur approche personnalisée ont un impact significatif sur l'expérience globale des patients.",
      ar: "جودة الرعاية في عيادة حماني استثنائية. يساهم كل عضو من الطاقم في إنشاء بيئة حيث يشعر المرضى بالتقدير والاحترام. اهتمامهم بالتفاصيل ونهجهم الشخصي لهما تأثير كبير على تجربة المرضى العامة."
    },
    likes: 167,
    comments: 88,
    timestamp: '4 days ago',
    platform: 'google'
  },
  {
    id: 10,
    name: 'Reem Al-Falasi',
    username: 'Patient since 2021',
    avatar: 'https://i.pravatar.cc/100?img=10',
    text: {
      en: 'Clinic Hamani sets the standard for medical excellence. Their commitment to innovation and patient-centered care ensures that they remain at the forefront of the industry. I am proud to be a part of a community that values health and wellness as much as Clinic Hamani does.',
      fr: "La Clinique Hamani fixe les normes de l'excellence médicale. Leur engagement envers l'innovation et les soins centrés sur le patient garantit qu'ils restent à l'avant-garde de l'industrie. Je suis fier de faire partie d'une communauté qui accorde autant d'importance à la santé et au bien-être que la Clinique Hamani.",
      ar: "عيادة حماني تضع المعيار للامتياز الطبي. التزامهم بالابتكار والرعاية الموجهة للمريض يضمن لهم البقاء في طليعة الصناعة. أنا فخور لأنني جزء من مجتمع يقدر الصحة والرفاهية كما تفعل عيادة حماني."
    },
    likes: 201,
    comments: 96,
    timestamp: '1 week ago',
    platform: 'facebook'
  },
  {
    id: 11,
    name: 'Salma Al-Khaldi',
    username: 'Patient since 2018',
    avatar: 'https://i.pravatar.cc/100?img=11',
    text: {
      en: 'I trust Clinic Hamani with all my health needs. Over the years, they have consistently delivered exceptional service and care. Their ability to adapt to new technologies while maintaining a personal touch is what sets them apart from other clinics.',
      fr: "J'accorde ma confiance à la Clinique Hamani pour tous mes besoins de santé. Au fil des années, ils ont constamment offert un service et des soins exceptionnels. Leur capacité à s'adapter aux nouvelles technologies tout en maintenant un contact personnel est ce qui les distingue des autres cliniques.",
      ar: "أثق في عيادة حماني لتلبية جميع احتياجاتي الصحية. على مر السنين، قدّموا باستمرار خدمة ورعاية استثنائية. قدرتهم على التكيف مع التكنولوجيا الجديدة بينما يحافظون على لمسة شخصية هي ما يميزهم عن العيادات الأخرى."
    },
    likes: 135,
    comments: 56,
    timestamp: '6 months ago',
    platform: 'google'
  },
  {
    id: 12,
    name: 'Ali Al-Jaber',
    username: 'Patient since 2022',
    avatar: 'https://i.pravatar.cc/100?img=12',
    text: {
      en: 'The attention to detail at Clinic Hamani is remarkable. Every aspect of the facility, from the cleanliness of the rooms to the organization of appointments, demonstrates a commitment to excellence. This level of attention makes a significant difference in the overall patient experience.',
      fr: "L'attention portée aux détails à la Clinique Hamani est remarquable. Tous les aspects de l'établissement, de la propreté des chambres à l'organisation des rendez-vous, témoignent d'un engagement envers l'excellence. Ce niveau d'attention fait une grande différence dans l'expérience globale des patients.",
      ar: "الاهتمام بالتفاصيل في عيادة حماني ملحوظ. كل جوانب المرفق، من نظافة الغرف إلى تنظيم المواعيد، تدل على التزام بالتميز. هذا المستوى من الاهتمام يجعل فرقًا كبيرًا في تجربة المرضى العامة."
    },
    likes: 148,
    comments: 68,
    timestamp: '2 weeks ago',
    platform: 'facebook'
  },
  {
    id: 13,
    name: 'Noura Al-Maktoum',
    username: 'Patient since 2019',
    avatar: 'https://i.pravatar.cc/100?img=13',
    text: {
      en: "Clinic Hamani provides personalized care that makes a difference. They take the time to understand each patient's unique needs and develop a treatment plan tailored to their specific situation. This level of customization is rare and truly sets them apart",
      fr: "La Clinique Hamani offre des soins personnalisés qui font une différence. Ils prennent le temps de comprendre les besoins uniques de chaque patient et développent un plan de traitement adapté à leur situation spécifique. Ce niveau de personnalisation est rare et les distingue véritablement.",
      ar: "عيادة حماني تقدم رعاية شخصية تصنع فرقًا. يخصصون الوقت لفهم احتياجات كل مريض خاصة وتطوير خطة علاج مخصصة لحالته الفردية. هذا المستوى من التخصيص نادر حقًا ويبرزهم حقًا."
    },
    likes: 159,
    comments: 74,
    timestamp: '1 month ago',
    platform: 'google'
  },
  {
    id: 14,
    name: 'Khalid Al-Falah',
    username: 'Patient since 2020',
    avatar: 'https://i.pravatar.cc/100?img=14',
    text: {
      en: 'The staff at Clinic Hamani is always friendly and helpful. They go out of their way to ensure that every patient feels welcome and supported. Whether it is answering questions or providing guidance, they are always there to assist you in any way possible.',
      fr: "Le personnel de la Clinique Hamani est toujours sympathique et serviable. Ils se déplacent pour s'assurer que chaque patient se sente accueilli et soutenu. Que ce soit pour répondre à des questions ou donner des conseils, ils sont toujours là pour vous aider de toute manière possible.",
      ar: "طاقم العمل في عيادة حماني دائمًا ودود ومتعاون. يبذلون جهدًا إضافيًا لضمان أن يشعر كل مريض بالترحيب والدعم. سواء كان الأمر يتعلق بالإجابة على الأسئلة أو تقديم الإرشادات، فإنهم دائمًا هناك لمساعدتك بأي طريقة ممكنة."
    },
    likes: 172,
    comments: 80,
    timestamp: '3 weeks ago',
    platform: 'facebook'
  }
];

// Translations (from the file)
const translations = {
  en: {
    title: "TESTIMONIALS",
    subtitle: "What Our Patients Say",
    description: "Discover why patients choose Clinic Hamani for their healthcare needs."
  },
  ar: {
    title: "الشهادات",
    subtitle: "ماذا يقول مرضانا",
    description: "اكتشف لماذا يختار المرضى عيادة حماني لاحتياجاتهم الصحية."
  },
  fr: {
    title: "TÉMOIGNAGES",
    subtitle: "Ce que disent nos patients",
    description: "Découvrez pourquoi les patients choisissent Clinique Hamani pour leurs besoins de santé."
  }
};

// Platform icons
const platformIcons = {
  google: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      {/* Google icon SVG */}
    </svg>
  ),
  facebook: (
    <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
      {/* Facebook icon SVG */}
    </svg>
  )
};

// Testimonial card component
const TestimonialCard: FC<{ testimonial: typeof testimonialData[0] }> = ({ testimonial }) => {
  const { language } = useLanguage(); // Get the current language from context

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg w-[380px] mx-4 my-2 transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full mr-4 border-2 border-blue-100"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
            <p className="text-blue-600 text-sm">{testimonial.username}</p>
          </div>
        </div>
        <div className="text-gray-400 hover:text-gray-600">
          {platformIcons[testimonial.platform as keyof typeof platformIcons]}
        </div>
      </div>
      <div className="min-h-[100px] mb-4">
        <p className="text-gray-600 whitespace-normal break-words line-clamp-4">
          {testimonial.text[language]} {/* Dynamically select the text based on language */}
        </p>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <svg className="w-5 h-5 text-red-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
              {/* Like icon SVG */}
            </svg>
            {testimonial.likes}
          </span>
          <span className="flex items-center">
            <svg className="w-5 h-5 text-blue-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
              {/* Comment icon SVG */}
            </svg>
            {testimonial.comments}
          </span>
        </div>
        <span className="text-blue-500">{testimonial.timestamp}</span>
      </div>
    </div>
  );
};

// Testimonials component
const Testimonials = () => {
  const { language } = useLanguage(); // Get the current language from context
  const lang = translations[language]; // Select the appropriate translation
  const isArabic = language === 'ar'; // Check if the language is Arabic for RTL support

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4 ${
        isArabic ? 'rtl' : ''
      }`}
    >
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-semibold text-lg mb-2">{lang.title}</h2>
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{lang.subtitle}</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">{lang.description}</p>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: ${isArabic ? 'translateX(50%)' : 'translateX(-50%)'};
          }
        }

        .scroll-container {
          overflow: hidden;
          white-space: nowrap;
          position: relative;
          mask-image: linear-gradient(
            ${isArabic ? 'to left' : 'to right'},
            transparent,
            black 10%,
            black 90%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            ${isArabic ? 'to left' : 'to right'},
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }

        .scroll-wrapper {
          display: inline-block;
          animation: scroll cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .scroll-wrapper:hover {
          animation-play-state: paused;
        }

        .row-1 .scroll-wrapper {
          animation-duration: 50s;
        }
        .row-2 .scroll-wrapper {
          animation-duration: 40s;
        }
      `}</style>

      <div className="space-y-8">
        <div className="scroll-container row-1">
          <div className="scroll-wrapper">
            {[...testimonialData, ...testimonialData].map((testimonial, index) => (
              <div key={index} className="inline-block">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
        <div className="scroll-container row-2">
          <div
            className="scroll-wrapper"
            style={{
              animationDirection: isArabic ? 'normal' : 'reverse'
            }}
          >
            {[...testimonialData.reverse(), ...testimonialData].map((testimonial, index) => (
              <div key={index} className="inline-block">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;