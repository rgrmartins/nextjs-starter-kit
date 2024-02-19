import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextJS 14 Course - Hamed',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
