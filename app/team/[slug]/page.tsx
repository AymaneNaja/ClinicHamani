"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Github,
} from "lucide-react";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";


const TeamMembers = [
  
  {
    slug: "dr-sarah-johnson",
    name: "Dr. Sarah Johnson",
    role: "Pediatrician",
    image:
      "https://plus.unsplash.com/premium_photo-1664475543697-229156438e1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxkb2N0b3JzJTIwcG9ydHJhaXR8ZW58MHwxfDB8fHww",
    specialty: "Child Health",
    bio: "Dr. Sarah Johnson is a dedicated pediatrician with over 10 years of experience in providing comprehensive care for children from infancy through adolescence.",
    skills: [
      { name: "Pediatric Care", level: 95 },
      { name: "Vaccination", level: 90 },
      { name: "Child Development", level: 85 },
    ],
    experiences: [
      { title: "Senior Pediatrician", description: "5+ years at Children's Hospital" },
      { title: "Research Fellow", description: "2 years studying childhood obesity" },
    ],
    translations: {
      en: {
        role: "Pediatrician",
        specialty: "Child Health",
        bio: "Dr. Sarah Johnson is a dedicated pediatrician with over 10 years of experience in providing comprehensive care for children from infancy through adolescence.",
        skills: [
          { name: "Pediatric Care", level: 95 },
          { name: "Vaccination", level: 90 },
          { name: "Child Development", level: 85 },
        ],
        experiences: [
          { title: "Senior Pediatrician", description: "5+ years at Children's Hospital" },
          { title: "Research Fellow", description: "2 years studying childhood obesity" },
        ],
      },
      fr: {
        role: "Pédiatre",
        specialty: "Santé de l'enfant",
        bio: "Le Dr Sarah Johnson est une pédiatre dévouée avec plus de 10 ans d'expérience dans la prestation de soins complets aux enfants de la naissance à l'adolescence.",
        skills: [
          { name: "Soins pédiatriques", level: 95 },
          { name: "Vaccination", level: 90 },
          { name: "Développement de l'enfant", level: 85 },
        ],
        experiences: [
          { title: "Pédiatre senior", description: "5+ ans à l'hôpital pour enfants" },
          { title: "Chercheur", description: "2 ans d'étude sur l'obésité infantile" },
        ],
      },
      ar: {
        role: "طبيب أطفال",
        specialty: "صحة الطفل",
        bio: "الدكتورة سارة جونسون هي طبيبة أطفال مكرسة لديها أكثر من 10 سنوات من الخبرة في تقديم رعاية شاملة للأطفال من الرضاعة حتى المراهقة.",
        skills: [
          { name: "رعاية الأطفال", level: 95 },
          { name: "التطعيم", level: 90 },
          { name: "تطور الطفل", level: 85 },
        ],
        experiences: [
          { title: "طبيب أطفال كبير", description: "5+ سنوات في مستشفى الأطفال" },
          { title: "باحث", description: "سنتان في دراسة سمنة الأطفال" },
        ],
      },
    },
  },
  {
    slug: "dr-michael-chen",
    name: "Dr. Michael Chen",
    role: "Radiologist",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvY3RvciUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
    specialty: "Diagnostic Imaging",
    bio: "Dr. Michael Chen is a highly skilled radiologist with expertise in interpreting medical images to aid in diagnosis and treatment planning.",
    skills: [
      { name: "Diagnostic Imaging", level: 95 },
      { name: "Image Interpretation", level: 90 },
      { name: "Medical Report Writing", level: 85 },
    ],
    experiences: [
      { title: "Staff Radiologist", description: "4+ years at City Hospital" },
      { title: "Fellowship", description: "1 year in advanced imaging techniques" },
    ],
    translations: {
      en: {
        role: "Radiologist",
        specialty: "Diagnostic Imaging",
        bio: "Dr. Michael Chen is a highly skilled radiologist with expertise in interpreting medical images to aid in diagnosis and treatment planning.",
        skills: [
          { name: "Diagnostic Imaging", level: 95 },
          { name: "Image Interpretation", level: 90 },
          { name: "Medical Report Writing", level: 85 },
        ],
        experiences: [
          { title: "Staff Radiologist", description: "4+ years at City Hospital" },
          { title: "Fellowship", description: "1 year in advanced imaging techniques" },
        ],
      },
      fr: {
        role: "Radiologue",
        specialty: "Imagerie diagnostique",
        bio: "Le Dr Michael Chen est un radiologue très compétent, expert dans l'interprétation des images médicales pour aider au diagnostic et à la planification du traitement.",
        skills: [
          { name: "Imagerie diagnostique", level: 95 },
          { name: "Interprétation d'images", level: 90 },
          { name: "Rédaction de rapports médicaux", level: 85 },
        ],
        experiences: [
          { title: "Radiologue", description: "4+ ans à l'hôpital de la ville" },
          { title: "Fellowship", description: "1 an en techniques d'imagerie avancées" },
        ],
      },
      ar: {
        role: "أخصائي أشعة",
        specialty: "التصوير التشخيصي",
        bio: "الدكتور مايكل تشن هو أخصائي أشعة ماهر يتمتع بخبرة في تفسير الصور الطبية للمساعدة في التشخيص وتخطيط العلاج.",
        skills: [
          { name: "التصوير التشخيصي", level: 95 },
          { name: "تفسير الصور", level: 90 },
          { name: "كتابة التقارير الطبية", level: 85 },
        ],
        experiences: [
          { title: "أخصائي أشعة", description: "4+ سنوات في مستشفى المدينة" },
          { title: "زمالة", description: "سنة واحدة في تقنيات التصوير المتقدمة" },
        ],
      },
    },
  },
  {
    slug: "dr-emily-williams",
    name: "Dr. Emily Williams",
    role: "Surgeon",
    image:
      "https://images.unsplash.com/photo-1662848586769-314289d4c8b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxkb2N0b3JzJTIwcG9ydHJhaXR8ZW58MHwxfDB8fHww",
    specialty: "General Surgery",
    bio: "Dr. Emily Williams is a board-certified general surgeon with a focus on minimally invasive procedures and patient-centered care.",
    skills: [
      { name: "Surgical Procedures", level: 95 },
      { name: "Laparoscopic Surgery", level: 90 },
      { name: "Wound Care", level: 85 },
    ],
    experiences: [
      { title: "Surgical Resident", description: "5 years at University Hospital" },
      { title: "Surgical Fellow", description: "1 year in advanced surgical techniques" },
    ],
    translations: {
      en: {
        role: "Surgeon",
        specialty: "General Surgery",
        bio: "Dr. Emily Williams is a board-certified general surgeon with a focus on minimally invasive procedures and patient-centered care.",
        skills: [
          { name: "Surgical Procedures", level: 95 },
          { name: "Laparoscopic Surgery", level: 90 },
          { name: "Wound Care", level: 85 },
        ],
        experiences: [
          { title: "Surgical Resident", description: "5 years at University Hospital" },
          { title: "Surgical Fellow", description: "1 year in advanced surgical techniques" },
        ],
      },
      fr: {
        role: "Chirurgien",
        specialty: "Chirurgie générale",
        bio: "Le Dr Emily Williams est une chirurgienne générale certifiée, spécialisée dans les procédures minimalement invasives et les soins centrés sur le patient.",
        skills: [
          { name: "Procédures chirurgicales", level: 95 },
          { name: "Chirurgie laparoscopique", level: 90 },
          { name: "Soins des plaies", level: 85 },
        ],
        experiences: [
          { title: "Résident en chirurgie", description: "5 ans à l'hôpital universitaire" },
          { title: "Fellow en chirurgie", description: "1 an en techniques chirurgicales avancées" },
        ],
      },
      ar: {
        role: "جراح",
        specialty: "جراحة عامة",
        bio: "الدكتورة إيميلي ويليامز هي جراحة عامة معتمدة تركز على الإجراءات طفيفة التوغل والرعاية المتمحورة حول المريض.",
        skills: [
          { name: "الإجراءات الجراحية", level: 95 },
          { name: "جراحة المناظير", level: 90 },
          { name: "العناية بالجروح", level: 85 },
        ],
        experiences: [
          { title: "مقيم جراحي", description: "5 سنوات في المستشفى الجامعي" },
          { title: "زميل جراحي", description: "سنة واحدة في تقنيات الجراحة المتقدمة" },
        ],
      },
    },
  },
  {
    slug: "dr-david-miller",
    name: "Dr. David Miller",
    role: "Intensive Care",
    image:
      "https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGRvY3RvcnMlMjBwb3J0cmFpdHxlbnwwfDF8MHx8fDA%3D",
    specialty: "Critical Care",
    bio: "Dr. David Miller is a highly experienced intensivist dedicated to providing the highest quality critical care to patients in life-threatening situations.",
    skills: [
      { name: "Critical Care Management", level: 95 },
      { name: "Intubation", level: 90 },
      { name: "Mechanical Ventilation", level: 85 },
    ],
    experiences: [
      { title: "Intensivist", description: "6+ years at County Hospital" },
      { title: "Medical Director", description: "2 years leading the ICU team" },
    ],
    translations: {
      en: {
        role: "Intensive Care",
        specialty: "Critical Care",
        bio: "Dr. David Miller is a highly experienced intensivist dedicated to providing the highest quality critical care to patients in life-threatening situations.",
        skills: [
          { name: "Critical Care Management", level: 95 },
          { name: "Intubation", level: 90 },
          { name: "Mechanical Ventilation", level: 85 },
        ],
        experiences: [
          { title: "Intensivist", description: "6+ years at County Hospital" },
          { title: "Medical Director", description: "2 years leading the ICU team" },
        ],
      },
      fr: {
        role: "Soins intensifs",
        specialty: "Soins critiques",
        bio: "Le Dr David Miller est un intensiviste très expérimenté, dévoué à fournir des soins critiques de la plus haute qualité aux patients en situation critique.",
        skills: [
          { name: "Gestion des soins critiques", level: 95 },
          { name: "Intubation", level: 90 },
          { name: "Ventilation mécanique", level: 85 },
        ],
        experiences: [
          { title: "Intensiviste", description: "6+ ans à l'hôpital du comté" },
          { title: "Directeur médical", description: "2 ans à la tête de l'équipe de soins intensifs" },
        ],
      },
      ar: {
        role: "العناية المركزة",
        specialty: "الرعاية الحرجة",
        bio: "الدكتور ديفيد ميلر هو أخصائي عناية مركزة ذو خبرة عالية مكرس لتقديم أعلى مستويات الرعاية الحرجة للمرضى في الحالات المهددة للحياة.",
        skills: [
          { name: "إدارة الرعاية الحرجة", level: 95 },
          { name: "التنبيب", level: 90 },
          { name: "التنفس الاصطناعي", level: 85 },
        ],
        experiences: [
          { title: "أخصائي عناية مركزة", description: "6+ سنوات في مستشفى المقاطعة" },
          { title: "مدير طبي", description: "سنتان في قيادة فريق العناية المركزة" },
        ],
      },
    },
  },
  {
    slug: "dr-lisa-anderson",
    name: "Dr. Lisa Anderson",
    role: "Gynecologist",
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGRvY3RvcnMlMjBwb3J0cmFpdHxlbnwwfDF8MHx8fDA%3D",
    specialty: "Women's Health",
    bio: "Dr. Lisa Anderson is a compassionate gynecologist providing comprehensive care for women throughout all stages of life.",
    skills: [
      { name: "Gynecological Exams", level: 95 },
      { name: "Prenatal Care", level: 90 },
      { name: "Family Planning", level: 85 },
    ],
    experiences: [
      { title: "Obstetrician-Gynecologist", description: "7+ years at Women's Health Clinic" },
      { title: "Medical Consultant", description: "2 years advising on women's health initiatives" },
    ],
    translations: {
      en: {
        role: "Gynecologist",
        specialty: "Women's Health",
        bio: "Dr. Lisa Anderson is a compassionate gynecologist providing comprehensive care for women throughout all stages of life.",
        skills: [
          { name: "Gynecological Exams", level: 95 },
          { name: "Prenatal Care", level: 90 },
          { name: "Family Planning", level: 85 },
        ],
        experiences: [
          { title: "Obstetrician-Gynecologist", description: "7+ years at Women's Health Clinic" },
          { title: "Medical Consultant", description: "2 years advising on women's health initiatives" },
        ],
      },
      fr: {
        role: "Gynécologue",
        specialty: "Santé des femmes",
        bio: "Le Dr Lisa Anderson est une gynécologue compatissante qui fournit des soins complets aux femmes à toutes les étapes de leur vie.",
        skills: [
          { name: "Examens gynécologiques", level: 95 },
          { name: "Soins prénatals", level: 90 },
          { name: "Planification familiale", level: 85 },
        ],
        experiences: [
          { title: "Obstétricien-Gynécologue", description: "7+ ans à la clinique de santé des femmes" },
          { title: "Consultant médical", description: "2 ans de conseil sur les initiatives de santé des femmes" },
        ],
      },
      ar: {
        role: "طبيب نساء وتوليد",
        specialty: "صحة المرأة",
        bio: "الدكتورة ليزا أندرسون هي طبيبة نساء وتوليد حنونة تقدم رعاية شاملة للنساء في جميع مراحل الحياة.",
        skills: [
          { name: "فحوصات نسائية", level: 95 },
          { name: "رعاية ما قبل الولادة", level: 90 },
          { name: "تخطيط الأسرة", level: 85 },
        ],
        experiences: [
          { title: "طبيب نساء وتوليد", description: "7+ سنوات في عيادة صحة المرأة" },
          { title: "مستشار طبي", description: "سنتان في تقديم المشورة بشأن مبادرات صحة المرأة" },
        ],
      },
    },
  },
  {
    slug: "dr-james-wilson",
    name: "Dr. James Wilson",
    role: "Laboratory Specialist",
    image:
      "https://plus.unsplash.com/premium_photo-1723780925032-1ad5b130db77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGRvY3RvcnMlMjBwb3J0cmFpdHxlbnwwfDF8MHx8fDA%3D",
    specialty: "Clinical Pathology",
    bio: "Dr. James Wilson is a highly skilled laboratory specialist with expertise in various diagnostic testing methods.",
    skills: [
      { name: "Clinical Pathology", level: 95 },
      { name: "Laboratory Testing", level: 90 },
      { name: "Quality Control", level: 85 },
    ],
    experiences: [
      { title: "Laboratory Director", description: "5+ years at Medical Lab" },
      { title: "Research Scientist", description: "3 years in developing new diagnostic tests" },
    ],
    translations: {
      en: {
        role: "Laboratory Specialist",
        specialty: "Clinical Pathology",
        bio: "Dr. James Wilson is a highly skilled laboratory specialist with expertise in various diagnostic testing methods.",
        skills: [
          { name: "Clinical Pathology", level: 95 },
          { name: "Laboratory Testing", level: 90 },
          { name: "Quality Control", level: 85 },
        ],
        experiences: [
          { title: "Laboratory Director", description: "5+ years at Medical Lab" },
          { title: "Research Scientist", description: "3 years in developing new diagnostic tests" },
        ],
      },
      fr: {
        role: "Spécialiste de laboratoire",
        specialty: "Pathologie clinique",
        bio: "Le Dr James Wilson est un spécialiste de laboratoire hautement qualifié, expert dans diverses méthodes de tests diagnostiques.",
        skills: [
          { name: "Pathologie clinique", level: 95 },
          { name: "Tests de laboratoire", level: 90 },
          { name: "Contrôle qualité", level: 85 },
        ],
        experiences: [
          { title: "Directeur de laboratoire", description: "5+ ans au laboratoire médical" },
          { title: "Chercheur scientifique", description: "3 ans dans le développement de nouveaux tests diagnostiques" },
        ],
      },
      ar: {
        role: "أخصائي مختبر",
        specialty: "علم الأمراض السريري",
        bio: "الدكتور جيمس ويلسون هو أخصائي مختبر ذو مهارات عالية يتمتع بخبرة في طرق الاختبارات التشخيصية المختلفة.",
        skills: [
          { name: "علم الأمراض السريري", level: 95 },
          { name: "اختبارات المختبر", level: 90 },
          { name: "مراقبة الجودة", level: 85 },
        ],
        experiences: [
          { title: "مدير المختبر", description: "5+ سنوات في المختبر الطبي" },
          { title: "عالم أبحاث", description: "3 سنوات في تطوير اختبارات تشخيصية جديدة" },
        ],
      },
    },
  },
  {
    slug: "dr-olivia-martinez",
    name: "Dr. Olivia Martinez",
    role: "Neurologist",
    image:
      "https://images.unsplash.com/photo-1623854767266-d8eeb3b12a89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGRvY3RvcnMlMjBwb3J0cmFpdHxlbnwwfDF8MHx8fDA%3D",
    specialty: "Brain & Nervous System",
    bio: "Dr. Olivia Martinez is a board-certified neurologist specializing in the diagnosis and treatment of neurological disorders.",
    skills: [
      { name: "Neurological Exams", level: 95 },
      { name: "EEG Interpretation", level: 90 },
      { name: "Neurological Rehabilitation", level: 85 },
    ],
    experiences: [
      { title: "Neurology Fellow", description: "2 years at University Hospital" },
      { title: "Neurologist", description: "4+ years at Neurological Clinic" },
    ],
    translations: {
      en: {
        role: "Neurologist",
        specialty: "Brain & Nervous System",
        bio: "Dr. Olivia Martinez is a board-certified neurologist specializing in the diagnosis and treatment of neurological disorders.",
        skills: [
          { name: "Neurological Exams", level: 95 },
          { name: "EEG Interpretation", level: 90 },
          { name: "Neurological Rehabilitation", level: 85 },
        ],
        experiences: [
          { title: "Neurology Fellow", description: "2 years at University Hospital" },
          { title: "Neurologist", description: "4+ years at Neurological Clinic" },
        ],
      },
      fr: {
        role: "Neurologue",
        specialty: "Cerveau et système nerveux",
        bio: "Le Dr Olivia Martinez est une neurologue certifiée, spécialisée dans le diagnostic et le traitement des troubles neurologiques.",
        skills: [
          { name: "Examens neurologiques", level: 95 },
          { name: "Interprétation EEG", level: 90 },
          { name: "Rééducation neurologique", level: 85 },
        ],
        experiences: [
          { title: "Fellow en neurologie", description: "2 ans à l'hôpital universitaire" },
          { title: "Neurologue", description: "4+ ans à la clinique neurologique" },
        ],
      },
      ar: {
        role: "طبيب أعصاب",
        specialty: "الدماغ والجهاز العصبي",
        bio: "الدكتورة أوليفيا مارتينيز هي طبيبة أعصاب معتمدة متخصصة في تشخيص وعلاج الاضطرابات العصبية.",
        skills: [
          { name: "فحوصات عصبية", level: 95 },
          { name: "تفسير تخطيط الدماغ", level: 90 },
          { name: "إعادة التأهيل العصبي", level: 85 },
        ],
        experiences: [
          { title: "زميل في طب الأعصاب", description: "سنتان في المستشفى الجامعي" },
          { title: "طبيب أعصاب", description: "4+ سنوات في العيادة العصبية" },
        ],
      },
    },
  },
  {
    slug: "dr-alexander-patel",
    name: "Dr. Alexander Patel",
    role: "Cardiologist",
    image:
      "https://images.unsplash.com/photo-1730597842283-943c7986ee2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGRvY3RvcnMlMjBwb3J0cmFpdHxlbnwwfDF8MHx8fDA%3D",
    specialty: "Heart Health",
    bio: "Dr. Alexander Patel is a highly skilled cardiologist with expertise in diagnosing and treating various heart conditions.",
    skills: [
      { name: "Cardiac Catheterization", level: 95 },
      { name: "Echocardiography", level: 90 },
      { name: "Cardiac Rhythm Management", level: 85 },
    ],
    experiences: [
      { title: "Cardiology Fellow", description: "2 years at Heart Institute" },
      { title: "Cardiologist", description: "5+ years at Cardiology Clinic" },
    ],
    translations: {
      en: {
        role: "Cardiologist",
        specialty: "Heart Health",
        bio: "Dr. Alexander Patel is a highly skilled cardiologist with expertise in diagnosing and treating various heart conditions.",
        skills: [
          { name: "Cardiac Catheterization", level: 95 },
          { name: "Echocardiography", level: 90 },
          { name: "Cardiac Rhythm Management", level: 85 },
        ],
        experiences: [
          { title: "Cardiology Fellow", description: "2 years at Heart Institute" },
          { title: "Cardiologist", description: "5+ years at Cardiology Clinic" },
        ],
      },
      fr: {
        role: "Cardiologue",
        specialty: "Santé cardiaque",
        bio: "Le Dr Alexander Patel est un cardiologue très compétent, expert dans le diagnostic et le traitement de diverses affections cardiaques.",
        skills: [
          { name: "Cathétérisme cardiaque", level: 95 },
          { name: "Échocardiographie", level: 90 },
          { name: "Gestion du rythme cardiaque", level: 85 },
        ],
        experiences: [
          { title: "Fellow en cardiologie", description: "2 ans à l'Institut de cardiologie" },
          { title: "Cardiologue", description: "5+ ans à la clinique de cardiologie" },
        ],
      },
      ar: {
        role: "طبيب قلب",
        specialty: "صحة القلب",
        bio: "الدكتور ألكسندر باتيل هو طبيب قلب ذو مهارات عالية يتمتع بخبرة في تشخيص وعلاج أمراض القلب المختلفة.",
        skills: [
          { name: "قسطرة القلب", level: 95 },
          { name: "تصوير القلب بالأمواج فوق الصوتية", level: 90 },
          { name: "إدارة نظم القلب", level: 85 },
        ],
        experiences: [
          { title: "زميل في طب القلب", description: "سنتان في معهد القلب" },
          { title: "طبيب قلب", description: "5+ سنوات في عيادة القلب" },
        ],
      },
    },
  },
  {
    slug: "dr-sophia-lee",
    name: "Dr. Sophia Lee",
    role: "Dermatologist",
    image:
      "https://images.unsplash.com/photo-1665080954352-5a12ef53017a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGRvY3RvcnMlMjBwb3J0cmFpdHxlbnwwfDF8MHx8fDA%3D",
    specialty: "Skin Care",
    bio: "Dr. Sophia Lee is a board-certified dermatologist specializing in medical, surgical, and cosmetic dermatology.",
    skills: [
      { name: "Skin Cancer Detection", level: 95 },
      { name: "Cosmetic Procedures", level: 90 },
      { name: "Acne Treatment", level: 85 },
    ],
    experiences: [
      { title: "Dermatology Resident", description: "4 years at University Hospital" },
      { title: "Dermatologist", description: "3+ years at Dermatology Clinic" },
    ],
    translations: {
      en: {
        role: "Dermatologist",
        specialty: "Skin Care",
        bio: "Dr. Sophia Lee is a board-certified dermatologist specializing in medical, surgical, and cosmetic dermatology.",
        skills: [
          { name: "Skin Cancer Detection", level: 95 },
          { name: "Cosmetic Procedures", level: 90 },
          { name: "Acne Treatment", level: 85 },
        ],
        experiences: [
          { title: "Dermatology Resident", description: "4 years at University Hospital" },
          { title: "Dermatologist", description: "3+ years at Dermatology Clinic" },
        ],
      },
      fr: {
        role: "Dermatologue",
        specialty: "Soins de la peau",
        bio: "Le Dr Sophia Lee est une dermatologue certifiée, spécialisée en dermatologie médicale, chirurgicale et cosmétique.",
        skills: [
          { name: "Détection du cancer de la peau", level: 95 },
          { name: "Procédures cosmétiques", level: 90 },
          { name: "Traitement de l'acné", level: 85 },
        ],
        experiences: [
          { title: "Résident en dermatologie", description: "4 ans à l'hôpital universitaire" },
          { title: "Dermatologue", description: "3+ ans à la clinique de dermatologie" },
        ],
      },
      ar: {
        role: "طبيب جلدية",
        specialty: "العناية بالبشرة",
        bio: "الدكتورة صوفيا لي هي طبيبة جلدية معتمدة متخصصة في الأمراض الجلدية الطبية والجراحية والتجميلية.",
        skills: [
          { name: "كشف سرطان الجلد", level: 95 },
          { name: "الإجراءات التجميلية", level: 90 },
          { name: "علاج حب الشباب", level: 85 },
        ],
        experiences: [
          { title: "مقيم في الأمراض الجلدية", description: "4 سنوات في المستشفى الجامعي" },
          { title: "طبيب جلدية", description: "3+ سنوات في عيادة الجلدية" },
        ],
      },
    },
  },
];

export default function DoctorProfile() {
  const { slug } = useParams();
  const { language } = useLanguage();
  console.log(TeamMembers)
  const doctor = TeamMembers?.find((member) => member.slug == slug);

  if (!doctor) {
    return <div>not found</div>;
  }

  // Get translations for the selected language
  const t = doctor.translations[language] || doctor.translations.en;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container mx-auto px-4 py-8"
      dir={language === "ar" ? "rtl" : "ltr"} // Apply RTL for Arabic
    >
      {/* Back Button */}
      <Link href="/team">
        <Button variant="ghost" className="mb-4 text-slate-500 transition-transform hover:-translate-x-2">
          <ArrowLeft className="h-4 w-4" />
          {language === "ar" ? "العودة إلى الفريق" : language === "fr" ? "Retour à l'équipe" : "Back to Team"}
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Profile Image & Social Links */}
        <motion.div className="md:col-span-1">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-4 shadow-lg">
            <Image
              src={doctor.image || "/placeholder.svg"}
              alt={doctor.name}
              fill
              className="object-cover transition-transform duration-300"
            />
          </div>
          <h1 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            {doctor.name}
          </h1>
          <p className="text-xl text-blue-600 mb-4">{t.role}</p>
          
          {/* Social Links */}
          <div className="flex space-x-4 mb-6">
            <SocialIcon href="#" icon={<Linkedin size={20} />} />
            <SocialIcon href="#" icon={<Facebook size={20} />} />
            <SocialIcon href="#" icon={<Twitter size={20} />} />
            <SocialIcon href="#" icon={<Instagram size={20} />} />
            <SocialIcon href="#" icon={<Youtube size={20} />} />
            <SocialIcon href="#" icon={<Github size={20} />} />
          </div>
          
          {/* Book Appointment Button */}
          <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white transition-all">
            {language === "ar" ? "حجز موعد" : language === "fr" ? "Prendre rendez-vous" : "Book Appointment"}
          </Button>
        </motion.div>

        {/* Right Column: Details Section */}
        <motion.div className="md:col-span-2">
          {/* About Section */}
          <motion.section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {language === "ar" ? "عن الطبيب" : language === "fr" ? "À propos du médecin" : "About the Doctor"}
            </h2>
            <p className="text-gray-700">{t.bio}</p>
          </motion.section>

          {/* Skills Section */}
          <motion.section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {language === "ar" ? "أفضل المهارات" : language === "fr" ? "Meilleures compétences" : "Best Skills"}
            </h2>
            <div className="space-y-4">
              {t.skills.map((skill, index) => (
                <SkillBar key={index} label={skill.name} value={skill.level} />
              ))}
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {language === "ar" ? "الخبرات السابقة" : language === "fr" ? "Expériences passées" : "Past Experiences"}
            </h2>
            <ul className="space-y-4">
              {t.experiences.map((exp, index) => (
                <ExperienceItem key={index} number={index + 1} title={exp.title} description={exp.description} />
              ))}
            </ul>
          </motion.section>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Social Icon Component
const SocialIcon = ({ href, icon }: { href: string; icon: JSX.Element }) => (
  <Link href={href} className="text-gray-600 hover:text-blue-600 transition-colors">
    {icon}
  </Link>
);

// Skill Bar Component
const SkillBar = ({ label, value }: { label: string; value: number }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium dark:text-white">{label}</span>
      <span className="text-sm font-medium text-gray-700 dark:text-white">{value}%</span>
    </div>
    <Progress value={value} className="w-full h-1 bg-blue-500" />
  </div>
);

// Experience Item Component
const ExperienceItem = ({ number, title, description }: { number: number; title: string; description: string }) => (
  <li className="flex items-start gap-2">
    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white mr-3 mt-1">
      {number}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </li>
);
