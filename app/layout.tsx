"use client"

import Footer from '@/components/Footer'
import './globals.css'
import Navbar from '@/components/Navbar'
import VisitorCounter from '@/components/VisitorCounter'
import { ThemeProvider } from "next-themes"
import Head from 'next/head'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="dark:bg-stone-900 transition-colors duration-300">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light"
          enableSystem={false}
        >
          <Navbar /> 
          {children}
          <div className="py-2 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 flex justify-center">
              <VisitorCounter />
            </div>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
