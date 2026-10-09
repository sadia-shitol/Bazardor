import type { Metadata } from 'next'
import { Noto_Serif_Bengali } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const NotoSerifBengali = Noto_Serif_Bengali({
  subsets: ['latin', 'bengali'],
})

export const metadata: Metadata = {
  title: 'বাজার দর',
  description:
    'Bengali market price tracking app-প্রয়োজনীয় পণ্যের দাম এক নজরে',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      data-theme='light'
      className={`${NotoSerifBengali.className} $ h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  )
}
