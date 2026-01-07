"use client"

import Footer from '@/components/Footer'
import './globals.css'
import Navbar from '@/components/Navbar'
import VisitorCounter from '@/components/VisitorCounter'
import { ThemeProvider } from "next-themes"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-stone-900 transition-colors duration-300">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light"
          enableSystem={false}
        >
          <Navbar /> 
          {children}
          <Footer />
          <VisitorCounter />
        </ThemeProvider>
      </body>
    </html>
  )
}
