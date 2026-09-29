import Footer from '@/components/Footer'
import './globals.css'
import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'

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
      <body className="bg-gray-300 dark:bg-gray-950 transition-colors duration-300">
        <Providers>
          <Navbar />
          <div className="max-w-5xl mx-auto shadow-2xl">
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
