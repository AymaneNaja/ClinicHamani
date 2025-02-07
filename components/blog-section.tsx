"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton"; // Importing 
import { useLanguage } from "@/context/LanguageContext";




// page translations
const Translation = {
  en: {
    blogPage: {
      title: "Latest from Our Health Blog",
      description: "Stay informed with expert insights, health tips, and the latest medical advancements.",
      noArticles: "No articles available at the moment.",
      readMore: "Read More",
    },
  },
  fr: {
    blogPage: {
      title: "Dernières nouvelles de notre blog santé",
      description: "Restez informé grâce aux conseils d'experts, aux astuces santé et aux dernières avancées médicales.",
      noArticles: "Aucun article disponible pour le moment.",
      readMore: "Lire la suite",
    },
  },
  ar: {
    blogPage: {
      title: "آخر الأخبار من مدونتنا الصحية",
      description: "ابقَ على اطلاع مع آراء الخبراء ونصائح الصحة وآخر التطورات الطبية.",
      noArticles: "لا توجد مقالات متاحة في الوقت الحالي.",
      readMore: "اقرأ المزيد",
    },
  },
};

const BlogSection = () => {
  const { language } = useLanguage();

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
        const response = await fetch(
          `https://newsdata.io/api/1/news?category=health&language=${language}&apikey=${apiKey}`
        );
        const data = await response.json();

        const validArticles =
          data.results?.filter(
            (article) => article.title && article.description && article.link
          ) || [];

        setArticles(validArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [language]); // Fetch articles when the language changes

  return (
    <div className="container mx-auto px-4 py-16 w-11/12">
      {/* Blog Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-700 text-transparent bg-clip-text animate-accordion-up mb-4">
          {Translation[language].blogPage.title}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{Translation[language].blogPage.description}</p>
      </motion.div>

      {/* Blog Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="rounded-2xl bg-white shadow-lg">
                <Skeleton className="h-52 w-full rounded-t-2xl" />
                <div className="p-5">
                  <Skeleton className="h-6 w-3/4 mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6 mb-2" />
                  <Skeleton className="h-4 w-2/3 mb-4" />
                  <Skeleton className="h-6 w-24" />
                </div>
              </div>
            ))
          : articles.length > 0
          ? articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-2xl bg-white shadow-lg transition-transform hover:scale-105"
                dir={language === "ar" ? "rtl" : "ltr"}
              >
                {/* Blog Image */}
                <div className="relative h-52 w-full">
                  <Image
                    src={article.image_url || "/blog-placeholder.jpg"}
                    alt="Blog Cover"
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                </div>

                {/* Blog Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{article.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(article.link, "_blank")}
                    className="mt-4 inline-flex items-center text-blue-600 font-medium hover:underline"
                  >
                    {Translation[language].blogPage.readMore} <ArrowUpRight className="ml-2 h-4 w-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))
          : (
            <p className="text-center text-gray-500 col-span-full">{Translation[language].blogPage.noArticles}</p>
          )}
      </div>
    </div>
  );
};

export default BlogSection;
