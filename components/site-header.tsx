"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { HeartPulse, Menu, Home, Info, Stethoscope, Users, PhoneCall, Languages } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion, AnimatePresence } from "framer-motion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Flag from "react-world-flags" // Import flag component
import  HomeTranslations  from "@/lib/Translations/HomeTranslations"
export function SiteHeader() {
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path
  const t = HomeTranslations?.[language as keyof typeof HomeTranslations] || HomeTranslations?.en || {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      team: "Team",
      contact: "Contact"
    },
    cta: {
      getStarted: "Get Started"
    }
  }
  console.log(HomeTranslations)

  const navItems = [
    { href: "/", label: t.nav.home, icon: Home },
    { href: "/about", label: t.nav.about, icon: Info },
    { href: "/services", label: t.nav.services, icon: Stethoscope },
    { href: "/team", label: t.nav.team, icon: Users },
    { href: "/contact", label: t.nav.contact, icon: PhoneCall },
  ]

  const languages = [
    { code: "en", label: "English", flag: <Flag code="GB" className="h-4 w-4" /> },
    { code: "fr", label: "Français", flag: <Flag code="FR" className="h-4 w-4" /> },
    { code: "ar", label: "العربية", flag: <Flag code="DZ" className="h-4 w-4" /> }, // Algeria flag for Arabic
  ]

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang as keyof typeof languages)
  }

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
        scrolled ? "bg-background/95 shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <HeartPulse className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">Clinic Hamani</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.href) ? "text-primary" : "text-foreground"
              }`}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Language Switcher Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="flex items-center gap-2">
                <Languages className="h-6 w-6" />
                <span className="sr-only">Change Language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code} onClick={() => handleLanguageChange(lang.code)}>
                  <div className="flex items-center gap-2">
                    {lang.flag}
                    <span>{lang.label}</span>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button className="bg-primary hover:bg-primary/90" asChild>
            <Link href="/contact">{t.cta.getStarted}</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <AnimatePresence>
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-2 text-lg font-medium transition-colors hover:text-primary ${
                          isActive(item.href) ? "text-primary" : "text-foreground"
                        }`}
                      >
                        <item.icon className="h-5 w-5" />
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
