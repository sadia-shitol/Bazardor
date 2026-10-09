import React from 'react'
import Image from 'next/image'
import logo from '@/app/assets/logo.png'
import Container from '@/app/components/Container'
const Footer = () => {
  return (
    <div className='bg-base-200 shadow-sm -mb-96 '>
      <Container>
        <footer className='footer sm:footer-horizontal  text-black items-end p-4'>
          <aside className='grid-flow-col items-end'>
            <Image src={logo} alt=' logo' />
            <span className='text-lg font-bold'>
              বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
            </span>
          </aside>
          <nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
            <p>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>
          </nav>
        </footer>
      </Container>
    </div>
  )
}

export default Footer
