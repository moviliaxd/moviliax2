'use client'

import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_ID} />
      )}

      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
