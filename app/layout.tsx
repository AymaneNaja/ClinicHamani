import type { Metadata } from 'next'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { LanguageProvider } from '@/context/LanguageContext'

export const metadata: Metadata = {
  title: 'Clinic Hamani',
  description: 'the Most reliable medical service near you ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>

      <SiteHeader/>
        {children}
      <SiteFooter/>
        </LanguageProvider>
        </body>
    </html>
  )
}
